import * as glm from "gl-matrix";
import { WebGL } from "./webgl";
import { BasicMaterial } from "./material";
export class UpdateComponent {
    constructor(callback) {
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.func = callback;
    }
}
;
export class Transforms {
    constructor() {
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.vec3.fromValues(0, 0, 0)
        });
        Object.defineProperty(this, "scale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.vec3.fromValues(1, 1, 1)
        });
        Object.defineProperty(this, "rotation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.quat.fromValues(0, 0, 0, 0)
        });
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.mat4.create()
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.mat4.create()
        });
        Object.defineProperty(this, "projection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.mat4.create()
        });
    }
}
export class Entity {
    constructor() {
        Object.defineProperty(this, "components", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    Set(constructor, ...args) {
        const comp = new constructor(...args);
        if (comp == undefined || comp == null) {
            throw new Error("Invalid call to Entity.Set(). Failed to create instance of T!");
        }
        this.components.set(comp.constructor.name, comp);
    }
    Get(constructor) {
        return this.components.get(constructor.name);
    }
    Update(camera) {
        const gl = WebGL.GetInstance().gl;
        const transforms = this.Get(Transforms);
        const material = this.Get(BasicMaterial);
        if (transforms instanceof Transforms && material instanceof BasicMaterial) {
            transforms.model = glm.mat4.create();
            transforms.model = glm.mat4.fromQuat(transforms.model, transforms.rotation);
            transforms.model = glm.mat4.scale(glm.mat4.create(), transforms.model, transforms.scale);
            transforms.model = glm.mat4.translate(glm.mat4.create(), transforms.model, transforms.position);
            const shader = material.GetShader();
            gl.useProgram(shader.GetId().val);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "model"), false, transforms.model);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "view"), false, camera.GetViewMatrix());
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "projection"), false, camera.GetProjectionMatrix());
            gl.useProgram(null);
        }
    }
}
;
