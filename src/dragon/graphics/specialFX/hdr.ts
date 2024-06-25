import { SpecialFXPass } from "../renderer/pass";
import { Renderer } from "../renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../renderer/target";
import { Primitives } from "../../primitives";

import passVert from "../../resources/shaders/Raw.vert?raw";
import hdrFrag from "../../resources/shaders/HDR.frag?raw";


export interface HDRPassCreateInfo 
{
    exposure: number;
    bloomStrength: number;
};

export class HDRPass extends SpecialFXPass 
{
    constructor(renderer : Renderer, readTarget : RenderTarget[], hdrInfo : HDRPassCreateInfo) 
    {
        super(renderer);

        this.bloomTarget = readTarget[0];
        this.sceneTarget = readTarget[1];

        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        
        const targetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: canvas.width, height: canvas.height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: false,
            depthFunc: this.gl.LEQUAL,
            blending: true,
            blendFunc: this.gl.ONE
        };

        this.writeTarget = new RenderTarget(readTarget[0].GetWriteBuffer(), null, targetInfo);

        this.hdrInfo = hdrInfo;

        this.screenQuad = new Primitives.Square(passVert, hdrFrag);
    }

    public override Render(elapsedTime: number, timeStep: number): void 
    {
        this.renderer.SetRenderTarget(this.writeTarget);

        const bloomBuffer = this.bloomTarget.GetWriteBuffer();
        const sceneBuffer = this.sceneTarget.GetWriteBuffer();

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);


        if(bloomBuffer && sceneBuffer) 
        {   
            const texInfo = bloomBuffer.framebufferInfo.targetTexture.GetTextureInfo();

            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(texInfo.dimension, sceneBuffer.framebufferInfo.targetTexture.GetId().val);
            this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "sceneTex"), 0);
            
            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(texInfo.dimension, bloomBuffer.framebufferInfo.targetTexture.GetId().val);
            this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "bloomTex"), 1);

            this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "exposure"), this.hdrInfo.exposure);
            this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "bloomStrength"), this.hdrInfo.bloomStrength);
        }

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public override Resize(width: number, height: number): void 
    {
        this.writeTarget.viewport = {width: width, height: height};
    }

    public override GetWriteTarget(): RenderTarget 
    {
        return this.writeTarget;    
    }

    private sceneTarget : RenderTarget;
    private bloomTarget : RenderTarget;
    
    private writeTarget : RenderTarget;
    private hdrInfo : HDRPassCreateInfo;

}