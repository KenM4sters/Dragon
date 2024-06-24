import { SpecialFXPass } from "../renderer/pass";
import { Renderer } from "../renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../renderer/target";
import { Primitives } from "../../primitives";

import passVert from "../../resources/Raw.vert?raw";
import hdrFrag from "../../resources/HDR.frag?raw";


export interface HDRPassCreateInfo 
{
    exposure: number;
};

export class HDRPass extends SpecialFXPass 
{
    constructor(renderer : Renderer, readTarget : RenderTarget, hdrInfo : HDRPassCreateInfo) 
    {
        super(renderer);

        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        
        const targetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: canvas.width, height: canvas.height},
            clearColor: [0.1, 0.1, 0.4, 1.0],
            depthTest: false,
            depthFunc: this.gl.LEQUAL,
            blending: true,
            blendFunc: this.gl.ONE
        };

        this.writeTarget = new RenderTarget(readTarget.GetWriteBuffer(), null, targetInfo);

        this.hdrInfo = hdrInfo;

        this.screenQuad = new Primitives.Square(passVert, hdrFrag);
    }

    public override Render(elapsedTime: number, timeStep: number): void 
    {
        this.renderer.SetRenderTarget(this.writeTarget);
        const readBuffer = this.writeTarget.GetReadBuffer();

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);

        if(readBuffer) 
        {   
            this.gl.bindTexture(readBuffer.framebufferInfo.dimension, readBuffer.framebufferInfo.targetTexture.GetId().val);
            this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "tex"), 0);
        }

        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "exposure"), this.hdrInfo.exposure);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public override Resize(width: number, height: number): void 
    {
        this.writeTarget.viewport = {width: width, height: height};
    }

    private writeTarget : RenderTarget;
    private hdrInfo : HDRPassCreateInfo;

}