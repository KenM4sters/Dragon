import { WebGL } from "../webgl";
export class RenderStage {
    constructor(framebuffer) {
        Object.defineProperty(this, "framebuffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.framebuffer = framebuffer;
    }
    CreateStage(framebufferInfo, renderbufferinfo = null) {
        if (framebufferInfo) {
            this.framebuffer.CreateFrambuffer(framebufferInfo);
        }
        if (renderbufferinfo) {
            this.framebuffer.CreateRenderbuffer(renderbufferinfo);
        }
    }
    Begin() {
        const gl = WebGL.GetInstance().gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer.GetFramebufferId().val);
    }
    End() {
        const gl = WebGL.GetInstance().gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    OnResize() {
    }
    GetTargetTexture() {
        return this.framebuffer.framebufferInfo.targetTexture;
    }
    Destroy() {
        this.framebuffer.Destroy();
    }
}
;
