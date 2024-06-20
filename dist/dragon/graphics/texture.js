import { WebGL } from "../webgl";
;
;
class Texture {
    constructor() {
        Object.defineProperty(this, "id", {
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
        const texture = this.gl.createTexture();
        if (!texture) {
            throw new Error("Failed to create texture!");
        }
        this.id = { val: texture };
    }
    Destroy() {
        this.gl.deleteTexture(this.id.val);
    }
    GetId() { return this.id; }
}
;
export class RawTexture2D extends Texture {
    constructor() {
        super();
        Object.defineProperty(this, "textureInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    CreateSampler(samplerInfo) {
        this.gl.bindTexture(samplerInfo.dimension, this.id.val);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_MIN_FILTER, samplerInfo.magFilter);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_MAG_FILTER, samplerInfo.minFilter);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_WRAP_S, samplerInfo.sWrap);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_WRAP_T, samplerInfo.tWrap);
        this.gl.bindTexture(samplerInfo.dimension, null);
    }
    CreateTextureImage2D(textureInfo) {
        this.textureInfo = textureInfo;
        this.gl.bindTexture(textureInfo.dimension, this.id.val);
        this.gl.texImage2D(textureInfo.dimension, 0, textureInfo.format, textureInfo.width, textureInfo.height, 0, textureInfo.nChannels, textureInfo.type, textureInfo.data);
        this.gl.bindTexture(textureInfo.dimension, null);
    }
    GetTextureInfo() { return this.textureInfo; }
}
;
