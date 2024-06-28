import Assets from "../assets";
import { Graphics, RawCubeTexture, RawTexture2D, RawTextureCreateInfo } from "../export";
import { Framebuffer, FramebufferCreateInfo } from "../graphics/framebuffer";
import { HDRImage, HDRImageCreateInfo } from "../graphics/image";
import { Renderer } from "../graphics/renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../graphics/renderer/target";
import { WebGL } from "../webgl";
import { PerspectiveCamera } from "./camera";
import { BoxGeometry } from "./geometry";
import { Light } from "./light";
import { PhysicalMaterial, SkyboxMaterial } from "./material";
import { Mesh } from "./mesh";
import { Skybox } from "./skybox";

import { TextureImageData } from 'three/src/textures/types.js';


export class Scene
{
    constructor(graphics : Graphics) 
    {
        this.renderer = graphics.GetRenderer();

        this.gl = WebGL.GetInstance().gl;

        const canvas = WebGL.GetInstance().canvas;

        const writeTexInfo : RawTextureCreateInfo = 
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

        this.writeTexture = new RawTexture2D(writeTexInfo);
        
        const sceneFrameInfo : FramebufferCreateInfo = 
        {
            targetTexture: this.writeTexture,
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
            depthFunc: this.gl.LEQUAL,
            blendFunc: this.gl.ONE
        }

        const writeBuffer = new Framebuffer(sceneFrameInfo);

        this.renderTarget = new RenderTarget(writeBuffer, sceneStageInfo);

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

    public AddBackground(assetName : string) : void 
    {
        const assets = Assets.GetInstance();
        
        const asset = assets.GetTexture(assetName) as TextureImageData;

        const hdrImageInfo : HDRImageCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            type: this.gl.FLOAT,
            format: this.gl.RGBA32F,
            nChannels: this.gl.RGBA,
            threeData: asset,
            samplerInfo: 
            {
                dimension: this.gl.TEXTURE_2D,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE
            }
        }        
    
        this.skybox = new Skybox(this, hdrImageInfo);
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
        
        this.renderTarget.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};
        this.renderer.SetRenderTarget(this.renderTarget);
        this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
        this.renderTarget.writeBuffer?.SetColorAttachment(this.writeTexture, 0);

        if(this.skybox) 
        {
            this.skybox.GetCube().UpdateUniforms(this.camera, []);

            const geo = this.skybox.GetCube().geometry;
            const mat = this.skybox.GetCube().material;

            if(geo instanceof BoxGeometry && mat instanceof SkyboxMaterial) 
            {                                         
                this.renderer.Draw(geo.GetVertexArray(), mat.GetShader(), 36);
            }
        } 
        

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

        const writeTexInfo : RawTextureCreateInfo = 
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

        this.writeTexture.Resize(writeTexInfo);

        const sceneStageInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: width, height: height},
            depthFunc: this.gl.LEQUAL,
            blendFunc: this.gl.ONE
        }

        this.renderTarget.Resize(width, height, sceneStageInfo);
    }
    
    public renderer : Renderer;
    public renderTarget : RenderTarget;
    public writeTexture : RawTexture2D;
    
    private meshes : Array<Mesh> = new Array<Mesh>();
    private lights : Array<Light> = new Array<Light>()
    private camera : PerspectiveCamera;
    private skybox : Skybox | null = null;

    private gl : WebGL2RenderingContext;
}; 