import * as glm from "gl-matrix";
import VertexArray from "./vertexArray";
import { Shader } from "./Shader";


export interface Transforms 
{
    Translation : glm.vec3;
    Scale : glm.vec3;
    Rotation : glm.quat;
    ModelMatrix : glm.mat4;
}

export function SetInitialTransforms() : Transforms
{
    return {        
        Translation: [0.0, 0.0, 0.0],
        Scale: [1.0, 1.0, 1.0],
        Rotation: [0.0, 0.0, 0.0, 0.0],
        ModelMatrix: glm.mat4.create()
    };
}

export class Entity 
{
    constructor() 
    {
    }

    private vertexArray : VertexArray;
    private shader : Shader;
    private transforms : Transforms;
};