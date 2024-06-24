import { Graphics } from "./graphics/graphics";
import { Scene } from "./scene/scene";
import { Layer, WebGL } from "./webgl";


export class Dragon 
{
    constructor() 
    {
        this.graphics = new Graphics();
        this.scene = new Scene(this.graphics);

        window.addEventListener("resize", () => this.OnResize());
    }

    public SetAnimationLoop(callback: (elapsedTime: number, timeStep: number) => void): void 
    {
        this.animationCallback = callback;
        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }

    private AnimationLoop(elapsedTime: number): void 
    {
        this.elapsedTime = elapsedTime;
        this.timeStep = elapsedTime - this.lastFrame;
        this.lastFrame = elapsedTime;

        if(this.animationCallback) 
        {
            this.animationCallback(elapsedTime, this.timeStep);
        }

        this.animationFrameId = requestAnimationFrame((elapsedTime) => this.AnimationLoop(elapsedTime));
    }

    public Update() : void 
    {
        if(this.graphics != undefined) 
        {
            this.graphics.Update(this.scene, this.elapsedTime, this.timeStep);
        }
    }

    public OnResize(): void 
    {
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;

        let canvas = WebGL.GetInstance().canvas;

        if(canvas.width != newWidth || canvas.height != newHeight) 
        {
            canvas.width = newWidth;
            canvas.height = newHeight;

            this.scene.Resize(canvas.width, canvas.height);
            this.graphics.Resize(canvas.width, canvas.height);
        }
    }   

    public Stop(): void 
    {
        cancelAnimationFrame(this.animationFrameId); 

        this.animationCallback = undefined; 
    }
    
    public graphics : Graphics;
    public scene : Scene;

    private animationCallback !: ((elapsedTime :number, timeStep : number) => void) | undefined;
    private animationFrameId : number = 0;
    private lastFrame : number = 0;
    private elapsedTime : number = 0;
    private timeStep : number = 0;

}