import { Primitives } from "../../primitives";
import { RawTexture2D } from "../texture";
import { SpecialFXPass, SpecialFXPassTypes } from "./pass";
import { RenderTargetCreateInfo } from "../renderer/target";
import { SpecialFX } from "./specialFX";

import vertSrc from "../../resources/shaders/screen_quad.vert?raw"
import fragSrc from "../../resources/shaders/tone_mapping.frag?raw"

export interface ToneMappingPassCreateInfo 
{
    exposure : number;
};

export class ToneMappingPass extends SpecialFXPass 
{
    constructor(specialFx : SpecialFX, createInfo : ToneMappingPassCreateInfo)  
    {
        super(specialFx.renderer, SpecialFXPassTypes.ToneMapping, []);
        this.specialFx = specialFx;
        this.toneMappingInfo = createInfo;

        this.screenQuad = new Primitives.Square(vertSrc, fragSrc);
    }

    public Render(read: RawTexture2D, write: RawTexture2D): void 
    {
        const target = this.specialFx.target;
        target.writeBuffer = this.specialFx.target.writeBuffer;
        target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height}
        
        this.renderer.SetRenderTarget(target);

        target.writeBuffer?.SetColorAttachment(write, this.gl.COLOR_ATTACHMENT0);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);

        const texInfo = read.GetTextureInfo();

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(texInfo.dimension, read.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "hdrTex"), 0);
        this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "exposure"), this.toneMappingInfo.exposure);

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public Resize(width: number, height: number): void 
    {
    }

    private specialFx : SpecialFX;
    private toneMappingInfo : ToneMappingPassCreateInfo;
}