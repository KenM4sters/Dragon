import * as glm from "gl-matrix";

import { Layer, WebGL } from "../webgl";
import { Renderer } from "./renderer";
import { PerspectiveCamera } from "../camera";
import { BoxGeometry } from "../geometry";
import { BasicMaterial, PhysicalMaterial } from "../material";
import { Framebuffer, FramebufferCreateInfo, RenderbufferCreateInfo } from "./framebuffer";
import { RawTexture2D } from "./texture";
import { Mesh } from "../mesh";
import { Scene } from "../scene";
import { Light, PointLight } from "../light";

import passVert from "../resources/Raw.vert?raw";
import hdrFrag from "../resources/HDR.frag?raw";
import { RenderStage, RenderStageCreateInfo } from "./renderStage";
import { Primitives} from "../export";

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
        const screenStage = this.stages.get("SceneStage");

        if(screenStage) 
        {            
            this.renderer.BeginStage(screenStage);
    
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

            this.renderer.EndStage();
        }
   

        const hdrStage = this.stages.get("HDRStage");

        if(hdrStage) 
        {
            this.renderer.BeginStage(hdrStage);

            this.gl.useProgram(this.screenQuad.GetShader().GetId().val);
    
            const readBuffer = hdrStage.GetReadBuffer();

            if(readBuffer) 
            {   
                this.gl.bindTexture(readBuffer.framebufferInfo.dimension, readBuffer.framebufferInfo.targetTexture.GetId().val);
                this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "tex"), 0);
            }

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.renderer.RenderQuad(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader());

            this.renderer.EndStage();
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
        
        this.gl.canvas.width = this.width;
        this.gl.canvas.height = this.height;

        // Scene stage.
        //
        let sceneStage = this.stages.get("SceneStage");
        
        if(sceneStage) 
        {            
            sceneStage.Destroy();          
        }

        const sceneFrameInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(),
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA16F,
            width: this.width,
            height: this.height,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            minFilter: this.gl.LINEAR,
            magFilter: this.gl.LINEAR,
            sWrap: this.gl.REPEAT,
            tWrap: this.gl.REPEAT,
            attachmentUnit: 0,
            renderBufferCreateInfo: 
            {
                width: this.width,
                height: this.height,
                format: this.gl.DEPTH24_STENCIL8,
                attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT 
            }
        };

        const sceneStageInfo : RenderStageCreateInfo = 
        {
            viewport: {width: this.width, height: this.height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: true,
            depthFunc: this.gl.LEQUAL,
            blending: false,
            blendFunc: this.gl.ONE
        }

        const sceneWriteBuffer = new Framebuffer(sceneFrameInfo);

        sceneStage = new RenderStage(null, sceneWriteBuffer, sceneStageInfo);

        this.stages.set("SceneStage", sceneStage);


        // Final HDR stage.
        //
        let hdrStage = this.stages.get("HDRStage");
        
        if(hdrStage)
        {
            hdrStage.Destroy();    
        }

        const hdrStageInfo : RenderStageCreateInfo = 
        {
            viewport: {width: this.width, height: this.height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: true,
            depthFunc: this.gl.LEQUAL,
            blending: false,
            blendFunc: this.gl.ONE
        };

        hdrStage = new RenderStage(sceneStage.GetWriteBuffer(), null, hdrStageInfo);

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

    private screenQuad : Primitives.Square = new Primitives.Square(passVert, hdrFrag);

    private stages : Map<String, RenderStage> = new Map<String, RenderStage>();

    private gl : WebGL2RenderingContext;

    private width : number = 0;
    private height : number = 0;
};