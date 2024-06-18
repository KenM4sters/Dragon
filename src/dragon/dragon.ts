import { PerspectiveCamera } from "./camera";
import { Graphics } from "./graphics";
import { Registry } from "./registry";


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
        const timeStep = elapsedTime - this.lastFrame;
        this.lastFrame = elapsedTime;

        if (this.scriptLoop) {
            this.scriptLoop(elapsedTime, timeStep);
        }

        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }

    public Update() : void 
    {
        this.graphics = this.graphics as Graphics;
        this.camera = this.camera as PerspectiveCamera;
        this.registry = this.registry as Registry;

        this.graphics.Update(this.registry, this.camera);
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
}