import * as glm from "gl-matrix";
import { BoxGeometry, Mesh, NormalMaterial } from "./export";
import { WebGL } from "./webgl";


export class Preloader 
{
    constructor() 
    {
        const mat = new NormalMaterial();
        const geo = new BoxGeometry();
        this.cube = new Mesh(geo, mat);
        this.cube.scale = [1.0, 1.0, 1.0];

        this.gl = WebGL.GetInstance().gl;

        const canvas = WebGL.GetInstance().canvas;

        let app : HTMLElement = document.querySelector('#app') as HTMLElement;

        this.loadingDiv = document.createElement('div') as HTMLElement;

        this.loadingDiv.innerHTML = 
        `
            <div class="preloader-header"> loading... </div>
        `;

        app.appendChild(this.loadingDiv);

        this.projectionMatrix = glm.mat4.perspective(glm.mat4.create(), 45, canvas.width / canvas.height, 0.1, 100);
        this.viewMatrix = glm.mat4.lookAt(glm.mat4.create(), [0, 0, 10], [0, 0, 0], [0, 1, 0]);

        this.gl.viewport(0, 0, canvas.width, canvas.height);

    }

    private Rotate(elapsedTime : number, timeStep : number) : void 
    {
        const axis = glm.vec3.fromValues(1, -1, 0);
        const angle = elapsedTime * 45 * 0.0005;         
        const quat = glm.quat.setAxisAngle(this.cube.rotation, axis, glm.glMatrix.toRadian(angle));
        this.cube.rotation = glm.quat.normalize(quat, quat);
    }

    public Resize(width : number, height: number) : void 
    {
        this.projectionMatrix = glm.mat4.perspective(glm.mat4.create(), 45, width / height, 0.1, 100);
    }

    public Update(elapsedTime : number, timeStep : number) : void 
    {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0.9, 0.9, 0.9, 0.9);
        
        this.Rotate(elapsedTime, timeStep);
                
        if(this.cube.material instanceof NormalMaterial && this.cube.geometry instanceof BoxGeometry) 
        {            
            const shader = this.cube.material.GetShader().GetId().val;
            const vao = this.cube.geometry.GetVertexArray().GetId().val;
            
            let modelMatrix = glm.mat4.create();
            modelMatrix = glm.mat4.fromQuat(modelMatrix, this.cube.rotation);
            modelMatrix = glm.mat4.scale(glm.mat4.create(), modelMatrix, this.cube.scale);
            modelMatrix = glm.mat4.translate(glm.mat4.create(), modelMatrix, this.cube.position);

            this.gl.useProgram(shader);
            this.gl.bindVertexArray(vao);
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(shader, "projection"), false, this.projectionMatrix);
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(shader, "view"), false, this.viewMatrix);
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(shader, "model"), false, modelMatrix);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
        }
    }

    public Destroy() : void 
    {
        this.isDestroyed = true;

        this.loadingDiv.remove();

        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);

        // TODO:
    }

    public isDestroyed : boolean = false;

    private loadingDiv : HTMLElement;

    private cube : Mesh;
    private gl : WebGL2RenderingContext;
    private projectionMatrix : glm.mat4;
    private viewMatrix : glm.mat4;
}