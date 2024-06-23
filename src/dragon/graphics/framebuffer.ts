import { RawTexture2D } from "./texture";
import { Ref, WebGL } from "../webgl";


export interface FramebufferCreateInfo 
{
    targetTexture : RawTexture2D;
    dimension : number;
    format : number;  
    width : number;
    height : number;
    nChannels : number;
    type: number;
    data : Float32Array | Uint8Array | Uint16Array | Uint32Array | null;
    minFilter : number;
    magFilter : number;
    sWrap : number;
    tWrap : number;
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


        // Create Texture object.
        //
        createInfo.targetTexture.CreateTextureImage2D(
        {
            dimension: createInfo.dimension,
            format: createInfo.format,  
            width: createInfo.width,
            height: createInfo.height,
            nChannels: createInfo.nChannels,
            type: createInfo.type,
            data: createInfo.data
        });


        // Create Sampler.
        //  
        createInfo.targetTexture.CreateSampler(
        {
            dimension: createInfo.dimension,
            minFilter: createInfo.minFilter,
            magFilter: createInfo.magFilter,
            sWrap: createInfo.sWrap,
            tWrap: createInfo.tWrap
        });


        // Create native framebuffer
        //
        const attachmentUnit = this.gl.COLOR_ATTACHMENT0 + createInfo.attachmentUnit;
        this.gl.bindTexture(createInfo.dimension, createInfo.targetTexture.GetId().val); 
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentUnit, 
            createInfo.targetTexture.GetTextureInfo().dimension, 
            createInfo.targetTexture.GetId().val, 0); 
        
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindTexture(createInfo.dimension, null);
        

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