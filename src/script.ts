import * as DRAGON from "./dragon/export";
import * as glm from "gl-matrix";





export class Script extends DRAGON.IScript
{
    constructor() 
    {
        super();
         
        const camera = new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 5.0));
        
        const cube = this.dragon.registry.CreateEntity();
        
        cube.Set<DRAGON.BasicMaterial>(DRAGON.BasicMaterial);
        cube.Set<DRAGON.Geometry>(DRAGON.BoxGeometry);
        cube.Set<DRAGON.Transforms>(DRAGON.Transforms);

        this.dragon.graphics = new DRAGON.Graphics();
        this.dragon.SetAnimationLoop(this.Loop);
    }

    public override Loop(elapsedTime : number, timeStep : number) : void 
    {
        this.dragon.Update();
    }

};