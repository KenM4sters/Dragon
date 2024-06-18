import { Shader } from "./shader";

// Shaders
//
import mvpVert from "./resources/ModelViewProjection.vert?raw";
import rawFrag from "./resources/Raw.frag?raw";


export abstract class Material 
{
    constructor() 
    {
    }
}


export class BasicMaterial extends Material 
{
    constructor() 
    {
        super();

        this.shader = new Shader(mvpVert, rawFrag);
    }

    public shader : Shader;
}