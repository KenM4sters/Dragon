import * as glm from "gl-matrix";
import Assets from "../assets";
import { Graphics, RawCubeTexture, RawTexture2D, RawTextureCreateInfo, Shader } from "../export";
import { Framebuffer, FramebufferCreateInfo } from "../graphics/framebuffer";
import { HDRImage, HDRImageCreateInfo } from "../graphics/image";
import { Renderer } from "../graphics/renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../graphics/renderer/target";
import { WebGL } from "../webgl";
import { PerspectiveCamera } from "./camera";
import { BoxGeometry, SphereGeometry } from "./geometry";
import { Light } from "./light";
import { PhysicalMaterial, SkyboxMaterial } from "./material";
import { Mesh } from "./mesh";
import { Skybox } from "./skybox";
import { TextureImageData } from 'three/src/textures/types.js';


import sceneDepthFrag from "../resources/shaders/scene_depth.frag?raw";
import sceneDepthVert from "../resources/shaders/scene_depth.frag?raw";


/**
 * @brief Holds containers for the meshes, lights and a skybox and handles the rendering of them.
 */
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
            attachment: this.gl.COLOR_ATTACHMENT0,
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

        this.sceneBuffer = new Framebuffer(sceneFrameInfo);

        this.renderTarget = new RenderTarget(this.sceneBuffer, sceneStageInfo);


        // Depth Info (for shadow mapping)
        //
        const depthTextureInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.DEPTH_COMPONENT32F,
            width: 1024,
            height: 1024,
            nChannels: this.gl.DEPTH_COMPONENT,
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
        }

        this.depthTexture = new RawTexture2D(depthTextureInfo);

        const depthBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: this.writeTexture,
            attachment: this.gl.DEPTH_ATTACHMENT,
            renderBufferCreateInfo: null
        };

        this.depthBuffer = new Framebuffer(depthBufferInfo);

        this.depthViewMatrix = glm.mat4.lookAt(glm.mat4.create(), [100, 20, 20], [0, 0, 0], [0, 1, 0]);
        this.depthProjectionMatrix = glm.mat4.perspective(glm.mat4.create(), glm.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 100);
    }

    /**
     * @brief Scene-specific render function to take some load of the Graphics instance.
     * Renders all meshes and skyboxes.
     */
    public Render(elapsedTime: number, timeStep: number): void 
    {        

        this.camera.Update(elapsedTime, timeStep);

        this.renderTarget.viewport = {width: 1024, height: 1024};
        this.renderTarget.writeBuffer = this.depthBuffer;
        this.depthBuffer.SetColorAttachment(this.depthTexture, this.gl.DEPTH_ATTACHMENT);
        this.gl.drawBuffers([this.gl.NONE]);

        this.DrawScene(this.depthShader);
        
        this.renderer.End();
        
        this.renderTarget.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};
        this.renderTarget.writeBuffer = this.sceneBuffer;
        this.sceneBuffer.SetColorAttachment(this.writeTexture, this.gl.COLOR_ATTACHMENT0);
        this.renderer.SetRenderTarget(this.renderTarget);

        const children = this.GetAllChildren();

        for(const mesh of children.meshes) 
        {
            mesh.UpdateUniforms(this);

            if(mesh.userUpdateCallback) 
            {
                mesh.userUpdateCallback(mesh, elapsedTime, timeStep);
            } 
        }

        this.DrawScene();

        this.renderer.End();
    }


    public DrawScene(depthShader ?: Shader) : void 
    {
        const children = this.GetAllChildren();

        if(!depthShader) 
        {
            if(this.skybox) 
            {
                this.skybox.GetCube().UpdateUniforms(this);
                
                const geo = this.skybox.GetCube().geometry;
                const mat = this.skybox.GetCube().material;
    
                if(geo instanceof BoxGeometry && mat instanceof SkyboxMaterial) 
                {   
                    this.renderer.Draw(geo.GetVertexArray(), mat.GetShader(), 36);
                }
            } 
        }
        
        for(const mesh of children.meshes)  
        {   
            if(mesh.material instanceof PhysicalMaterial) 
            {      
                if(mesh.geometry instanceof BoxGeometry) 
                {
                    let shader;

                    if(depthShader) 
                    {
                        shader = this.depthShader;
                    } 
                    else 
                    {
                        shader = mesh.material.GetShader();
                    }

                    this.renderer.Draw(mesh.geometry.GetVertexArray(), shader, 36);
                }  
                else if(mesh.geometry instanceof SphereGeometry) 
                {
                    const vao = mesh.geometry.GetVertexArray();
                    const EBO = vao.GetIndexBuffer();

                    let shader;

                    if(depthShader) 
                    {
                        shader = this.depthShader;
                    } 
                    else 
                    {
                        shader = mesh.material.GetShader();
                    }

                    this.gl.bindVertexArray(vao.GetId().val);
                    this.gl.useProgram(shader.GetId().val);

                    if(EBO) 
                    {
                        this.gl.drawElements(this.gl.TRIANGLES, EBO.GetUniqueSize() / EBO.GetUniqueIndices().BYTES_PER_ELEMENT, this.gl.UNSIGNED_SHORT, EBO.GetUniqueOffset());
                    }
                }     
            }
        } 
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
    

    /**
     * @brief Sets a skybox with the desired texture.
     * @param assetName Name of the asset held by the Assets instance.
     */
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
    

    /**
     * @brief Sets the camera instance.
     * @param camera Currently only supporting a PerspectiveCamera instance.
     */
    public SetCamera(camera : PerspectiveCamera) : void 
    {
        this.camera = camera;
    }

    public GetAllChildren() : {meshes : Array<Mesh>, lights : Array<Light>} 
    { 
        return {meshes: this.meshes, lights: this.lights};
    }



    public Resize(width: number, height: number): void 
    {
        this.camera.Resize(width, height);

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
    public lights : Array<Light> = new Array<Light>()
    public camera !: PerspectiveCamera;
    public skybox : Skybox | null = null;
    public gl : WebGL2RenderingContext;

    private sceneBuffer : Framebuffer;
    private depthBuffer : Framebuffer;
    private depthTexture : RawTexture2D;
    private depthViewMatrix : glm.mat4;
    private depthProjectionMatrix : glm.mat4;
    private depthShader : Shader = new Shader(sceneDepthVert, sceneDepthFrag);

    private meshes : Array<Mesh> = new Array<Mesh>();

}; 