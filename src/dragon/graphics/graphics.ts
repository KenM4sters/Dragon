import { Layer, WebGL } from "../webgl";
import { Renderer } from "./renderer";
import { PerspectiveCamera } from "../camera";
import { Registry } from "../registry";
import { BoxGeometry } from "../geometry";
import { BasicMaterial } from "../material";
import { UpdateComponent } from "../entity";
import { RenderStage } from "./renderStage";
import { Framebuffer, FramebufferCreateInfo, RenderbufferCreateInfo } from "./framebuffer";
import { RawTexture2D } from "./texture";
import { Pass } from "./pass";

import passVert from "../resources/Raw.vert?raw";
import hdrFrag from "../resources/HDR.frag?raw";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;

        const sceneStage = new RenderStage(new Framebuffer());
        this.stages.set("SceneStage", sceneStage);

        const hdrStage = new RenderStage(new Framebuffer());
        this.stages.set("HDRStage", hdrStage);
    }

    public Update(registry : Registry, camera : PerspectiveCamera, elapsedTime : number, timeStep : number) : void 
    {
        this.renderer.BeginStage(this.stages.get("SceneStage") as RenderStage);

        camera.Update(this.width, this.height);

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
        this.width = width;
        this.height = height;
        
        const webgl = WebGL.GetInstance();

        webgl.canvas.width = width;
        webgl.canvas.height = height;
        webgl.gl.viewport(0, 0, width, height);

        const framebufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(),
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGB,
            width: width,
            height: height,
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
            width: width,
            height: height,
            format: this.gl.DEPTH24_STENCIL8,
            attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT 
        };

        const sceneStage = this.stages.get("SceneStage");
        if(sceneStage) 
        {            
            sceneStage.CreateStage(framebufferInfo, renderBufferInfo);
        }
    }


    public OnResize(): void 
    {
        
    }

    private renderer : Renderer = new Renderer();
    private stages : Map<string, RenderStage> = new Map<string, RenderStage>();

    private hdrPass : Pass = new Pass(passVert, hdrFrag);

    private gl : WebGL2RenderingContext;

    private width : number = 0;
    private height : number = 0;
};