import * as DRAGON from "./dragon/dragon";
import * as glm from "gl-matrix";

// Shaders
//
import * as mvpVert from "./resources/ModelViewProjection.vert?raw";
import * as rawFrag from "./resources/Raw.frag?raw";
//


export class Script 
{
    constructor() 
    {


        const graphics = new DRAGON.Graphics();



        const camera = new DRAGON.PerspectiveCamera(glm.vec3.fromValues(0.0, 0.0, 5.0));
        
        // Cube 
        //
        const cubeShader = new DRAGON.Shader(mvpVert.default, rawFrag.default);
        const cubeBuffer = new DRAGON.VertexBuffer(DRAGON.Primitives.cubeVerticesComplete);

        const elements : DRAGON.BufferAttribute[] = new Array<DRAGON.BufferAttribute>(
            new DRAGON.BufferAttribute(3, 12, "aPosition"),
            new DRAGON.BufferAttribute(3, 12, "aNormal"),
            new DRAGON.BufferAttribute(2, 8, "aUV")
        );

        const layout : DRAGON.BufferAttribLayout = new DRAGON.BufferAttribLayout(elements);

        cubeBuffer.SetLayout(layout);

        const cubeVAO = new DRAGON.VertexArray(cubeBuffer);

        const cubeTransforms : DRAGON.Transforms = 
        {
            position:  glm.vec3.fromValues(0, 0, 0),
            scale:  glm.vec3.fromValues(1, 1, 1),
            rotation:  glm.quat.fromValues(0, 0, 0, 0),
            model:  glm.mat4.create(),
            view: camera.GetViewMatrix(),
            projection: camera.GetProjectionMatrix()
        }

        const cubeCreateInfo : DRAGON.EntityCreateInfo = 
        {
            shader: cubeShader,
            vertexArray: cubeVAO,
            transforms: cubeTransforms
        };

        const cube = new DRAGON.Entity(cubeCreateInfo);
        this.entities.push(cube);

    }

    public Loop() : void 
    {
        for(let entity of this.entities) 
        {
            entity.Update();
        }

    }

    private sizes : DRAGON.Sizes = new DRAGON.Sizes();
    public entities : Array<DRAGON.Entity> = new Array<DRAGON.Entity>();
};