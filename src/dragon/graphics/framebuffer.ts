import { RawCubeTexture, RawTexture2D, RawTextureCreateInfo } from "./texture";
import { Ref, WebGL } from "../webgl";


export interface FramebufferCreateInfo 
{
    targetTexture : RawTexture2D;
    attachmentUnit : number;
    renderBufferCreateInfo : RenderbufferCreateInfo | null;
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
    constructor(createInfo : FramebufferCreateInfo) 
    {
        this.gl = WebGL.GetInstance().gl;

        // Create native framebuffer id
        //
        const framebufferId = this.gl.createFramebuffer();

        if(!framebufferId) 
        {
            throw new Error("Failed to create framebuffer!");
        }

        this.framebufferId = {val: framebufferId};
        this.renderbufferId = {val: null};
        this.framebufferInfo = createInfo;


        // Create native framebuffer
        //
        const texInfo = createInfo.targetTexture.GetTextureInfo();
        const attachmentUnit = this.gl.COLOR_ATTACHMENT0 + createInfo.attachmentUnit;
        this.gl.bindTexture(texInfo.dimension, createInfo.targetTexture.GetId().val); 
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentUnit, 
            createInfo.targetTexture.GetTextureInfo().dimension, 
            createInfo.targetTexture.GetId().val, 0); 
        
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindTexture(texInfo.dimension, null);
        

        // Check for any errors.
        //
        const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);

        if (status != this.gl.FRAMEBUFFER_COMPLETE) 
        {
            console.error('Framebuffer is not complete: ' + status.toString(16));
        }   


        // Create render buffer if the createInfo contains a RenderBufferCreateInfo.
        //
        if(createInfo.renderBufferCreateInfo) 
        {            
            this.renderBufferInfo = createInfo.renderBufferCreateInfo;
    
            const renderbufferId = this.gl.createRenderbuffer();
    
            if(!renderbufferId) 
            {
                throw new Error("Failed to create framebuffer!");
            }
    
            this.renderbufferId = {val: renderbufferId};
    
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbufferId.val);
    
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, createInfo.renderBufferCreateInfo.format, createInfo.renderBufferCreateInfo.width, createInfo.renderBufferCreateInfo.height);
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, createInfo.renderBufferCreateInfo.attachmentType, this.gl.RENDERBUFFER, this.renderbufferId.val);
            
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
        }
    }

    public Resize(width : number, height : number) : void 
    {
        if(this.renderBufferInfo) 
        {
            this.renderBufferInfo.width = width;
            this.renderBufferInfo.height = height;

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbufferId.val);
    
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.renderBufferInfo.format, this.renderBufferInfo.width, this.renderBufferInfo.height);
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.renderBufferInfo.attachmentType, this.gl.RENDERBUFFER, this.renderbufferId.val);
        }
    }

    public SetColorAttachment(texture : RawTexture2D | RawCubeTexture, attachmentUnit : number, level : number = 0) 
    {
        const unit = this.gl.COLOR_ATTACHMENT0 + attachmentUnit;

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, unit, 
            texture.GetTextureInfo().dimension, 
            texture.GetId().val, level); 

        this.Resize(texture.GetTextureInfo().width, texture.GetTextureInfo().height);
    }

    public DrawToAttachment(attachmentUnit : number[]) 
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.drawBuffers(attachmentUnit);
    }

    public Destroy() : void 
    {
        this.gl.deleteFramebuffer(this.framebufferId.val);
        this.gl.deleteRenderbuffer(this.renderbufferId.val);
        
        if(this.framebufferInfo) 
        {
            this.framebufferInfo.targetTexture.Destroy();
        }
    }

    public GetFramebufferId() : Ref<WebGLFramebuffer> { return this.framebufferId};
    public GetRenderbufferId() : Ref<WebGLRenderbuffer | null> { return this.renderbufferId;}

    public framebufferInfo : FramebufferCreateInfo;
    public renderBufferInfo : RenderbufferCreateInfo | null = null;

    private framebufferId : Ref<WebGLFramebuffer>;
    private renderbufferId : Ref<WebGLRenderbuffer | null>;
    private gl : WebGL2RenderingContext;
};


