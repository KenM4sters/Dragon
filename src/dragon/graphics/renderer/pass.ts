import { Primitives } from "../../primitives";
import { PerspectiveCamera } from "../../scene/camera";
import { WebGL } from "../../webgl";
import { Renderer } from "./renderer";


export abstract class RenderPass 
{
    constructor(renderer : Renderer) 
    {
        this.renderer = renderer;

        this.gl = WebGL.GetInstance().gl;
    }

    public abstract Render(elapsedTime : number, timeStep : number) : void;

    public abstract Resize(width : number, height : number) : void;

    protected renderer : Renderer;
    protected gl : WebGL2RenderingContext;
}

export abstract class SpecialFXPass extends RenderPass 
{
    constructor(renderer : Renderer) 
    {
        super(renderer);
    }

    protected screenQuad !: Primitives.Square;
}