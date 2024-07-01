import { Primitives } from "../../primitives";
import { RawTexture2D, RawTextureCreateInfo } from "../texture";
import { SpecialFXPass, SpecialFXPassTypes } from "./pass";
import { RenderTargetCreateInfo } from "../renderer/target";
import { SpecialFX } from "./specialFX";

import vertSrc from "../../resources/shaders/screen_quad.vert?raw"
import fragSrc from "../../resources/shaders/ssaa.frag?raw"

export interface SSAAPassCreateInfo 
{
    screenResMultiplier: number;
};

export class SSAAPass extends SpecialFXPass 
{
    constructor(specialFx : SpecialFX, createInfo : SSAAPassCreateInfo)  
    {
        super(specialFx.renderer, SpecialFXPassTypes.ToneMapping, []);
        this.specialFx = specialFx;
        this.ssaaInfo = createInfo;

        this.screenQuad = new Primitives.Square(vertSrc, fragSrc);


        this.highResTexInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA32F,
            width: this.gl.canvas.width * this.ssaaInfo.screenResMultiplier,
            height: this.gl.canvas.height * this.ssaaInfo.screenResMultiplier,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_2D,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.REPEAT,
                tWrap: this.gl.REPEAT,
            }
        }
    }

    public Render(read: RawTexture2D, write: RawTexture2D): void 
    {
        const texInfo = read.GetTextureInfo();
        
        const target = this.specialFx.target;
        target.writeBuffer = this.specialFx.target.writeBuffer;
        target.viewport = {width: this.gl.canvas.width * this.ssaaInfo.screenResMultiplier, height: this.gl.canvas.height * this.ssaaInfo.screenResMultiplier};

        this.highResTexInfo.width = this.gl.canvas.width * this.ssaaInfo.screenResMultiplier;
        this.highResTexInfo.height = this.gl.canvas.height * this.ssaaInfo.screenResMultiplier;
        this.renderer.SetRenderTarget(target);
        write.Resize(this.highResTexInfo);
        target.writeBuffer?.SetColorAttachment(write, this.gl.COLOR_ATTACHMENT0);

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(texInfo.dimension, read.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "uToneMappedTexture"), 0);

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);


        target.writeBuffer = null;
        target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};
        this.renderer.SetRenderTarget(target);
        this.highResTexInfo.width = this.gl.canvas.width;
        this.highResTexInfo.height = this.gl.canvas.height;
        
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(texInfo.dimension, write.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "uToneMappedTexture"), 0);
        
        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);
        
        write.Resize(this.highResTexInfo);


        this.renderer.End();
    }

    public Resize(width: number, height: number): void 
    {
    }

    private specialFx : SpecialFX;
    private ssaaInfo : SSAAPassCreateInfo;
    private highResTexInfo : RawTextureCreateInfo; 
}