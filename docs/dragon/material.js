import { Shader } from "./graphics/shader";
// Shaders
//
import mvpVert from "./resources/ModelViewProjection.vert?raw";
import rawFrag from "./resources/Raw.frag?raw";
export class Material {
    constructor() {
    }
}
export class BasicMaterial extends Material {
    constructor() {
        super();
        Object.defineProperty(this, "shader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shader = new Shader(mvpVert, rawFrag);
    }
    GetShader() { return this.shader; }
}
