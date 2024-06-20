import * as DRAGON from "./dragon/export";
import * as glm from "gl-matrix";


function Update(cube : DRAGON.Entity, elapsedTime : number, timeStep : number) 
{
    const transforms = cube.Get<DRAGON.Transforms>(DRAGON.Transforms);

    if(transforms) 
    {
        const axis = glm.vec3.fromValues(1, -1, 0);
        const angle = elapsedTime * 45 * 0.0005; 
        const quat = glm.quat.setAxisAngle(transforms.rotation, axis, glm.glMatrix.toRadian(angle));
        transforms.rotation = glm.quat.normalize(quat, quat);
    }
}


export class Script extends DRAGON.IScript
{
    constructor() 
    {
        super();
         
        this.dragon.camera = new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 5.0));
        
        const cube = this.dragon.registry.CreateEntity();
        
        cube.Set<DRAGON.BasicMaterial>(DRAGON.BasicMaterial);
        cube.Set<DRAGON.Geometry>(DRAGON.BoxGeometry);
        cube.Set<DRAGON.Transforms>(DRAGON.Transforms);
        cube.Set<DRAGON.UpdateComponent>(DRAGON.UpdateComponent, Update);
        
        this.dragon.graphics = new DRAGON.Graphics();
        this.dragon.graphics.SetSizes(window.innerWidth, window.innerHeight);

        this.dragon.SetAnimationLoop(this.Loop);
    }

    public override Loop(elapsedTime : number, timeStep : number) : void 
    {   
        this.dragon.Update();
    }

};