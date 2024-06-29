import * as glm from "gl-matrix";


/**
 * @brief Holds and updates the View and Projection matrices used to transform each 
 * object in the Scene instance relative to this camera object.
 */
export class PerspectiveCamera 
{
    constructor(pos : glm.vec3) 
    {
        this.position = pos;
    }
     
    public SetViewMatrix(viewMatrix : glm.mat4) : void 
    {
        this.viewMatrix = viewMatrix;
    }
    
    public SetProjectionMatrix(projectionMatrix : glm.mat4) : void
    {
        this.projectionMatrix = projectionMatrix;
    }

    public Resize(width : number, height : number) : void 
    {
        this.projectionMatrix = glm.mat4.perspective(glm.mat4.create(), glm.glMatrix.toRadian(this.fov), width / height, 0.1, 100);
    }

    
    // Getters.
    public GetProjectionMatrix() : glm.mat4 { return this.projectionMatrix; }
    public GetViewMatrix() : glm.mat4 { return this.viewMatrix; }
    
    public position : glm.vec3;
    public target : glm.vec3 = [0.0, 0.0, 0.0];
    public front : glm.vec3 = [0.0, 0.0, -1.0];
    public up : glm.vec3 = [0.0, 1.0, 0.0];
    public right : glm.vec3 = [1.0, 0.0, 0.0];
    public fov : number = 45;
    
    private projectionMatrix : glm.mat4 = glm.mat4.create();
    private viewMatrix : glm.mat4 = glm.mat4.create();
};