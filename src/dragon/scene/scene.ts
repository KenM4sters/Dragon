import { Graphics, RawTexture2D, RawTextureCreateInfo } from "../export";
import { Framebuffer, FramebufferCreateInfo } from "../graphics/framebuffer";
import { Renderer } from "../graphics/renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../graphics/renderer/target";
import { WebGL } from "../webgl";
import { PerspectiveCamera } from "./camera";
import { BoxGeometry } from "./geometry";
import { Light } from "./light";
import { PhysicalMaterial } from "./material";
import { Mesh } from "./mesh";


export class Scene
{
    constructor(graphics : Graphics) 
    {
        this.renderer = graphics.GetRenderer();

        this.gl = WebGL.GetInstance().gl;

        const canvas = WebGL.GetInstance().canvas;

        const writeTex : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA32F,
            width: canvas.width,
            height: canvas.height,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_2D,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.REPEAT,
                tWrap: this.gl.REPEAT,
            }
        };
        
        const sceneFrameInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(writeTex),
            attachmentUnit: 0,
            renderBufferCreateInfo: 
            {
                width: canvas.width,
                height: canvas.height,
                format: this.gl.DEPTH24_STENCIL8,
                attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT 
            }
        };

        const sceneStageInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: canvas.width, height: canvas.height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: true,
            depthFunc: this.gl.LEQUAL,
            blending: false,
            blendFunc: this.gl.ONE
        }

        const writeBuffer = new Framebuffer(sceneFrameInfo);

        this.renderTarget = new RenderTarget(null, writeBuffer, sceneStageInfo);

        this.camera = new PerspectiveCamera([0, 0, 5]);
        
        this.camera.UpdateProjectionMatrix(canvas.width, canvas.height);
    }

    public Add(child : Mesh | Light) : void 
    {
        if(child instanceof Mesh) 
        {
            this.meshes.push(child);
        }

        else if(child instanceof Light) 
        {
            this.lights.push(child);
        }
    }

    public SetCamera(camera : PerspectiveCamera) : void 
    {
        const canvas = WebGL.GetInstance().canvas;
        this.camera = camera;
        this.camera.UpdateProjectionMatrix(canvas.width, canvas.height);
    }

    public GetAllChildren() : {meshes : Array<Mesh>, lights : Array<Light>} 
    { 
        return {meshes: this.meshes, lights: this.lights};
    }

    public Render(elapsedTime: number, timeStep: number): void 
    {
        this.camera.UpdateViewMatrix();

        this.renderer.SetRenderTarget(this.renderTarget);

        const children = this.GetAllChildren();
    
        for(const mesh of children.meshes)  
        {   
            mesh.UpdateUniforms(this.camera, children.lights);

            if(mesh.userUpdateCallback) 
            {
                mesh.userUpdateCallback(mesh, elapsedTime, timeStep);
            } 

            if(mesh.geometry instanceof BoxGeometry && mesh.material instanceof PhysicalMaterial) 
            {             
                this.renderer.Draw(mesh.geometry.GetVertexArray(), mesh.material.GetShader(), 36);
            }
        } 

        this.renderer.End();
    }

    public Resize(width: number, height: number): void 
    {
        this.camera.UpdateProjectionMatrix(width, height);

        if(this.renderTarget) 
        {            
            this.renderTarget.Destroy();          
        }

        const writeTex : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA32F,
            width: width,
            height: height,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_2D,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.REPEAT,
                tWrap: this.gl.REPEAT,
            }
        };
        
        const sceneFrameInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(writeTex),
            attachmentUnit: 0,
            renderBufferCreateInfo: 
            {
                width: width,
                height: height,
                format: this.gl.DEPTH24_STENCIL8,
                attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT 
            }
        };

        const sceneStageInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: width, height: height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: true,
            depthFunc: this.gl.LEQUAL,
            blending: false,
            blendFunc: this.gl.ONE
        }

        this.renderTarget.Recreate(sceneFrameInfo, sceneStageInfo);
    }
    
    public renderTarget : RenderTarget;
    
    private meshes : Array<Mesh> = new Array<Mesh>();
    private lights : Array<Light> = new Array<Light>()

    private camera : PerspectiveCamera;

    private renderer : Renderer;
    private gl : WebGL2RenderingContext;
}; 