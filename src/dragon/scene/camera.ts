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
    
    /**
     * @brief Updates the view matrix based on the right and up vectors.
     */
    public UpdateViewMatrix() : void 
    {
        this.right = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross( glm.vec3.create(), this.front, this.up)); 
        this.up  = glm.vec3.normalize(glm.vec3.create(), glm.vec3.cross(glm.vec3.create(), this.right, this.front));
        this.viewMatrix = glm.mat4.lookAt(this.viewMatrix, this.position, glm.vec3.add(glm.vec3.create(), this.position, this.front), this.up);
    }
    
    /**
     * Updates the projection matrix to a new dimension.
     * @param width new Width.
     * @param height new Height.
     */
    public UpdateProjectionMatrix(width: number, height: number) : void 
    {                  
        this.width = width;            
        this.height = height;            
        glm.mat4.perspective(this.projectionMatrix, glm.glMatrix.toRadian(this.fov), this.width/this.height, 0.1, 1000);
    }
    
    public ResetFOV(fov : number, width: number, height: number) : void 
    { 
        this.fov = fov; 
        this.UpdateProjectionMatrix(width, height); 
    }

    // Getters.
    public GetPosition() : glm.vec3 { return this.position; }
    public GetProjectionMatrix() : glm.mat4 { return this.projectionMatrix; }
    public GetViewMatrix() : glm.mat4 { return this.viewMatrix; }
    
    public width: number = 0;
    public height: number = 0;

    private position : glm.vec3;
    private front : glm.vec3 = [0.0, 0.0, -1.0];
    private up : glm.vec3 = [0.0, 1.0, 0.0];
    private right : glm.vec3 = [1.0, 0.0, 0.0];
    private fov : number = 45;
    private projectionMatrix : glm.mat4 = glm.mat4.create();
    private viewMatrix : glm.mat4 = glm.mat4.create();
};