import { RawTexture2D } from "./texture";
import { Ref, WebGL } from "./webgl";


export interface FramebufferCreateInfo 
{
    targetTexture : RawTexture2D;
    attchmentUnit : number;
    renderBuffer : WebGLRenderbuffer | null;
};

export interface RenderbufferCreateInfo 
{
    width : number;
    height : number;
    format : number;
    attachmentType : number;
};

export class Framebuffer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;

        const framebufferId = this.gl.createFramebuffer();

        if(!framebufferId) 
        {
            throw new Error("Failed to create framebuffer!");
        }

        this.framebufferId = {val: framebufferId};

        this.renderbufferId = {val: null};
    }   

    public CreateFrambuffer(framebufferInfo : FramebufferCreateInfo): void 
    {
        const attachmentUnit = this.gl.COLOR_ATTACHMENT0 + framebufferInfo.attchmentUnit;
        
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentUnit, 
            framebufferInfo.targetTexture.GetTextureInfo().dimension, 
            framebufferInfo.targetTexture.GetId().val, 0); 
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        
        // Check for any errors.
        //
        const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
        if (status != this.gl.FRAMEBUFFER_COMPLETE) 
        {
            console.error('Framebuffer is not complete: ' + status.toString(16));
        }   
    }

    public CreateRenderbuffer(renderbufferInfo : RenderbufferCreateInfo) : void 
    {
        const renderbufferId = this.gl.createRenderbuffer();

        if(!renderbufferId) 
        {
            throw new Error("Failed to create framebuffer!");
        }

        this.renderbufferId = {val: renderbufferId};

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbufferId.val);

        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, renderbufferInfo.format, renderbufferInfo.width, renderbufferInfo.height);
        this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, renderbufferInfo.attachmentType, this.gl.RENDERBUFFER, this.renderbufferId.val);
        
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);

    }

    private framebufferId : Ref<WebGLFramebuffer>;
    private renderbufferId : Ref<WebGLRenderbuffer | null>;
    private gl : WebGL2RenderingContext;
};