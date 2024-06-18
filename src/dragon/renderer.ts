import { Layer, WebGL } from "./webgl";


export class Renderer implements Layer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;
    }

    public Render() 
    {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0.11, 0.1, 0.1, 1.0);        
    }

    public OnResize(): void 
    {
        
    }

    private gl : WebGL2RenderingContext;
};