import { BufferAttribLayout, BufferAttribute, Shader, VertexArray, VertexBuffer } from "./export";
export var Primitives;
(function (Primitives) {
    class Square {
        constructor(vertSrc, fragSrc) {
            Object.defineProperty(this, "vertexArray", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "shader", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.shader = new Shader(vertSrc, fragSrc);
            const cubeBuffer = new VertexBuffer(Primitives.Vertices.squarePNT);
            const elements = new Array(new BufferAttribute(3, 12, "aPosition"), new BufferAttribute(3, 12, "aNormal"), new BufferAttribute(2, 8, "aUV"));
            const layout = new BufferAttribLayout(elements);
            cubeBuffer.SetLayout(layout);
            this.vertexArray = new VertexArray(cubeBuffer);
        }
        GetVertexArray() { return this.vertexArray; }
        GetShader() { return this.shader; }
    }
    Primitives.Square = Square;
    ;
    class Vertices {
        constructor() { }
    }
    Object.defineProperty(Vertices, "cubePNT", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: new Float32Array([
            //  back
            -0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 0.0,
            0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 0.0,
            0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 1.0,
            0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 1.0,
            -0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 1.0,
            -0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 0.0,
            // front
            -0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 0.0,
            0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 0.0,
            0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0,
            0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0,
            -0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 1.0,
            -0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 0.0,
            // left
            -0.5, 0.5, 0.5, -1.0, 0.0, 0.0, 1.0, 0.0,
            -0.5, 0.5, -0.5, -1.0, 0.0, 0.0, 1.0, 1.0,
            -0.5, -0.5, -0.5, -1.0, 0.0, 0.0, 0.0, 1.0,
            -0.5, -0.5, -0.5, -1.0, 0.0, 0.0, 0.0, 1.0,
            -0.5, -0.5, 0.5, -1.0, 0.0, 0.0, 0.0, 0.0,
            -0.5, 0.5, 0.5, -1.0, 0.0, 0.0, 1.0, 0.0,
            // right
            0.5, 0.5, 0.5, 1.0, 0.0, 0.0, 1.0, 0.0,
            0.5, 0.5, -0.5, 1.0, 0.0, 0.0, 1.0, 1.0,
            0.5, -0.5, -0.5, 1.0, 0.0, 0.0, 0.0, 1.0,
            0.5, -0.5, -0.5, 1.0, 0.0, 0.0, 0.0, 1.0,
            0.5, -0.5, 0.5, 1.0, 0.0, 0.0, 0.0, 0.0,
            0.5, 0.5, 0.5, 1.0, 0.0, 0.0, 1.0, 0.0,
            // bottom
            -0.5, -0.5, -0.5, 0.0, -1.0, 0.0, 0.0, 1.0,
            0.5, -0.5, -0.5, 0.0, -1.0, 0.0, 1.0, 1.0,
            0.5, -0.5, 0.5, 0.0, -1.0, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.5, 0.0, -1.0, 0.0, 1.0, 0.0,
            -0.5, -0.5, 0.5, 0.0, -1.0, 0.0, 0.0, 0.0,
            -0.5, -0.5, -0.5, 0.0, -1.0, 0.0, 0.0, 1.0,
            // top
            -0.5, 0.5, -0.5, 0.0, 1.0, 0.0, 0.0, 1.0,
            0.5, 0.5, -0.5, 0.0, 1.0, 0.0, 1.0, 1.0,
            0.5, 0.5, 0.5, 0.0, 1.0, 0.0, 1.0, 0.0,
            0.5, 0.5, 0.5, 0.0, 1.0, 0.0, 1.0, 0.0,
            -0.5, 0.5, 0.5, 0.0, 1.0, 0.0, 0.0, 0.0,
            -0.5, 0.5, -0.5, 0.0, 1.0, 0.0, 0.0, 1.0
        ])
    });
    Object.defineProperty(Vertices, "squarePNT", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: new Float32Array([
            1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
            1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0,
            -1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
            -1.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
            -1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0,
            1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0
        ])
    });
    Primitives.Vertices = Vertices;
    ;
    class Indices {
        constructor() { }
    }
    Object.defineProperty(Indices, "square", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: new Uint16Array([
            0, 1, 3,
            1, 2, 3
        ])
    });
    Object.defineProperty(Indices, "cube", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: new Uint16Array([
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
        ])
    });
    Primitives.Indices = Indices;
    ;
})(Primitives || (Primitives = {}));
;
