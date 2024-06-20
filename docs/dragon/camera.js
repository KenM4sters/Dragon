import * as glm from "gl-matrix";
export class PerspectiveCamera {
    constructor(pos) {
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
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "front", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [0.0, 0.0, -1.0]
        });
        Object.defineProperty(this, "up", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [0.0, 1.0, 0.0]
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [1.0, 0.0, 0.0]
        });
        Object.defineProperty(this, "fov", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 45
        });
        Object.defineProperty(this, "projectionMatrix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.mat4.create()
        });
        Object.defineProperty(this, "viewMatrix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: glm.mat4.create()
        });
        this.position = pos;
    }
    UpdateViewMatrix() {
        this.right = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross(glm.vec3.create(), this.front, this.up));
        this.up = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross(glm.vec3.create(), this.right, this.front));
        this.viewMatrix = glm.mat4.lookAt(this.viewMatrix, this.position, glm.vec3.add(glm.vec3.create(), this.position, this.front), this.up);
    }
    UpdateProjectionMatrix(width, height) {
        this.width = width;
        this.height = height;
        glm.mat4.perspective(this.projectionMatrix, glm.glMatrix.toRadian(this.fov), this.width / this.height, 0.1, 1000);
    }
    ResetFOV(fov, width, height) {
        this.fov = fov;
        this.UpdateProjectionMatrix(width, height);
    }
    // Getters.
    GetPosition() { return this.position; }
    GetProjectionMatrix() { return this.projectionMatrix; }
    GetViewMatrix() { return this.viewMatrix; }
}
;
