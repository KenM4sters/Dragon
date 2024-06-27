import * as glm from "gl-matrix";
import { RawCubeTexture, Shader, Texture } from "../export";
import { Image } from "../graphics/image";

// Shaders
//
import mvpVert from "../resources/shaders/model_view_projection.vert?raw";
import skyboxVert from "../resources/shaders/skybox.vert?raw";
import skyboxFrag from "../resources/shaders/skybox.frag?raw";
import rawFrag from "../resources/shaders/color.frag?raw";
import texFrag from "../resources/shaders/texture.frag?raw";
import pbrFrag from "../resources/shaders/physical_material.frag?raw";


export abstract class Material 
{
    constructor() {}
}


export class BasicMaterial extends Material 
{
    constructor() 
    {
        super();

        this.shader = new Shader(mvpVert, rawFrag);
    }

    public AddTexture(texture : Texture | Image) : void 
    {
        this.texture = texture;

        this.shader.Compile(mvpVert, texFrag);
    }

    public GetShader() : Shader { return this.shader; }

    public texture : Texture | Image | null = null;
    private shader : Shader;
}

export class SkyboxMaterial extends Material 
{
    constructor(cubeTex : RawCubeTexture) 
    {
        super();

        this.shader = new Shader(skyboxVert, skyboxFrag);
        this.cubeTexture = cubeTex;
    }

    public GetShader() : Shader { return this.shader; }

    public cubeTexture : RawCubeTexture
    private shader : Shader;
}


export class PhysicalMaterial extends Material 
{
    constructor() 
    {
        super();

        this.shader = new Shader(mvpVert, pbrFrag);
    }

    public GetShader() : Shader { return this.shader; }

    private shader : Shader;

    public albedo : glm.vec3 = glm.vec3.fromValues(0.2, 0.4, 0.8);
    public metallic : number = 0.3;
    public roughenss : number = 0.8;
    public ao : number = 0.1;
    public emission : number = 0.0;
}