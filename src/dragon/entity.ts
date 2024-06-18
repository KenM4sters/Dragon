import * as glm from "gl-matrix";
import VertexArray from "./vertexArray";
import { Shader } from "./shader";
import { WebGL } from "./webgl";



export interface Transforms 
{
    position : glm.vec3;
    scale : glm.vec3;
    rotation : glm.quat;
    model : glm.mat4;
    view : glm.mat4;
    projection : glm.mat4; 
}

export interface EntityCreateInfo 
{
    vertexArray : VertexArray;
    shader : Shader;
    transforms : Transforms;
};

export class Entity 
{
    constructor(createInfo : EntityCreateInfo) 
    {
        this.vertexArray = createInfo.vertexArray;
        this.shader = createInfo.shader;
        this.transforms = createInfo.transforms;

        this.gl = WebGL.GetInstance().gl;
    }

    public Update() : void 
    {
        // Transforms.
        //
        this.transforms.model = glm.mat4.create();
        this.transforms.model = glm.mat4.scale(glm.mat4.create(), this.transforms.model, this.transforms.scale);
        this.transforms.model = glm.mat4.translate(glm.mat4.create(), this.transforms.model, this.transforms.position);

        // Shader.
        //
        this.gl.useProgram(this.shader.GetId().val);
        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.shader.GetId().val, "model"), false, this.transforms.model);
        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.shader.GetId().val, "view"), false, this.transforms.view);
        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.shader.GetId().val, "projection"), false, this.transforms.projection);
        this.gl.useProgram(null);
    }

    public GetVertexArray() : VertexArray { return this.vertexArray; }
    public GetShader() : Shader { return this.shader; }
    public GetTransforms() : Transforms { return this.transforms; }

    private vertexArray : VertexArray;
    private shader : Shader;
    private transforms : Transforms;
    private gl : WebGL2RenderingContext;
};