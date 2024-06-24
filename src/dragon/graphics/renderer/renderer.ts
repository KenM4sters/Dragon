import { WebGL } from "../../webgl";
import { Shader } from "../shader";
import { VertexArray } from "../vertexArray";
import { RenderTarget, RenderTargetCreateInfo } from "./target";


export class Renderer 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;
        this.gl.enable(this.gl.DEPTH_TEST);

        const defaultInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: window.innerWidth, height: window.innerHeight},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            blending: false,
            blendFunc: this.gl.ONE,
            depthTest: true,
            depthFunc: this.gl.LEQUAL
        }

        this.renderTarget = new RenderTarget(null, null, defaultInfo);
    }

    public Draw(vertexArray : VertexArray, shader : Shader, verticesCount : number) 
    { 
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
    
        this.gl.drawArrays(this.gl.TRIANGLES, 0, verticesCount);
        
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);
    }

    public SetRenderTarget(renderTarget : RenderTarget) : void 
    {
        this.renderTarget = renderTarget;

        this.gl.viewport(0, 0, this.renderTarget.viewport.width, this.renderTarget.viewport.height);

        if(this.renderTarget.depthTest) 
        {
            this.gl.enable(this.gl.DEPTH_TEST);
            this.gl.depthFunc(this.renderTarget.depthFunc);
        }  
            
        const writeBuffer = this.renderTarget.GetWriteBuffer();
        if(writeBuffer) 
        {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, writeBuffer.GetFramebufferId().val);
        }
        else 
        {            
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        }
                
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(this.renderTarget.clearColor[0], this.renderTarget.clearColor[1], this.renderTarget.clearColor[2], this.renderTarget.clearColor[3]);
    }

    public End() : void
    {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.useProgram(null);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindTexture(this.gl.TEXTURE_3D, null);
    }

    private renderTarget : RenderTarget;
    public gl : WebGL2RenderingContext;
};