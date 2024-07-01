import * as glm from "gl-matrix";
import { CameraController, FPSController, TurnTableController } from "../controller";


export enum CameraControllerTypes
{
    TurnTable,
    FPS
};

/**
 * @brief Holds and updates the View and Projection matrices used to transform each 
 * object in the Scene instance relative to this camera object.
 */
export class PerspectiveCamera 
{
    constructor(pos : glm.vec3) 
    {
        this.position = pos;

        this.fpsController = new FPSController(this);
        this.turnTableController = new TurnTableController(this);

        this.controllerType = CameraControllerTypes.FPS;
        this.controller = this.fpsController;
    }

    public Update(elapsedTime : number, timeStep : number) : void 
    {
        if(this.controller instanceof TurnTableController) 
        {
            this.controller.Update(timeStep);
        }
    }

    public SetController(type : CameraControllerTypes) : void 
    {
        if(type == CameraControllerTypes.FPS) 
        {
            this.controllable = false;
            this.controller = this.fpsController;
            this.position = [-3, 0, -1];
            this.fpsController.UpdateCameraViewMatrix();
            this.fpsController.UpdateCameraProjectionMatrix();
        }
        else 
        {
            this.controllable = true;
            this.controller = this.turnTableController;
            this.position = [0, 5, 10];
            this.turnTableController.UpdateCameraViewMatrix();
            this.turnTableController.UpdateCameraProjectionMatrix();
        }
    }
     
    public SetViewMatrix(viewMatrix : glm.mat4) : void 
    {
        this.viewMatrix = viewMatrix;
    }
    
    public SetProjectionMatrix(projectionMatrix : glm.mat4) : void
    {
        this.projectionMatrix = projectionMatrix;
    }

    public Resize(width : number, height : number) : void 
    {
        this.projectionMatrix = glm.mat4.perspective(glm.mat4.create(), glm.glMatrix.toRadian(this.fov), width / height, 0.1, 100);
    }

    
    // Getters.
    public GetProjectionMatrix() : glm.mat4 { return this.projectionMatrix; }
    public GetViewMatrix() : glm.mat4 { return this.viewMatrix; }
    
    public position : glm.vec3;
    public target : glm.vec3 = [0.0, 0.0, 0.0];
    public front : glm.vec3 = [0.0, 0.0, -1.0];
    public up : glm.vec3 = [0.0, 1.0, 0.0];
    public right : glm.vec3 = [1.0, 0.0, 0.0];
    public fov : number = 45;
    public controllable : boolean = false;
    
    private projectionMatrix : glm.mat4 = glm.mat4.create();
    private viewMatrix : glm.mat4 = glm.mat4.create();
    private controller : CameraController;
    private fpsController !: FPSController;
    private turnTableController !: TurnTableController;
    private controllerType : CameraControllerTypes;
};