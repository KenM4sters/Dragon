import { Layer } from "./webgl";
import { WebGL } from "./webgl";

export class Pass implements Layer 
{
    constructor() {}

    OnResize(): void 
    {
        
    }

    Render() : void 
    {
        
    }

    private target : WebGLTexture | null = null;
}