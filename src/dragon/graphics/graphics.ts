import { Layer, WebGL } from "../webgl.ts";
import { Renderer } from "./renderer.ts";
import { PerspectiveCamera } from "../camera.ts";
import { Registry } from "../registry.ts";
import { BoxGeometry } from "../geometry.ts";
import { BasicMaterial } from "../material.ts";
import { UpdateComponent } from "../entity.ts";
import { RenderStage } from "./renderStage.ts";
import { Framebuffer, FramebufferCreateInfo, RenderbufferCreateInfo } from "./framebuffer.ts";
import { RawTexture2D } from "./texture.ts";
import { Pass } from "./pass.ts";

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

    public Update(registry : Registry, camera : PerspectiveCamera, elapsedTime : number, timeStep : number) : void 
    {
        this.renderer.BeginStage(this.stages.get("SceneStage") as RenderStage);

        if(camera.width != this.width || camera.height != this.height) 
        {
            camera.UpdateProjectionMatrix(this.width, this.height);
            camera.UpdateViewMatrix();
        }

        for(const entity of registry.GetAllEntities())  
        {
            const geo = entity.Get<BoxGeometry>(BoxGeometry);
            const mat = entity.Get<BasicMaterial>(BasicMaterial);
            const update = entity.Get<UpdateComponent>(UpdateComponent);
            
            entity.Update(camera);

            if(update) 
            {
                update.func(entity, elapsedTime, timeStep);
            }

            if(geo && mat) 
            {                   
                this.renderer.RenderCube(geo.GetVertexArray(), mat.GetShader());
            }
        }      

        const sceneTex = this.renderer.EndStage(this.stages.get("SceneStage") as RenderStage);

        this.gl.bindTexture(sceneTex.GetTextureInfo().dimension, sceneTex.GetId().val);
        this.gl.useProgram(this.hdrPass.quad.GetShader().GetId().val);
        
        this.gl.uniform1i(this.gl.getUniformLocation(this.hdrPass.quad.GetShader().GetId().val, "tex"), 0);
        this.renderer.RenderQuad(this.hdrPass.quad.GetVertexArray(), this.hdrPass.quad.GetShader());

        this.gl.bindTexture(sceneTex.GetTextureInfo().dimension, null);
        this.gl.useProgram(null);
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

        let sceneStage = this.stages.get("SceneStage");
        if(sceneStage) 
        {            
            sceneStage.Destroy();          
        }
        sceneStage = new RenderStage(new Framebuffer());
        sceneStage.CreateStage(framebufferInfo, renderBufferInfo);
        this.stages.set("SceneStage", sceneStage);
        
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

    private hdrPass : Pass = new Pass(passVert, hdrFrag);

    private gl : WebGL2RenderingContext;

    private width : number = 0;
    private height : number = 0;
};