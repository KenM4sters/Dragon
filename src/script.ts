import * as DRAGON from "./dragon/export";
import * as glm from "gl-matrix";


function Update(cube : DRAGON.Mesh, elapsedTime : number, timeStep : number) 
{
    const axis = glm.vec3.fromValues(1, -1, 0);
    const angle = elapsedTime * 45 * 0.0005; 
    const quat = glm.quat.setAxisAngle(cube.rotation, axis, glm.glMatrix.toRadian(angle));
    cube.rotation = glm.quat.normalize(quat, quat);
}


export class Script extends DRAGON.IScript
{
    constructor() 
    {
        super();

        this.dragon = new DRAGON.Dragon(this);
    }

    public override Initialize() : void 
    {
        this.dragon.scene.SetCamera(new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 8.0)));

        this.dragon.scene.AddBackground("ocean");

        let mat = new DRAGON.PhysicalMaterial();
        mat.ao = 2.0;
        mat.roughenss = 0.3;
        mat.metallic = 0.7;
        let geo = new DRAGON.BoxGeometry();

        let cube1 = new DRAGON.Mesh(geo, mat);

        cube1.SetUpdateCallback(Update);

        this.dragon.scene.Add(cube1);

        const pointLight = new DRAGON.PointLight([-5.0, 5.0, 2.0], [1.0, 1.0, 1.0], 100.0);
        
        this.dragon.scene.Add(pointLight);
        
        this.dragon.graphics = new DRAGON.Graphics();
        this.dragon.graphics.SetSizes(window.innerWidth, window.innerHeight);

        this.dragon.SetAnimationLoop(this.Loop);
    }

    public override Loop(elapsedTime : number, timeStep : number) : void 
    {   
        this.dragon.Update();
    }

    private dragon : DRAGON.Dragon;
    
};