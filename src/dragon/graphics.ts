import { Layer, WebGL } from "./webgl";
import { Pass } from "./pass";
import { Renderer } from "./renderer";
import { PerspectiveCamera } from "./camera";
import { Registry } from "./registry";
import { BoxGeometry } from "./geometry";
import { BasicMaterial } from "./material";
import { UpdateComponent } from "./entity";

export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
    }

    public Update(registry : Registry, camera : PerspectiveCamera, elapsedTime : number, timeStep : number) : void 
    {
        this.renderer.Begin();

        for(const entity of registry.GetAllEntities())  
        {
            const geo = entity.Get<BoxGeometry>(BoxGeometry);
            const mat = entity.Get<BasicMaterial>(BasicMaterial);
            const update = entity.Get<UpdateComponent>(UpdateComponent);
            
            entity.Update(camera);

            if(update) 
            {
                update.func(entity, elapsedTime, timeStep);
            }

            if(geo && mat) 
            {                   
                this.renderer.Render(geo.GetVertexArray(), mat.GetShader());
            }
        }      
    }   

    public OnResize(): void 
    {
        
    }

    private renderer : Renderer = new Renderer();
    private passes : Array<Pass> = new Array<Pass>();
    private gl : WebGL2RenderingContext;
};