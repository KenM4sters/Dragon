import { Shader } from "./shader.ts";
import { VertexArray } from "./vertexArray.ts";
import { Layer, WebGL } from "../webgl.ts";
import { RenderStage } from "./renderStage.ts";
import { RawTexture2D } from "./texture.ts";


export class Renderer implements Layer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;
        this.gl.enable(this.gl.DEPTH_TEST);
    }

    public RenderCube(vertexArray : VertexArray, shader : Shader) 
    { 
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
    
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
        
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);
    }

    public RenderQuad(vertexArray : VertexArray, shader : Shader) 
    { 
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
    
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);
    }

    public BeginStage(stage : RenderStage) : void 
    {
        stage.Begin();

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0.1, 0.1, 0.1, 1.0); 
    }

    public EndStage(stage : RenderStage) : RawTexture2D 
    {
        stage.End();
        return stage.GetTargetTexture();
    }

    public OnResize(): void 
    {
        
    }

    private gl : WebGL2RenderingContext;
};