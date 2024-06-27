import * as glm from "gl-matrix";

import { Geometry } from "./geometry";
import { Material, PhysicalMaterial, SkyboxMaterial } from "./material";
import { PerspectiveCamera } from "./camera";
import { Light, PointLight } from "./light";
import { WebGL } from "../webgl";


type MeshUpdateCallback = (mesh : Mesh, elapsedTime : number, timeStep : number) => void

export class Transforms 
{
    constructor() {}

    public position : glm.vec3 = glm.vec3.fromValues(0, 0, 0);
    public scale : glm.vec3 = glm.vec3.fromValues(1, 1, 1);
    public rotation : glm.quat = glm.quat.fromValues(0, 0, 0, 0);
}

export class Mesh 
{
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

    public SetUpdateCallback(callback : MeshUpdateCallback) 
    {
        this.userUpdateCallback = callback;
    }

    public UpdateUniforms(camera : PerspectiveCamera, lights : Array<Light>) : void 
    {
        const gl = WebGL.GetInstance().gl;

        let modelMatrix = glm.mat4.create();
        modelMatrix = glm.mat4.fromQuat(modelMatrix, this.rotation);
        modelMatrix = glm.mat4.scale(glm.mat4.create(), modelMatrix, this.scale);
        modelMatrix = glm.mat4.translate(glm.mat4.create(), modelMatrix, this.position);

        if(this.material instanceof PhysicalMaterial) 
        {
            const material = this.material;
            const shader = material.GetShader(); 

            gl.useProgram(shader.GetId().val);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "model"), false, modelMatrix);
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "view"), false, camera.GetViewMatrix());
            gl.uniformMatrix4fv(gl.getUniformLocation(shader.GetId().val, "projection"), false, camera.GetProjectionMatrix());
            gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "camera.Position"), camera.GetPosition());
    
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "IsUsingTextures"), 0);
    
            gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "rawMaterial.Albedo"), material.albedo);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "rawMaterial.Metallic"), material.metallic);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "rawMaterial.Roughness"), material.roughenss);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "rawMaterial.AO"), material.ao);
            gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "rawMaterial.Emission"), material.emission);
    
            for(const light of lights) 
            {
                if(light instanceof PointLight) 
                {
                    gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "light1.Position"), light.position);
                    gl.uniform3fv(gl.getUniformLocation(shader.GetId().val, "light1.Color"), light.color);
                    gl.uniform1f(gl.getUniformLocation(shader.GetId().val, "light1.Intensity"), light.intensity);
                    gl.useProgram(null);
                }
            }
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