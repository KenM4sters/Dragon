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
        this.framebufferInfo = framebufferInfo;


        framebufferInfo.targetTexture.CreateTextureImage2D(
        {
            dimension: framebufferInfo.dimension,
            format: framebufferInfo.format,  
            width: framebufferInfo.width,
            height: framebufferInfo.height,
            nChannels: framebufferInfo.nChannels,
            type: framebufferInfo.type,
            data: framebufferInfo.data
        });

        framebufferInfo.targetTexture.CreateSampler(
        {
            dimension: framebufferInfo.dimension,
            minFilter: framebufferInfo.minFilter,
            magFilter: framebufferInfo.magFilter,
            sWrap: framebufferInfo.sWrap,
            tWrap: framebufferInfo.tWrap
        });

        const attachmentUnit = this.gl.COLOR_ATTACHMENT0 + framebufferInfo.attachmentUnit;
        
        this.gl.bindTexture(framebufferInfo.dimension, framebufferInfo.targetTexture.GetId().val); 
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentUnit, 
            framebufferInfo.targetTexture.GetTextureInfo().dimension, 
            framebufferInfo.targetTexture.GetId().val, 0); 
        
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindTexture(framebufferInfo.dimension, null);
        
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
        this.renderBufferInfo = renderbufferInfo;
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

    public framebufferInfo !: FramebufferCreateInfo;
    public renderBufferInfo !: RenderbufferCreateInfo;

    private framebufferId : Ref<WebGLFramebuffer>;
    private renderbufferId : Ref<WebGLRenderbuffer | null>;
    private gl : WebGL2RenderingContext;
};