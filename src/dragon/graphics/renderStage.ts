import { Layer, WebGL } from "../webgl";
import { Framebuffer, FramebufferCreateInfo, RenderbufferCreateInfo } from "./framebuffer";
import { RawTexture2D } from "./texture";


export class RenderStage implements Layer
{
    constructor(framebuffer : Framebuffer) 
    {
        this.framebuffer = framebuffer;
    }

    public CreateStage(framebufferInfo : FramebufferCreateInfo | null, renderbufferinfo : RenderbufferCreateInfo | null = null) : void 
    {   
        if(framebufferInfo) 
        {
            this.framebuffer.CreateFrambuffer(framebufferInfo);
        }
        if(renderbufferinfo) 
        {
            this.framebuffer.CreateRenderbuffer(renderbufferinfo);
        }
    }

    public Begin() : void 
    {
        const gl = WebGL.GetInstance().gl;        
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer.GetFramebufferId().val);
    }

    public End() : void 
    {
        const gl = WebGL.GetInstance().gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    public OnResize(): void 
    {

    }

    public GetTargetTexture() : RawTexture2D 
    {
        return this.framebuffer.framebufferInfo.targetTexture;
    }

    public Destroy() : void 
    {
        this.framebuffer.Destroy();
    }

    private framebuffer : Framebuffer;
};