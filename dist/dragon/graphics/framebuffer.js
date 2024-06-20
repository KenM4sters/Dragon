import { WebGL } from "../webgl";
;
;
export class Framebuffer {
    constructor() {
        Object.defineProperty(this, "framebufferInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderBufferInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "framebufferId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderbufferId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.gl = WebGL.GetInstance().gl;
        const framebufferId = this.gl.createFramebuffer();
        if (!framebufferId) {
            throw new Error("Failed to create framebuffer!");
        }
        this.framebufferId = { val: framebufferId };
        this.renderbufferId = { val: null };
    }
    CreateFrambuffer(framebufferInfo) {
        this.framebufferInfo = framebufferInfo;
        framebufferInfo.targetTexture.CreateTextureImage2D({
            dimension: framebufferInfo.dimension,
            format: framebufferInfo.format,
            width: framebufferInfo.width,
            height: framebufferInfo.height,
            nChannels: framebufferInfo.nChannels,
            type: framebufferInfo.type,
            data: framebufferInfo.data
        });
        framebufferInfo.targetTexture.CreateSampler({
            dimension: framebufferInfo.dimension,
            minFilter: framebufferInfo.minFilter,
            magFilter: framebufferInfo.magFilter,
            sWrap: framebufferInfo.sWrap,
            tWrap: framebufferInfo.tWrap
        });
        const attachmentUnit = this.gl.COLOR_ATTACHMENT0 + framebufferInfo.attachmentUnit;
        this.gl.bindTexture(framebufferInfo.dimension, framebufferInfo.targetTexture.GetId().val);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachmentUnit, framebufferInfo.targetTexture.GetTextureInfo().dimension, framebufferInfo.targetTexture.GetId().val, 0);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindTexture(framebufferInfo.dimension, null);
        // Check for any errors.
        //
        const status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);
        if (status != this.gl.FRAMEBUFFER_COMPLETE) {
            console.error('Framebuffer is not complete: ' + status.toString(16));
        }
    }
    CreateRenderbuffer(renderbufferInfo) {
        this.renderBufferInfo = renderbufferInfo;
        const renderbufferId = this.gl.createRenderbuffer();
        if (!renderbufferId) {
            throw new Error("Failed to create framebuffer!");
        }
        this.renderbufferId = { val: renderbufferId };
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferId.val);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbufferId.val);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, renderbufferInfo.format, renderbufferInfo.width, renderbufferInfo.height);
        this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, renderbufferInfo.attachmentType, this.gl.RENDERBUFFER, this.renderbufferId.val);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
    }
    Destroy() {
        this.gl.deleteFramebuffer(this.framebufferId.val);
        this.gl.deleteRenderbuffer(this.renderbufferId.val);
        if (this.framebufferInfo) {
            this.framebufferInfo.targetTexture.Destroy();
        }
    }
    GetFramebufferId() { return this.framebufferId; }
    ;
    GetRenderbufferId() { return this.renderbufferId; }
}
;
