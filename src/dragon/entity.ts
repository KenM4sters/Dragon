import * as glm from "gl-matrix";
import { Shader } from "./shader";
import { WebGL } from "./webgl";
import { Geometry } from "./geometry";
import { BasicMaterial, Material } from "./material";



export class Transforms 
{
    constructor() {}

    public position : glm.vec3 = glm.vec3.fromValues(0, 0, 0);
    public scale : glm.vec3 = glm.vec3.fromValues(1, 1, 1);
    public rotation : glm.quat = glm.quat.fromValues(0, 0, 0, 0);
    public model : glm.mat4 = glm.mat4.create();
    public view : glm.mat4 = glm.mat4.create();
    public projection : glm.mat4 = glm.mat4.create(); 
}

export class Entity 
{
    constructor() {}

    public Set<T extends Shader | Transforms | Geometry>(constructor: new (...args: any[]) => T, ...args: any[]): void 
    {
        const comp: T = new constructor(...args);
    
        if(comp == undefined || comp == null) 
        {
            throw new Error("Invalid call to Entity.Set(). Failed to create instance of T!");
        }

        this.components.set((comp.constructor as any).name, comp);
    }


    public Get<T>(constructor: new (...args: any[]) => T): T | undefined 
    {
        return this.components.get((constructor as any).name) as T | undefined;
    }

    public Update() : void 
    {
        const gl = WebGL.GetInstance().gl;


        const transforms = this.Get<Transforms>(Transforms);
        const material = this.Get<BasicMaterial>(BasicMaterial);

        if(transforms instanceof Transforms && material instanceof BasicMaterial) 
        {
            transforms.model = glm.mat4.create();
            transforms.model = glm.mat4.scale(glm.mat4.create(), transforms.model, transforms.scale);
            transforms.model = glm.mat4.translate(glm.mat4.create(), transforms.model, transforms.position);

            const shader = material.shader

            gl.useProgram(shader.GetId().val);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "model"), false, transforms.model);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "view"), false, transforms.view);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "projection"), false, transforms.projection);
            gl.useProgram(null);
        }

    }

    private components : Map<string, object> = new Map<string, object>();
};