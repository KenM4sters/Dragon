import { Framebuffer, FramebufferCreateInfo } from "../framebuffer";


export interface RenderTargetCreateInfo 
{
    viewport: {width : number, height : number}
    depthFunc : number;
    blendFunc : number;
};

export class RenderTarget 
{
    constructor(writeBuffer : Framebuffer, createInfo : RenderTargetCreateInfo) 
    {
        this.writeBuffer = writeBuffer;

        this.viewport = createInfo.viewport;
        this.depthFunc = createInfo.depthFunc;
        this.blendFunc = createInfo.blendFunc;
    }

    public Resize(width : number, height : number, createInfo : RenderTargetCreateInfo) : void 
    {
        this.writeBuffer?.Resize(width, height);

        this.viewport = createInfo.viewport;
        this.depthFunc = createInfo.depthFunc;
        this.blendFunc = createInfo.blendFunc;
    }

    public Destroy() : void 
    {
        this.writeBuffer?.Destroy();
    }
    
    public writeBuffer : Framebuffer | null;

    public viewport : {width: number, height: number};
    public depthFunc : number;
    public blendFunc : number;

}