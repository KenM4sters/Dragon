import { PerspectiveCamera } from "./camera";
import * as glm from "gl-matrix";

export class Scene 
{
    constructor() 
    {
        this.camera = new PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 5.0));
        
    }

    private camera : PerspectiveCamera;
};