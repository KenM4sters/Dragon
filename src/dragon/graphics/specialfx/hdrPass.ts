import { Framebuffer } from "../framebuffer";
import { Renderer } from "../renderer";
import { Pass } from "./pass";


export class HDRPass extends Pass 
{
    constructor(renderer : Renderer, readBuffer : Framebuffer, vertSrc : string, fragSrc : string) 
    {
        super(renderer, readBuffer, vertSrc, fragSrc);
    }

    public override Render(): void 
    {
        const gl = this.renderer.gl;
        const readTexture = this.readBuffer.framebufferInfo.targetTexture;

        gl.bindTexture(readTexture.GetTextureInfo().dimension, readTexture.GetId().val);
        gl.useProgram(this.quad.GetShader().GetId().val);
        
        gl.uniform1i(gl.getUniformLocation(this.quad.GetShader().GetId().val, "tex"), 0);
        this.renderer.RenderQuad(this.quad.GetVertexArray(), this.quad.GetShader());

        gl.bindTexture(readTexture.GetTextureInfo().dimension, null);
        gl.useProgram(null);
    }
}