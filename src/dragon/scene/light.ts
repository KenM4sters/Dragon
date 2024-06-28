import * as glm from "gl-matrix";

export abstract class Light 
{
    constructor() {}
}

/**
 * @brief Holds information about a light sources that radiates equally from a point in space.
 * A Light instance isn't rendered, but used by mesh shaders for accurate shading.
 */
export class PointLight extends Light 
{
    constructor(position : glm.vec3, color : glm.vec3, intensity : number) 
    {
        super();

        this.position = position;
        this.color = color;
        this.intensity = intensity;
    }

    public position : glm.vec3;
    public color : glm.vec3;
    public intensity : number;
}