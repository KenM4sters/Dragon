import { PerspectiveCamera } from "./camera";
import { Graphics } from "./graphics";
import { Registry } from "./registry";
import { WebGL } from "./webgl";


export class Dragon 
{
    constructor() 
    {
    }

    public SetAnimationLoop(callback: (elapsedTime: number, timeStep: number) => void): void 
    {
        this.scriptLoop = callback;
        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }

    private AnimationLoop(elapsedTime: number): void 
    {
        this.elapsedTime = elapsedTime;
        this.timeStep = elapsedTime - this.lastFrame;
        this.lastFrame = elapsedTime;


        if(this.scriptLoop) 
        {
            this.scriptLoop(elapsedTime, this.timeStep);
        }

        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }

    public Update() : void 
    {
        this.graphics = this.graphics as Graphics;
        this.camera = this.camera as PerspectiveCamera;
        this.registry = this.registry as Registry;

        this.camera.Update(this.width, this.height);

        this.graphics.Update(this.registry, this.camera, this.elapsedTime, this.timeStep);
    }

    public SetSizes(width: number, height: number) 
    {
        this.width = width;
        this.height = height;
        
        const webgl = WebGL.GetInstance();

        webgl.canvas.width = width;
        webgl.canvas.height = height;
        webgl.gl.viewport(0, 0, width, height);
    }

    public Stop(): void 
    {
        cancelAnimationFrame(this.animationFrameId); 

        this.scriptLoop = undefined; 
    }

    
    public registry : Registry = new Registry();
    
    public camera : PerspectiveCamera | undefined = undefined;
    public graphics : Graphics | undefined = undefined;

    private scriptLoop !: ((elapsedTime :number, timeStep : number) => void) | undefined;
    private animationFrameId : number = 0;
    private lastFrame : number = 0;
    private elapsedTime : number = 0;
    private timeStep : number = 0;

    private width : number = 0;
    private height : number = 0;
}