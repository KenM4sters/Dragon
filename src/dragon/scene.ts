import { Light } from "./light";
import { Mesh } from "./mesh";


export class Scene 
{
    constructor() 
    {

    }

    public Add(child : Mesh | Light) : void 
    {
        if(child instanceof Mesh) 
        {
            this.meshes.push(child);
        }
        else if(child instanceof Light) 
        {
            this.lights.push(child);
        }
    }

    public GetAllChildren() : {meshes : Array<Mesh>, lights : Array<Light>} 
    { 
        return {meshes: this.meshes, lights: this.lights};
    }
    
    private meshes : Array<Mesh> = new Array<Mesh>();
    private lights : Array<Light> = new Array<Light>();
}; 