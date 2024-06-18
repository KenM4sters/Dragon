import * as glm from "gl-matrix";

export class PerspectiveCamera 
{
    constructor(pos : glm.vec3) 
    {
        this.position = pos;
    }
        
    public Update(w : number, h : number) 
    {
        this.UpdateProjectionMatrix(w, h);
        this.UpdateViewMatrix();
    }

    public UpdateViewMatrix() : void 
    {
        this.right = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross( glm.vec3.create(), this.front, this.up)); 
        this.up  = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross(glm.vec3.create(), this.right, this.front));
        this.viewMatrix = glm.mat4.lookAt(this.viewMatrix, this.position, glm.vec3.add(glm.vec3.create(), this.position, this.front), this.up);
    }
    
    public UpdateProjectionMatrix(w : number, h : number) : void 
    {                
        glm.mat4.perspective(this.projectionMatrix, glm.glMatrix.toRadian(this.fov), w/h, 0.1, 1000);
    }
    
    public ResetFOV(fov : number, w: number, h : number) : void 
    { 
        this.fov = fov; this.UpdateProjectionMatrix(w, h); 
    }

    // Getters.
    public GetPosition() : glm.vec3 { return this.position; }
    public GetProjectionMatrix() : glm.mat4 { return this.projectionMatrix; }
    public GetViewMatrix() : glm.mat4 { return this.viewMatrix; }

    private position : glm.vec3;
    private front : glm.vec3 = [0.0, 0.0, -1.0];
    private up : glm.vec3 = [0.0, 1.0, 0.0];
    private right : glm.vec3 = [1.0, 0.0, 0.0];
    private fov : number = 45;
    private projectionMatrix : glm.mat4 = glm.mat4.create();
    private viewMatrix : glm.mat4 = glm.mat4.create();
};