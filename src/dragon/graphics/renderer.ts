import { Shader } from "./shader";
import { VertexArray } from "./vertexArray";
import { Layer, WebGL } from "../webgl";
import { RawTexture2D } from "./texture";
import { RenderStage } from "./renderStage";


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
        this.gl.viewport(0, 0, stage.viewport.width, stage.viewport.height);

        if(stage.depthTest) 
        {
            this.gl.enable(this.gl.DEPTH_TEST);
            this.gl.depthFunc(stage.depthFunc);
        }  
            
        const writeBuffer = stage.GetWriteBuffer();
        if(writeBuffer) 
        {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, writeBuffer.GetFramebufferId().val);
        }
        else 
        {            
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        }
                
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(stage.clearColor[0], stage.clearColor[1], stage.clearColor[2], stage.clearColor[3]);
    }

    public EndStage() : void
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.useProgram(null);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindTexture(this.gl.TEXTURE_3D, null);
    }

    public OnResize(): void 
    {
        
    }

    public gl : WebGL2RenderingContext;
};