import { Layer, WebGL } from "../webgl";
import { Renderer } from "./renderer/renderer";
import { Scene } from "../scene/scene";
import { SpecialFXPass } from "./renderer/pass";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
    }

    public Update(scene : Scene, elapsedTime : number, timeStep : number) : void 
    {
        scene.Render(elapsedTime, timeStep);
                    
        for(const pass of this.specialFx) 
        {
            pass[1].Render(elapsedTime, timeStep);
        }
    }

    public SetSizes(width: number, height: number) 
    {
        if(this.width != width || this.height != height) 
        {
            this.Resize(width, height);            
        }
    }

    public Resize(width: number, height: number) : void 
    {
        this.width = width;
        this.height = height;
        
        this.gl.canvas.width = this.width;
        this.gl.canvas.height = this.height;

        for(const pass of this.specialFx) 
        {
            pass[1].Resize(width, height)
        }
    }


    public GetRenderer() : Renderer { return this.renderer; }


    public specialFx : Map<string, SpecialFXPass> = new Map<string, SpecialFXPass>();
    
    private renderer : Renderer = new Renderer();
    private gl : WebGL2RenderingContext;
    private width : number = 0;
    private height : number = 0;
};