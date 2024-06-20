import { Dragon } from "./dragon";
export class IScript {
    constructor() {
        Object.defineProperty(this, "dragon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Dragon()
        });
        this.Loop = this.Loop.bind(this);
    }
}
;
