import { Primitives } from "../../primitives";
import { Framebuffer } from "../framebuffer";
import { Renderer } from "../renderer";


export abstract class Pass 
{
    constructor(renderer : Renderer, readBuffer : Framebuffer, vertSrc : string, fragSrc : string) 
    {
        this.quad = new Primitives.Square(vertSrc, fragSrc);

        this.readBuffer = readBuffer;
        this.renderer = renderer;
    }

    public SetWriteBuffer(writeBuffer : Framebuffer) : void 
    {
        this.writeBuffer = writeBuffer;
    }

    public abstract Render() : void;

    public GetQuad() : Primitives.Square { return this.quad; }
    public GetReadBuffer() : Framebuffer { return this.readBuffer; }
    public GetWriteBuffer() : Framebuffer | null { return this.writeBuffer; }

    protected quad : Primitives.Square;
    protected readBuffer : Framebuffer;
    protected writeBuffer : Framebuffer | null = null;
    protected renderer : Renderer;
}