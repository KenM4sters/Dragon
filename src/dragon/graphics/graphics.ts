import * as glm from "gl-matrix";

import { Layer, WebGL } from "../webgl";
import { Renderer } from "./renderer";
import { PerspectiveCamera } from "../camera";
import { BoxGeometry } from "../geometry";
import { BasicMaterial, PhysicalMaterial } from "../material";
import { Framebuffer, FramebufferCreateInfo, RenderbufferCreateInfo } from "./framebuffer";
import { RawTexture2D } from "./texture";
import { Pass } from "./specialfx/pass";
import { Mesh } from "../mesh";
import { Scene } from "../scene";
import { Light, PointLight } from "../light";

import passVert from "../resources/Raw.vert?raw";
import hdrFrag from "../resources/HDR.frag?raw";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;

        window.addEventListener("resize", () => this.OnResize());
    }

    public Update(scene : Scene, camera : PerspectiveCamera, elapsedTime : number, timeStep : number) : void 
    {
        this.renderer.BeginStage(this.stages.get("SceneStage") as RenderStage);

        if(camera.width != this.width || camera.height != this.height) 
        {
            camera.UpdateProjectionMatrix(this.width, this.height);
            camera.UpdateViewMatrix();
        }

        const children = scene.GetAllChildren();

        for(const mesh of children.meshes)  
        {   
            mesh.UpdateUniforms(camera, children.lights);

            if(mesh.userUpdateCallback) 
            {
                mesh.userUpdateCallback(mesh, elapsedTime, timeStep);
            }

            if(mesh.geometry instanceof BoxGeometry && mesh.material instanceof PhysicalMaterial) 
            {                
                this.renderer.RenderCube(mesh.geometry.GetVertexArray(), mesh.material.GetShader());
            }
        } 
    }   

    public SetSizes(width: number, height: number) 
    {
        if(this.width != width || this.height != height) 
        {
            this.Resize(width, height);            
        }
    }
      

    private Resize(width: number, height: number) : void 
    {
        this.width = width;
        this.height = height;
        
        const webgl = WebGL.GetInstance();

        webgl.canvas.width = this.width;
        webgl.canvas.height = this.height;
        webgl.gl.viewport(0, 0, this.width, this.height);

        const framebufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(),
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGB,
            width: this.width,
            height: this.height,
            nChannels: this.gl.RGB,
            type: this.gl.UNSIGNED_BYTE,
            data: null,
            minFilter: this.gl.LINEAR,
            magFilter: this.gl.LINEAR,
            sWrap: this.gl.REPEAT,
            tWrap: this.gl.REPEAT,
            attachmentUnit: 0
        };
        
        const renderBufferInfo : RenderbufferCreateInfo = 
        {
            width: this.width,
            height: this.height,
            format: this.gl.DEPTH24_STENCIL8,
            attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT 
        };

        // Scene stage.
        //
        let sceneStage = this.stages.get("SceneStage");
        
        if(sceneStage) 
        {            
            sceneStage.Destroy();          
        }

        sceneStage = new RenderStage(new Framebuffer());
        sceneStage.CreateStage(framebufferInfo, renderBufferInfo);

        this.stages.set("SceneStage", sceneStage);

        // Bloom Stage.
        //



        // Final HDR stage.
        //
        let hdrStage = this.stages.get("HDRStage");
        
        if(hdrStage)
        {
            hdrStage.Destroy();    
        }

        hdrStage = new RenderStage(new Framebuffer());
        this.stages.set("HDRStage", hdrStage);
    }


    public OnResize(): void 
    {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;

        var canvas  = document.querySelector('#canvas') as HTMLCanvasElement;

        if(canvas.width != newWidth || canvas.height != newHeight) 
        {
            canvas.width = newWidth;
            canvas.height = newHeight;
            this.Resize(canvas.width, canvas.height);
        }
    }

    private renderer : Renderer = new Renderer();
    private stages : Map<string, RenderStage> = new Map<string, RenderStage>();

    private gl : WebGL2RenderingContext;

    private width : number = 0;
    private height : number = 0;
};