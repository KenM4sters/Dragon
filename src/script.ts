import { FPSController, TurnTableController } from "./dragon/controller";
import * as DRAGON from "./dragon/export";
import * as glm from "gl-matrix";
import { Frontend } from "./frontend";


/**
 * @brief Callback function that's attached to the desired mesh and will be called right before
 * said mesh is drawn to the screen, allowing for per mesh, per frame modifications.
 * @param cube The mesh that holds a callback to this function.
 * @param elapsedTime The time since the application started in miliseconds.
 * @param timeStep The time between each frame in miliseconds.
 */
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

        const camera = new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0, 5, 10));
        
        this.dragon.scene.SetCamera(camera);

        this.dragon.scene.AddBackground("ocean");

        let matHM = new DRAGON.PhysicalMaterial({albedo: [1.2, 1.2, 1.2], ao: 1.0, roughenss: 0.1, metallic: 0.9});
        let geoHM = new DRAGON.SphereGeometry(0.2, 50, 50);
        let sphereHM = new DRAGON.Mesh(geoHM, matHM);
        sphereHM.position = [0.0, 0.0, -2.0];

        let matHR = new DRAGON.PhysicalMaterial({albedo: [1.0, 0.0, 0.0], ao: 1.0, roughenss: 0.1, metallic: 0.9});
        let geoHR = new DRAGON.SphereGeometry(0.2, 50, 50);
        let sphereHR = new DRAGON.Mesh(geoHR, matHR);
        sphereHR.position = [0.0, 0.0, -1.5];

        let matMM = new DRAGON.PhysicalMaterial({albedo: [1.5, 1.5, 1.5], ao: 1.0, roughenss: 0.9, metallic: 0.1});
        let geoMM = new DRAGON.SphereGeometry(0.2, 50, 50);
        let sphereMM = new DRAGON.Mesh(geoMM, matMM);
        sphereMM.position = [0.0, 0.0, -1.0];


        let floorMat = new DRAGON.PhysicalMaterial({albedo: [1.5, 1.5, 1.5], ao: 1.0, roughenss: 0.8, metallic: 0.2});
        let floorGeo = new DRAGON.BoxGeometry();
        let floorMesh = new DRAGON.Mesh(floorGeo, floorMat);
        floorMesh.position = [0.0, -5.0, 0.0];
        floorMesh.scale = [5.0, 0.1, 5.0];
        
        let sideWallMat = new DRAGON.PhysicalMaterial({albedo: [1.5, 1.5, 1.5], ao: 1.0, roughenss: 0.8, metallic: 0.2});
        let sideWallGeo = new DRAGON.BoxGeometry();
        let sideWallMesh = new DRAGON.Mesh(sideWallGeo, sideWallMat);
        sideWallMesh.position = [-50.0, 0.8, 0.0];
        sideWallMesh.scale = [0.1, 2.0, 5.0];

        let backWallMat = new DRAGON.PhysicalMaterial({albedo: [1.5, 1.5, 1.5], ao: 1.0, roughenss: 0.8, metallic: 0.2});
        let backWallGeo = new DRAGON.BoxGeometry();
        let backWallMesh = new DRAGON.Mesh(backWallGeo, backWallMat);
        backWallMesh.position = [0.0, 0.8, -50.0];
        backWallMesh.scale = [5.0, 2.0, 0.1];


        this.dragon.scene.Add(sphereHM);
        this.dragon.scene.Add(sphereHR);
        this.dragon.scene.Add(sphereMM);
        this.dragon.scene.Add(floorMesh);
        this.dragon.scene.Add(backWallMesh);
        this.dragon.scene.Add(sideWallMesh);

        const pointLight = new DRAGON.PointLight([100, 50, 30], [1.0, 1.0, 1.0], 0);
        
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