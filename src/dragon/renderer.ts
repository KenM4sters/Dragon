import { Shader } from "./shader";
import { VertexArray } from "./vertexArray";
import { Layer, WebGL } from "./webgl";


export class Renderer implements Layer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;
        this.gl.enable(this.gl.DEPTH_TEST);
    }

    public Render(vertexArray : VertexArray, shader : Shader) 
    { 
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
    
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
        
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);

    }

    public Begin() 
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