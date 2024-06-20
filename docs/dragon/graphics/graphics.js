import { WebGL } from "../webgl";
import { Renderer } from "./renderer";
import { BoxGeometry } from "../geometry";
import { BasicMaterial } from "../material";
import { UpdateComponent } from "../entity";
import { RenderStage } from "./renderStage";
import { Framebuffer } from "./framebuffer";
import { RawTexture2D } from "./texture";
import { Pass } from "./pass";
import passVert from "../resources/Raw.vert?raw";
import hdrFrag from "../resources/HDR.frag?raw";
export class Graphics {
    constructor() {
        Object.defineProperty(this, "renderer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Renderer()
        });
        Object.defineProperty(this, "stages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "hdrPass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Pass(passVert, hdrFrag)
        });
        Object.defineProperty(this, "gl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "width", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "height", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
        window.addEventListener("resize", () => this.OnResize());
    }
    Update(registry, camera, elapsedTime, timeStep) {
        this.renderer.BeginStage(this.stages.get("SceneStage"));
        if (camera.width != this.width || camera.height != this.height) {
            camera.UpdateProjectionMatrix(this.width, this.height);
            camera.UpdateViewMatrix();
        }
        for (const entity of registry.GetAllEntities()) {
            const geo = entity.Get(BoxGeometry);
            const mat = entity.Get(BasicMaterial);
            const update = entity.Get(UpdateComponent);
            entity.Update(camera);
            if (update) {
                update.func(entity, elapsedTime, timeStep);
            }
            if (geo && mat) {
                this.renderer.RenderCube(geo.GetVertexArray(), mat.GetShader());
            }
        }
        const sceneTex = this.renderer.EndStage(this.stages.get("SceneStage"));
        this.gl.bindTexture(sceneTex.GetTextureInfo().dimension, sceneTex.GetId().val);
        this.gl.useProgram(this.hdrPass.quad.GetShader().GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.hdrPass.quad.GetShader().GetId().val, "tex"), 0);
        this.renderer.RenderQuad(this.hdrPass.quad.GetVertexArray(), this.hdrPass.quad.GetShader());
        this.gl.bindTexture(sceneTex.GetTextureInfo().dimension, null);
        this.gl.useProgram(null);
    }
    SetSizes(width, height) {
        if (this.width != width || this.height != height) {
            this.Resize(width, height);
        }
    }
    Resize(width, height) {
        this.width = width;
        this.height = height;
        const webgl = WebGL.GetInstance();
        webgl.canvas.width = this.width;
        webgl.canvas.height = this.height;
        webgl.gl.viewport(0, 0, this.width, this.height);
        const framebufferInfo = {
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
        const renderBufferInfo = {
            width: this.width,
            height: this.height,
            format: this.gl.DEPTH24_STENCIL8,
            attachmentType: this.gl.DEPTH_STENCIL_ATTACHMENT
        };
        let sceneStage = this.stages.get("SceneStage");
        if (sceneStage) {
            sceneStage.Destroy();
        }
        sceneStage = new RenderStage(new Framebuffer());
        sceneStage.CreateStage(framebufferInfo, renderBufferInfo);
        this.stages.set("SceneStage", sceneStage);
        let hdrStage = this.stages.get("HDRStage");
        if (hdrStage) {
            hdrStage.Destroy();
        }
        hdrStage = new RenderStage(new Framebuffer());
        this.stages.set("HDRStage", hdrStage);
    }
    OnResize() {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;
        var canvas = document.querySelector('#canvas');
        if (canvas.width != newWidth || canvas.height != newHeight) {
            canvas.width = newWidth;
            canvas.height = newHeight;
            this.Resize(canvas.width, canvas.height);
        }
    }
}
;
