import * as DRAGON from "./dragon/export";
import * as glm from "gl-matrix";
function Update(cube, elapsedTime, timeStep) {
    const transforms = cube.Get(DRAGON.Transforms);
    if (transforms) {
        const axis = glm.vec3.fromValues(1, -1, 0);
        const angle = elapsedTime * 45 * 0.0005;
        const quat = glm.quat.setAxisAngle(transforms.rotation, axis, glm.glMatrix.toRadian(angle));
        transforms.rotation = glm.quat.normalize(quat, quat);
    }
}
export class Script extends DRAGON.IScript {
    constructor() {
        super();
        this.dragon.camera = new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 5.0));
        const cube = this.dragon.registry.CreateEntity();
        cube.Set(DRAGON.BasicMaterial);
        cube.Set(DRAGON.BoxGeometry);
        cube.Set(DRAGON.Transforms);
        cube.Set(DRAGON.UpdateComponent, Update);
        this.dragon.graphics = new DRAGON.Graphics();
        this.dragon.graphics.SetSizes(window.innerWidth, window.innerHeight);
        this.dragon.SetAnimationLoop(this.Loop);
    }
    Loop(elapsedTime, timeStep) {
        this.dragon.Update();
    }
}
;
