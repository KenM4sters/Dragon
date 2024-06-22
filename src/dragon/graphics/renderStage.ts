import * as glm from "gl-matrix";
import { Framebuffer } from "./framebuffer";
import { Renderer } from "./renderer";
import { Primitives } from "../primitives";

export class RenderStage 
{
    constructor(renderer : Renderer, readBuffer : Framebuffer) 
    {
        this.readBuffer = readBuffer;
        this.renderer = renderer;
    }

    public SetWriteBuffer(writeBuffer : Framebuffer) : void 
    {
        this.writeBuffer = writeBuffer;
    }

    

    public GetReadBuffer() : Framebuffer { return this.readBuffer; }
    public GetWriteBuffer() : Framebuffer | null { return this.writeBuffer; }

    private readBuffer : Framebuffer;
    private writeBuffer : Framebuffer | null = null;

    public clearColor : glm.vec4;
    public depthTest : number;
}