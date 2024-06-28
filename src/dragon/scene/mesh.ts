import * as glm from "gl-matrix";

import { Geometry } from "./geometry";
import { Material, PhysicalMaterial, SkyboxMaterial } from "./material";
import { PerspectiveCamera } from "./camera";
import { Light, PointLight } from "./light";
import { WebGL } from "../webgl";
import { Scene } from "./scene";


type MeshUpdateCallback = (mesh : Mesh, elapsedTime : number, timeStep : number) => void

/**
 * @brief Mostly used by a Mesh instance to translate, scale and rotate the model position 
 * of the mesh.
 */
export class Transforms 
{
    constructor() {}

    public position : glm.vec3 = glm.vec3.fromValues(0, 0, 0);
    public scale : glm.vec3 = glm.vec3.fromValues(1, 1, 1);
    public rotation : glm.quat = glm.quat.fromValues(0, 0, 0, 0);
}


/**
 * @brief Final object that holds instances of Geometry, Material and Transform classes 
 * which together completely describe all the information required to render objects.
 */
export class Mesh 
{
    /**
     * @brief Constructs a Mesh instance from Geometry, Material and optionally Transform instnaces.
     * @param geo The Geometry instance.
     * @param mat The Material instance.
     * @param transforms The Transforms instance.
     */
    constructor(geo : Geometry, mat : Material, transforms : Transforms = new Transforms()) 
    {
        this.geometry = geo;
        this.material = mat;

        this.position = transforms.position;
        this.scale = transforms.scale;
        this.rotation = transforms.rotation;
    }

    public SetTransforms(transforms : Transforms) : void
    {
        this.position = transforms.position;
        this.scale = transforms.scale;
        this.rotation = transforms.rotation;
    }

    /**
     * @brief Sets a callback function that will be called just before rendering this Mesh
     * instance. Some example uses would be to provide any per frame transforms.
     * @param callback The callback function, which takes in the Mesh (this), the 
     * elapsedTime and timeStep (time between each frame).
     */
    public SetUpdateCallback(callback : MeshUpdateCallback) 
    {
        this.userUpdateCallback = callback;
    }

    /**
     * @brief Updates all the uniforms needed for rendering this Mesh instance.
     * @param scene The scene that holds the lights and skybox that each hold information
     * that this Mesh needs to be properly be shaded by the fragment shader.
     */
    public UpdateUniforms(scene : Scene) : void 
    {

        const gl = scene.gl;
        const lights = scene.lights;
        const skybox = scene.skybox;
        const camera = scene.camera;

        let modelMatrix = glm.mat4.create();
        modelMatrix = glm.mat4.fromQuat(modelMatrix, this.rotation);
        modelMatrix = glm.mat4.scale(glm.mat4.create(), modelMatrix, this.scale);
        modelMatrix = glm.mat4.translate(glm.mat4.create(), modelMatrix, this.position);

        if(this.material instanceof PhysicalMaterial) 
        {
            const material = this.material;
            const shader = material.GetShader();
            
            if(skybox) 
            {
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, skybox.GetBRDF().GetId().val);

                gl.activeTexture(gl.TEXTURE2);
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, skybox.GetConvolutedMap().GetId().val);
                
                gl.activeTexture(gl.TEXTURE3);
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, skybox.GetPrefilteredMap().GetId().val);
            }
            
            gl.useProgram(shader.GetId().val);
            gl.uniform1i(gl.getUniformLocation(shader.GetId().val, "uBRDF"), 0);
            gl.uniform1i(gl.getUniformLocation(shader.GetId().val, "uConvolutedMap"), 2);
            gl.uniform1i(gl.getUniformLocation(shader.GetId().val, "uPrefilteredMap"), 3);
            
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "model"), false, modelMatrix);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "view"), false, camera.GetViewMatrix());
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "projection"), false, camera.GetProjectionMatrix());
            gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "uCameraPosition"), camera.GetPosition());
    
            gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "uMaterial.Albedo"), material.albedo);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "uMaterial.Metallic"), material.metallic);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "uMaterial.Roughness"), material.roughenss);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "uMaterial.AO"), material.ao);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "uMaterial.Emission"), material.emission);
    
            for(const light of lights) 
            {
                if(light instanceof PointLight) 
                {
                    gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "uLight.Position"), light.position);
                    gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "uLight.AmbientColor"), light.color);
                    gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "uLight.Intensity"), light.intensity);
                    gl.useProgram(null);
                }
            }

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
            gl.activeTexture(gl.TEXTURE2);
            gl.bindTexture(gl.TEXTURE_2D, null);

        }
        else if(this.material instanceof SkyboxMaterial) 
        {
            const material = this.material;
            const shader = material.GetShader(); 

            gl.useProgram(shader.GetId().val);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "projection"), false, camera.GetProjectionMatrix());
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "view"), false, camera.GetViewMatrix());

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, material.cubeTexture.GetId().val);
            gl.uniform1i(gl.getUniformLocation(shader.GetId().val, "environmentMap"), 0);
        }
    }  

    public position : glm.vec3;
    public scale : glm.vec3;
    public rotation : glm.quat;
    public geometry : Geometry;
    public material : Material;
    public userUpdateCallback : MeshUpdateCallback | undefined;
}