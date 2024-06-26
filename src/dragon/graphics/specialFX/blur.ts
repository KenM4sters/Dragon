import { RawTexture2D } from "../texture";
import { SpecialFXPass, SpecialFXPassTypes } from "./pass";
import { Primitives } from "../../primitives";
import { SpecialFX } from "./specialFX";

import vertSrc from "../../resources/shaders/screen_quad.vert?raw"
import fragSrc from "../../resources/shaders/down_sampling.frag?raw"

export interface BlurPassCreateInfo 
{
    filterRadius : number;
};

export class BlurPass extends SpecialFXPass 
{
    constructor(specialFx : SpecialFX, createInfo : BlurPassCreateInfo)  
    {
        super(specialFx.renderer, SpecialFXPassTypes.ToneMapping, []);
        this.specialFx = specialFx;
        this.blurInfo = createInfo;

        this.screenQuad = new Primitives.Square(vertSrc, fragSrc);
    }

    public Render(read: RawTexture2D, write: RawTexture2D): void 
    {
        const target = this.specialFx.target;

        this.renderer.SetRenderTarget(target);

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);

        const texInfo = read.GetTextureInfo();

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(texInfo.dimension, read.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "readTex"), 0);
        this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "filterRadius"), this.blurInfo.filterRadius);

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public Resize(width: number, height: number): void 
    {
        
    }

    private specialFx : SpecialFX;
    private blurInfo : BlurPassCreateInfo;
}