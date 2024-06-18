import { BufferAttribLayout, BufferAttribute, VertexBuffer } from "./buffer";
import { Primitives } from "./primitives";
import { VertexArray } from "./vertexArray";


export abstract class Geometry 
{
    constructor() 
    {

    }
}

export class BoxGeometry extends Geometry
{
    constructor() 
    {
        super();
        
        const cubeBuffer = new VertexBuffer(Primitives.cubeVerticesComplete);
        const elements : BufferAttribute[] = new Array<BufferAttribute>(
            new BufferAttribute(3, 12, "aPosition"),
            new BufferAttribute(3, 12, "aNormal"),
            new BufferAttribute(2, 8, "aUV")
        );
        
        const layout : BufferAttribLayout = new BufferAttribLayout(elements);
        cubeBuffer.SetLayout(layout);

        this.vertexArray = new VertexArray(cubeBuffer);
    }

    private vertexArray : VertexArray;
};