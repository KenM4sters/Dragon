import { Layer, WebGL } from "./webgl";
import { Pass } from "./pass";
import { Renderer } from "./renderer";
import { PerspectiveCamera } from "./camera";
import { Registry } from "./registry";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
    }

    public Update(registry : Registry, camera : PerspectiveCamera, ) : void 
    {        
        this.renderer.Render();
    }   

    public OnResize(): void 
    {
        
    }

    private renderer : Renderer = new Renderer();
    private passes : Array<Pass> = new Array<Pass>();
    private gl : WebGL2RenderingContext;
};