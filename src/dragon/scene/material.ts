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


export interface PhysicalMateralProps
{   
    albedo ?: glm.vec3;
    metallic ?: number;
    roughenss ?: number;
    ao ?: number;
    emission ?: number;
};

export abstract class Material 
{
    constructor() {}
}

/**
 * @brief Wrapper around a shader instance that only supports a color and a texture.
 */
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

/**
 * @brief Wrapper around a shader instance that renders the normals as colors.
 */
export class NormalMaterial extends Material 
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

/**
 * @brief Wrapper around a shader instance that only supports a RawCubeTexture instance.
 */
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

/**
 * @brief Wrapper around a shader instance that supports full PBR material properties 
 * such as Metallnes, Roughness, Albedo and more.
 */
export class PhysicalMaterial extends Material 
{
    constructor(props : PhysicalMateralProps) 
    {
        super();

        this.shader = new Shader(mvpVert, pbrFrag);

        if(props.albedo) this.albedo = props.albedo;
        if(props.metallic) this.metallic = props.metallic;
        if(props.roughenss) this.roughenss = props.roughenss;
        if(props.ao) this.ao = props.ao;
        if(props.emission) this.emission = props.emission;
    }

    public GetShader() : Shader { return this.shader; }

    private shader : Shader;

    public albedo : glm.vec3 = glm.vec3.fromValues(1.0, 1.0, 1.0);
    public metallic : number = 0.3;
    public roughenss : number = 0.8;
    public ao : number = 0.5;
    public emission : number = 0.0;
}