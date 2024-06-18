import { Layer, WebGL } from "./webgl";
import { Pass } from "./pass";
import { Script } from "../script";
import { Renderer } from "./renderer";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
    }

    public SetAnimationLoop() 
    {
        
    }

    public Update(script : Script) : void 
    {        
        script.Update();

        this.renderer.Render();
    }   

    public OnResize(): void 
    {
        
    }

    private renderer : Renderer = new Renderer();
    private passes : Array<Pass> = new Array<Pass>();
    private gl : WebGL2RenderingContext;
};