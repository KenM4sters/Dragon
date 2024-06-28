import { Layer, WebGL } from "../webgl";
import { Renderer } from "./renderer/renderer";
import { Scene } from "../scene/scene";
import { SpecialFX } from "./specialFx/specialFX";



/**
 * @brief A wrapper around a Renderer that's designed manage and tell the renderer
 * what it should be doing each frame. 
 */
export class Graphics implements Layer
{
    constructor() 
    {
        const webgl = WebGL.GetInstance();
        this.gl = webgl.gl;
    }

    /**
     * @brief Has to be called in order for any rendering to happen. This function will tell
     * the scene to render followed by any specialFx passes (some are required by default, such 
     * as toneMapping).
     * @param scene An instance of a scene (should only be one) to render.
     * @param elapsedTime Time since the application began.
     * @param timeStep Time between each frame.
     */
    public Update(scene : Scene, elapsedTime : number, timeStep : number) : void 
    {
        scene.Render(elapsedTime, timeStep);

        if(!this.specialFx) 
        {
            this.specialFx = new SpecialFX(this.renderer, scene.writeTexture);
        }
        
        this.specialFx.Render();
    }

    /**
     * @brief Calls the entire graphics pipeline to resize to the user defined dimensions.
     * If this isn't set, the default will be the dimensions of the canvas.
     * @param width Should be the width of the desired viewport.
     * @param height Should be the height of the desired viewport.
     */
    public SetSizes(width: number, height: number) 
    {
        if(this.width != width || this.height != height) 
        {
            this.Resize(width, height);            
        }
    }

    /**
     * @brief Called everytime the window is resized, and resizes the canvas and specialFx passes.
     * @param width The new width.
     * @param height The new height.
     */
    public Resize(width: number, height: number) : void 
    {
        this.width = width;
        this.height = height;
        
        this.gl.canvas.width = this.width;
        this.gl.canvas.height = this.height;

        if(this.specialFx) 
        {
            this.specialFx.Resize(width, height);
        }
    }


    public GetRenderer() : Renderer { return this.renderer; }


    public specialFx !: SpecialFX;
    
    private renderer : Renderer = new Renderer();
    private gl : WebGL2RenderingContext;
    private width : number = 0;
    private height : number = 0;
};