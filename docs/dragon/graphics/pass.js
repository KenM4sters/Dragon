import { Primitives } from "../primitives";
export class Pass {
    constructor(vertSrc, fragSrc) {
        Object.defineProperty(this, "quad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.quad = new Primitives.Square(vertSrc, fragSrc);
    }
}
