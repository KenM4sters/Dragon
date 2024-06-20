;
/**
 * @brief Wrapper around any variable to ensure that it's passed by reference and not value.
 */
export class Ref {
    constructor(val) {
        Object.defineProperty(this, "val", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: val
        });
    }
    ;
}
;
/**
 * @brief Singleton class to act as our entry point.
 */
export class WebGL {
    constructor() {
        Object.defineProperty(this, "canvas", {
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
        this.canvas = document.getElementById("canvas");
        this.gl = this.canvas.getContext('webgl2', { antialias: true });
        if (!this.gl)
            throw new Error("webgl context is not available!");
        var ext1 = this.gl.getExtension('EXT_color_buffer_float');
        if (!ext1) {
            throw new Error('EXT_color_buffer_float is not supported');
        }
        ;
        var ext2 = this.gl.getExtension('OES_texture_float_linear');
        if (!ext2) {
            throw new Error('OES_texture_float_linear is not supported');
        }
        ;
    }
    OnResize() {
    }
    // Public static method to get the instance of the class
    static GetInstance() {
        if (!WebGL.instance) {
            WebGL.instance = new WebGL();
        }
        return WebGL.instance;
    }
}
Object.defineProperty(WebGL, "instance", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});
;
