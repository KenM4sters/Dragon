import { WebGL } from "../../webgl";
import { Renderer } from "../renderer/renderer";
import { RawTexture2D } from "../texture";
import { Primitives } from "../../primitives";

export enum SpecialFXPassTypes 
{
    Undefined,
    BloomBlur,
    BloomCombine,
    ToneMapping,
    ColorCorrection
};


export abstract class SpecialFXPass  
{
    constructor(renderer : Renderer, type : SpecialFXPassTypes, dependancies : SpecialFXPassTypes[]) 
    {
        this.renderer = renderer;        
        this.gl = WebGL.GetInstance().gl;
        this.type = type;
        this.dependencies = dependancies;
    }

    public GetType() : SpecialFXPassTypes { return this.type; }

    public abstract Render(read : RawTexture2D, write : RawTexture2D) : void;

    public abstract Resize(width : number, height : number) : void;


    protected renderer : Renderer;
    protected gl : WebGL2RenderingContext;
    protected type : SpecialFXPassTypes;
    protected dependencies : SpecialFXPassTypes[];
    protected screenQuad !: Primitives.Square;
}