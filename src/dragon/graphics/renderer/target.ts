import * as glm from "gl-matrix";
import { Framebuffer, FramebufferCreateInfo } from "../framebuffer";


export interface RenderTargetCreateInfo 
{
    viewport: {width : number, height : number}
    clearColor : glm.vec4;
    depthTest : boolean;
    depthFunc : number;
    blending : boolean;
    blendFunc : number;
};

export class RenderTarget 
{
    constructor(readBuffer : Framebuffer | null, writeBuffer : Framebuffer | null, createInfo : RenderTargetCreateInfo) 
    {
        this.readBuffer = readBuffer;
        this.writeBuffer = writeBuffer;

        this.viewport = createInfo.viewport;
        this.clearColor = createInfo.clearColor;
        this.depthTest = createInfo.depthTest;
        this.depthFunc = createInfo.depthFunc;
        this.blending = createInfo.blending;
        this.blendFunc = createInfo.blendFunc;
    }

    public Recreate(FramebufferCreateInfo : FramebufferCreateInfo, createInfo : RenderTargetCreateInfo) : void 
    {

        if(this.writeBuffer) 
        {
            this.writeBuffer.Create(FramebufferCreateInfo);
        }

        this.viewport = createInfo.viewport;
        this.clearColor = createInfo.clearColor;
        this.depthTest = createInfo.depthTest;
        this.depthFunc = createInfo.depthFunc;
        this.blending = createInfo.blending;
        this.blendFunc = createInfo.blendFunc;
    }

    public Destroy() : void 
    {
        this.writeBuffer?.Destroy();
    }

    public GetReadBuffer() : Framebuffer | null { return this.readBuffer; }
    public GetWriteBuffer() : Framebuffer | null { return this.writeBuffer; }


    private readBuffer : Framebuffer | null = null;
    private writeBuffer : Framebuffer | null = null;

    public clearColor : glm.vec4;
    public depthTest : boolean;
    public depthFunc : number;
    public viewport : {width: number, height: number};
    public blending : boolean;
    public blendFunc : number;
}