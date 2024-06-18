import { Framebuffer } from "./framebuffer";
import { Layer } from "./webgl";

export class Pass implements Layer 
{
    constructor(framebuffer : Framebuffer | null) 
    {
        this.framebuffer = framebuffer;
    }

    OnResize(): void 
    {
        
    }

    Render() : void 
    {
        
    }

    public GetFramebuffer() : Framebuffer | null { return this.framebuffer; }

    private framebuffer : Framebuffer | null;
}