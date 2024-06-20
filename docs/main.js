import { Frontend } from "./frontend";
import { Script } from "./script";
class App {
    constructor() {
        Object.defineProperty(this, "frontend", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "script", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.frontend = new Frontend();
        this.script = new Script();
    }
}
;
const app = new App();
