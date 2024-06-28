import { IndexBuffer, VertexBuffer } from "./buffer";
import { Ref, WebGL } from "../webgl";

/**
 * @brief A VertexArray instance should be used in conjunction with a VertexBuffer and/or 
 * IndexBuffer instance to accurately decsribe the vertices in the vertex buffer. 
 */
export class VertexArray 
{
    /**
     * @brief Constructs a WebGLVertexArray instance and defines the necessary layout attributes
     * for the given vertex buffer.
     * @param vBuffer The vertex buffer that contains the vertex data that this vertex array will describe.
     * @param iBuffer The index buffer that corresponds to the vertex buffer, null by default.
     */
    constructor(vBuffer : VertexBuffer, iBuffer : IndexBuffer | null = null) 
    {
        this.vertexBuffer = vBuffer;
        this.indexBuffer = iBuffer;

        const webgl = WebGL.GetInstance();
        const gl = webgl.gl;

        this.id = {val: gl.createVertexArray()};
        gl.bindVertexArray(this.id.val);
        gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer.Id.val);

        if(this.indexBuffer) 
        {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, IndexBuffer.Id.val);
        }
 
        var layoutLoc = 0;
        for(const attrib of this.vertexBuffer.GetUniqueLayout().GetAttributes()) 
        {
            var uniqueLayout = this.vertexBuffer.GetUniqueLayout();
            var layoutOffset = VertexBuffer.cachedSize - (this.vertexBuffer.GetUniqueVertexData().length * this.vertexBuffer.GetUniqueVertexData().BYTES_PER_ELEMENT); // computes the offset due to preceding layouts.
            
            gl.vertexAttribPointer(layoutLoc, attrib.count, gl.FLOAT, false, uniqueLayout.stride, layoutOffset + attrib.offset);
            gl.enableVertexAttribArray(layoutLoc);
            layoutLoc++;
        }

        gl.bindVertexArray(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);


    } 
    
    // Getters
    GetId() : Ref<WebGLVertexArrayObject | null> { return this.id; }
    GetVertexBuffer() : VertexBuffer { return this.vertexBuffer; }
    GetIndexBuffer() : IndexBuffer | null { return this.indexBuffer; }

    private id : Ref<WebGLVertexArrayObject | null> = {val: null};
    private vertexBuffer : VertexBuffer; 
    private indexBuffer : IndexBuffer | null = null;

};