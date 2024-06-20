import { Registry } from "./registry";
export class Dragon {
    constructor() {
        Object.defineProperty(this, "registry", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Registry()
        });
        Object.defineProperty(this, "camera", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "graphics", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        Object.defineProperty(this, "scriptLoop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "animationFrameId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "lastFrame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "elapsedTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "timeStep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
    SetAnimationLoop(callback) {
        this.scriptLoop = callback;
        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }
    AnimationLoop(elapsedTime) {
        this.elapsedTime = elapsedTime;
        this.timeStep = elapsedTime - this.lastFrame;
        this.lastFrame = elapsedTime;
        if (this.scriptLoop) {
            this.scriptLoop(elapsedTime, this.timeStep);
        }
        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }
    Update() {
        if (this.camera != undefined && this.graphics != undefined && this.registry != undefined) {
            this.graphics.Update(this.registry, this.camera, this.elapsedTime, this.timeStep);
        }
    }
    Stop() {
        cancelAnimationFrame(this.animationFrameId);
        this.scriptLoop = undefined;
    }
}
