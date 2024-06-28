import { BufferAttribLayout, BufferAttribute, Shader, VertexArray, VertexBuffer } from "./export";


/**
 * @brief Very simple wrapper around some common vertices (square, cube etc) used by the 
 * geometry classes.
 */
export namespace Primitives 
{
    export class Square 
    {
        constructor(vertSrc : string, fragSrc : string) 
        {
            this.shader = new Shader(vertSrc, fragSrc);

            const cubeBuffer = new VertexBuffer(Primitives.Vertices.squarePNT);
            const elements : BufferAttribute[] = new Array<BufferAttribute>(
                new BufferAttribute(3, 12, "aPosition"),
                new BufferAttribute(3, 12, "aNormal"),
                new BufferAttribute(2, 8, "aUV")
            );
            
            const layout : BufferAttribLayout = new BufferAttribLayout(elements);
            cubeBuffer.SetLayout(layout);
    
            this.vertexArray = new VertexArray(cubeBuffer);
        }
    
        public GetVertexArray() : VertexArray { return this.vertexArray; }
        public GetShader() : Shader { return this.shader; }
        
        private vertexArray : VertexArray;
        private shader: Shader;
    };

    export class Vertices 
    {
        private constructor() {}

        static cubePNT = new Float32Array([ 
            //  back
            -1.0, -1.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0,
            1.0, -1.0, -1.0,  0.0,  0.0, -1.0,  1.0,  0.0,
            1.0,  1.0, -1.0,  0.0,  0.0, -1.0,  1.0,  1.0,
            1.0,  1.0, -1.0,  0.0,  0.0, -1.0,  1.0,  1.0,
            -1.0,  1.0, -1.0,  0.0,  0.0, -1.0,  0.0,  1.0,
            -1.0, -1.0, -1.0,  0.0,  0.0, -1.0,  0.0,  0.0,
            // front
            -1.0, -1.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,
            1.0, -1.0,  1.0,  0.0,  0.0,  1.0,  1.0,  0.0,
            1.0,  1.0,  1.0,  0.0,  0.0,  1.0,  1.0,  1.0,
            1.0,  1.0,  1.0,  0.0,  0.0,  1.0,  1.0,  1.0,
            -1.0,  1.0,  1.0,  0.0,  0.0,  1.0,  0.0,  1.0,
            -1.0, -1.0,  1.0,  0.0,  0.0,  1.0,  0.0,  0.0,
            // left
            -1.0,  1.0,  1.0, -1.0,  0.0,  0.0,  1.0,  0.0,
            -1.0,  1.0, -1.0, -1.0,  0.0,  0.0,  1.0,  1.0,
            -1.0, -1.0, -1.0, -1.0,  0.0,  0.0,  0.0,  1.0,
            -1.0, -1.0, -1.0, -1.0,  0.0,  0.0,  0.0,  1.0,
            -1.0, -1.0,  1.0, -1.0,  0.0,  0.0,  0.0,  0.0,
            -1.0,  1.0,  1.0, -1.0,  0.0,  0.0,  1.0,  0.0,
            // right
            1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  1.0,  0.0,
            1.0,  1.0, -1.0,  1.0,  0.0,  0.0,  1.0,  1.0,
            1.0, -1.0, -1.0,  1.0,  0.0,  0.0,  0.0,  1.0,
            1.0, -1.0, -1.0,  1.0,  0.0,  0.0,  0.0,  1.0,
            1.0, -1.0,  1.0,  1.0,  0.0,  0.0,  0.0,  0.0,
            1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  1.0,  0.0,
            // bottom
            -1.0, -1.0, -1.0,  0.0, -1.0,  0.0,  0.0,  1.0,
            1.0, -1.0, -1.0,  0.0, -1.0,  0.0,  1.0,  1.0,
            1.0, -1.0,  1.0,  0.0, -1.0,  0.0,  1.0,  0.0,
            1.0, -1.0,  1.0,  0.0, -1.0,  0.0,  1.0,  0.0,
            -1.0, -1.0,  1.0,  0.0, -1.0,  0.0,  0.0,  0.0,
            -1.0, -1.0, -1.0,  0.0, -1.0,  0.0,  0.0,  1.0,
            // top
            -1.0,  1.0, -1.0,  0.0,  1.0,  0.0,  0.0,  1.0,
            1.0,  1.0, -1.0,  0.0,  1.0,  0.0,  1.0,  1.0,
            1.0,  1.0,  1.0,  0.0,  1.0,  0.0,  1.0,  0.0,
            1.0,  1.0,  1.0,  0.0,  1.0,  0.0,  1.0,  0.0,
            -1.0,  1.0,  1.0,  0.0,  1.0,  0.0,  0.0,  0.0,
            -1.0,  1.0, -1.0,  0.0,  1.0,  0.0,  0.0,  1.0
        ]);

        static squarePNT = new Float32Array([
            1.0,  1.0, 0.0,  0.0, 0.0, 1.0,  1.0, 1.0,  
            1.0, -1.0, 0.0,  0.0, 0.0, 1.0,  1.0, 0.0,   
            -1.0, -1.0, 0.0,  0.0, 0.0, 1.0,  0.0, 0.0,  

            -1.0, -1.0, 0.0,  0.0, 0.0, 1.0,  0.0, 0.0,   
            -1.0, 1.0, 0.0,  0.0, 0.0, 1.0,  0.0, 1.0,   
            1.0,  1.0, 0.0,  0.0, 0.0, 1.0,  1.0, 1.0  
        ]);
    };

    export class Indices 
    {
        private constructor() {}

        static square = new Uint16Array([
            0, 1, 3,   
            1, 2, 3 
        ]);
    
        static cube = new Uint16Array([
            // Front face
            0, 1, 3,   
            1, 2, 3,
            // Right face
            4, 5, 6,
            6, 7, 4,
            // Back face
            8, 9, 10,
            10, 11, 8,
            // Left face
            12, 13, 14,
            14, 15, 12,
            // Top face
            16, 17, 18,
            18, 19, 16,
            // Bottom face
            20, 21, 22,
            22, 23, 20
        ]);
    };
};
