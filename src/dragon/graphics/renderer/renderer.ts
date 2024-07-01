import { WebGL } from "../../webgl";
import { Shader } from "../shader";
import { VertexArray } from "../vertexArray";
import { RenderTarget } from "./target";


export class Renderer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;
        this.gl.enable(this.gl.DEPTH_TEST);
    }

    public Draw(vertexArray : VertexArray, shader : Shader, verticesCount : number) 
    { 
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
    
        this.gl.drawArrays(this.gl.TRIANGLES, 0, verticesCount);
    }

    public SetRenderTarget(renderTarget : RenderTarget) : void 
    {
        this.gl.viewport(0, 0, renderTarget.viewport.width, renderTarget.viewport.height);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(renderTarget.depthFunc);
            
        const writeBuffer = renderTarget.writeBuffer;

        if(writeBuffer) 
        {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, writeBuffer.GetFramebufferId().val);
        }
        else 
        {            
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        }
    }

    public End() : void
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.useProgram(null);
        this.gl.activeTexture(this.gl.TEXTURE0)
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.activeTexture(this.gl.TEXTURE1)
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.activeTexture(this.gl.TEXTURE0)
        this.gl.bindTexture(this.gl.TEXTURE_3D, null);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_3D, null);
    }

    public gl : WebGL2RenderingContext;
};