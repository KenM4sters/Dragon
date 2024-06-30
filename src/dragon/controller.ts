import * as glm from "gl-matrix";
import { PerspectiveCamera } from "./export";
import { Input } from "./input";
import { Clamp, EaseInOut, Spherical, SphericalToCartesian } from "./maths";


export abstract class CameraController 
{
    constructor(camera : PerspectiveCamera) 
    {
        this.camera = camera;
        this.input = Input.GetInstance();

        this.canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    }

    protected readonly camera : PerspectiveCamera;
    protected readonly input : Input;
    protected readonly canvas : HTMLCanvasElement;
}

export class TurnTableController extends CameraController
{
    constructor(camera : PerspectiveCamera) 
    {
        super(camera);

        this.input.AddMouseMoveCallback((e : MouseEvent) => this.OnMouseMove(e)); 
        this.input.AddMouseDownCallback((e: MouseEvent) => this.OnMouseDown(e)); 
        this.input.AddMouseUpCallback((e : MouseEvent) => this.OnMouseUp(e)); 
        this.input.AddScrollCallback((e : WheelEvent) => this.OnScroll(e)); 

        this.camera.position = glm.vec3.fromValues(0, 5, 10);

        this.spherical.setFromVector3(this.camera.position);

        const viewMatrix = glm.mat4.lookAt(glm.mat4.create(), this.camera.position, this.camera.target, this.camera.up);
        this.camera.SetViewMatrix(viewMatrix);

        const projectionMatrix = glm.mat4.perspective(
            glm.mat4.create(), 
            glm.glMatrix.toRadian(this.camera.fov), 
            this.canvas.width / this.canvas.height, 
            0.1, 
            100
        );
        this.camera.SetProjectionMatrix(projectionMatrix);
    }

    public Update(timeStep : number) : void 
    {
        // if(this.lerpTime < this.lerpDuration) 
        // {   
        //     this.lerpTime += timeStep * 0.001;
        //     const t = EaseInOut(this.lerpTime / this.lerpDuration);
        //     glm.vec3.lerp(this.camera.position, this.cameraStartPosition, this.cameraTargetPosition, t);            
        // }
    }

    private SetCameraPosition(newPosition: glm.vec3) 
    {
        this.cameraStartPosition = glm.vec3.clone(this.camera.position);
        this.cameraTargetPosition = glm.vec3.clone(newPosition);
        this.lerpTime = 0;
    }

    private OnMouseMove(event : MouseEvent) : void 
    {
        if(!this.isDragging) 
        {
            return;
        }

        const deltaMove = {
            x: event.clientX - this.previousMousePosition[0],
            y: event.clientY - this.previousMousePosition[1],
        }

        this.spherical.setFromVector3(this.camera.position);

        this.spherical.theta -= deltaMove.x * this.mouseSensitivity;
        this.spherical.phi = Clamp(this.spherical.phi - deltaMove.y * this.mouseSensitivity, 0.1, Math.PI - 0.1);

        const cartesian = SphericalToCartesian(this.spherical.radius, this.spherical.theta, this.spherical.phi);

        const newPosition = glm.vec3.add(glm.vec3.create(), cartesian, [0, 0, 0]);
        
        this.camera.position = newPosition;

        const viewMatrix = glm.mat4.lookAt(glm.mat4.create(), this.camera.position, this.camera.target, this.camera.up);

        this.camera.SetViewMatrix(viewMatrix);

        this.previousMousePosition = [event.clientX, event.clientY];
    }

    private OnMouseDown(event : MouseEvent) : void 
    {
        this.isDragging = true;

        this.previousMousePosition = [event.clientX, event.clientY];
    }


    private OnMouseUp(event : MouseEvent) : void 
    {
        this.isDragging = false;
    }

    private OnScroll(event : WheelEvent) : void 
    {
        event.preventDefault();

        let delta = event.deltaY;

        if(this.camera.fov >= 100) 
        {
            delta = Math.min(delta, 0);
        }
        else if(this.camera.fov <= 5) 
        {
            delta = Math.max(0, delta);
        }

        this.zoomFactor += delta * this.zoomSensitivity;

        this.camera.fov = Clamp(this.zoomFactor, 5, 100);
    
        console.log(this.zoomFactor, this.camera.fov);
        
        const projectionMatrix = glm.mat4.perspective(
            glm.mat4.create(), 
            glm.glMatrix.toRadian(this.camera.fov), 
            this.canvas.width / this.canvas.height, 
            0.1, 
            100
        );
    
        this.camera.SetProjectionMatrix(projectionMatrix);
    }

    private spherical : Spherical = new Spherical();
    private isDragging : boolean = false;
    private previousMousePosition : glm.vec2 = [0, 0];
    private zoomFactor : number = 46;
    private zoomSensitivity : number = 0.01;
    private mouseSensitivity : number = 0.01;
    private cameraStartPosition : glm.vec3 = [0, 0, 0];
    private cameraTargetPosition : glm.vec3 = [0, 0, 0];
    private lerpTime : number = 0;
    private lerpDuration : number = 1.0;
};



export class FPSController extends CameraController
{
    constructor(camera : PerspectiveCamera) 
    {
        super(camera);
        window.addEventListener("keydown", (e : KeyboardEvent) => this.OnKeyDown(e));

        this.camera.position = glm.vec3.fromValues(-3, 0, -1);

        this.camera.front = [1.0, 0.0, 0.0];

        this.UpdateCameraViewMatrix();
        this.UpdateCameraProjectionMatrix();
    }

    public Update(timeStep : number) : void 
    {
        this.timeStep = timeStep;
    }

    private OnKeyDown(event : KeyboardEvent) : void 
    {
        // if(event.code == "w") 
        // {
        //     glm.vec3.add(this.camera.position, this.camera.position, this.camera.target);
        //     glm.vec3.multiply(this.camera.position, this.camera.position, glm.vec3.fromValues(this.timeStep, this.timeStep, this.timeStep));
        // }
        // if(event.code == "A") 
        // {
        //     glm.vec3.add(this.camera.position, this.camera.position, this.camera.target);
        //     glm.vec3.multiply(this.camera.position, this.camera.position, glm.vec3.fromValues(this.timeStep, this.timeStep, this.timeStep));
        // }
        // if(event.code == "S") 
        // {
        //     glm.vec3.add(this.camera.position, this.camera.position, this.camera.target);
        //     glm.vec3.multiply(this.camera.position, this.camera.position, glm.vec3.fromValues(this.timeStep, this.timeStep, this.timeStep));
        // }
        // if(event.code == "D") 
        // {
        //     glm.vec3.add(this.camera.position, this.camera.position, this.camera.target);
        //     glm.vec3.multiply(this.camera.position, this.camera.position, glm.vec3.fromValues(this.timeStep, this.timeStep, this.timeStep));
        // }

        this.UpdateCameraDirections();
    }

    private UpdateCameraDirections() : void 
    {
    }

    private UpdateCameraViewMatrix() : void 
    {
        const viewMatrix = glm.mat4.lookAt(glm.mat4.create(), this.camera.position, glm.vec3.add(glm.vec3.create(), this.camera.position, this.camera.front), this.camera.up);
        this.camera.SetViewMatrix(viewMatrix);
    }

    private UpdateCameraProjectionMatrix() : void 
    {
        const projectionMatrix = glm.mat4.perspective(glm.mat4.create(),
        glm.glMatrix.toRadian(this.camera.fov), this.canvas.width / this.canvas.height, 0.1, 100.0);
        this.camera.SetProjectionMatrix(projectionMatrix);
    }

    private timeStep : number = 0.016;
};