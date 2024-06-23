import * as glm from "gl-matrix";
import { Framebuffer } from "./framebuffer";

export interface RenderStageCreateInfo 
{
    viewport: {width : number, height : number}
    clearColor : glm.vec4;
    depthTest : boolean;
    depthFunc : number;
    blending : boolean;
    blendFunc : number;
};

export class RenderStage 
{
    constructor(readBuffer : Framebuffer | null, writeBuffer : Framebuffer | null, createInfo : RenderStageCreateInfo) 
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