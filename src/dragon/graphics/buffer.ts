import { Ref, WebGL } from "../webgl";




/**
 * @brief Holds information about a specific part of a single vertex.
 * Usually either position, normal or UV coordinates. 
 * This informatinon is required by the BufferAttribLayout class in order for the 
 * corresponding VertexArray instance to accurately describe the layout information.
 */
export class BufferAttribute 
{   
    /**
     * @brief Constructs a BufferAttribute instance.
     * @param count The number of elements for this attribute (probably 2 for 2D applications and 3 for 3D).
     * @param size The total size of the attribute (likely to be 4 (size of a float) * the count).
     * @param name The debug name for this attribute (not used by WebGL).
     */
    constructor(count : number, size: number, name : string) 
    {
        this.count = count;
        this.size = size;
        this.name = name;
    }

    public name : string;
    public offset !: number; // We need more context about the overall BufferAttribLayout in order to define its offset in the layout, so we'll promise the compiler that it will eventually be defined, and before we attempt to access it.
    public size : number;
    public count : number;
}


/**
 * @brief Holds an array of BufferAttributes to wholly describe a single vertex, which is
 * used by the corresponding VertexArray instance to set the layout information.
 */
export class BufferAttribLayout
{
    /**
     * @brief Constructs a new BufferAttribLayout from an array of BufferAttributes.
     * @param elements The array of BufferAttributes that together define each attribute for a single
     * vertex.
     */
    constructor(elements : Array<BufferAttribute>) 
    {
        this.attributes = this.attributes.concat(elements);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }

    public attributes : Array<BufferAttribute> = []; 
    public size : number = 0;
    public stride : number = 0;

    /**
     * @brief Pushes a new BufferAttribute and updates this layout. 
     * @param element The BufferAttribute to be added.
     */
    public PushElement(element : BufferAttribute) : void 
    {
        this.attributes.push(element);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }
    /**
     * @brief Pushes an array of BufferAttributes and updates this layout. 
     * @param element The BufferAttribute to be added.
     */
    public PushElementArray(elements : Array<BufferAttribute>) : void 
    {
        this.attributes = this.attributes.concat(elements);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }

    /**
     * @brief Very important function that calculates the total stride for a single vertex
     * and an offset for each attribute into that vertex.
     */
    private CalculateStrideAndOffsets() : void 
    {
        var offset : number = 0;
        for(const element of this.attributes) 
        {
            element.offset = offset;
            offset += element.size;
            this.stride += element.size;
        }
    }

    /**
     * @brief Calculates the total size of a vertex from the size of each attribute.
     */
    private CaclulateAttributesSize() : void 
    {
        for(const atttrib of this.attributes) 
        {
            this.size += atttrib.size;
        }

    }   

    // Getters
    public GetAttributes() : Array<BufferAttribute> { return this.attributes; }
}

/**
 * @brief Constructs a WebGLBuffer from vertices and a BufferLayout.
 */
export class VertexBuffer 
{
    constructor(vertices : Float32Array)
    {
        this.uniqueVertexData = vertices;
        
        // Cache new vertex data into a single shared Float32Array.
        var temp = new Float32Array(VertexBuffer.cachedVertexData.length + this.uniqueVertexData.length);
        temp.set(VertexBuffer.cachedVertexData, 0);
        temp.set(this.uniqueVertexData, VertexBuffer.cachedVertexData.length);
        VertexBuffer.cachedVertexData = temp;
    }

    // Getters
    public GetUniqueLayout() : BufferAttribLayout { return this.uniqueLayout; } 
    public GetUniqueVertexData() : Float32Array { return this.uniqueVertexData; } 
    public GetUniqueOffset() : number { return this.uniqueOffset; } 
    public GetUniqueSize() : number { return this.uniqueSize; } 
    public GetVerticesCount() : number { return this.nUniqueVertices; } 


    /**
     * @brief This function MUST be called after constructing a VertexBuffer instance 
     * in order to initalize the information about the vertices that will be used by the 
     * corresponding VertexArray instance.
     * @param layout The layout that describes the vertices data.
     */
    public SetLayout(layout : BufferAttribLayout) : void { 

        // Set the layout of our updated cached vertex data;
        this.uniqueLayout = layout;

        // Update existing layout properties to reflect the new layout.
        this.uniqueSize = this.uniqueVertexData.length * this.uniqueVertexData.BYTES_PER_ELEMENT
        this.uniqueOffset = VertexBuffer.cachedSize;
        this.nUniqueVertices = this.uniqueSize / this.uniqueLayout.size;
                
        VertexBuffer.cachedSize += this.uniqueSize;
        this.PushLayoutToBuffer();

        var webgl = WebGL.GetInstance();
        const gl = webgl.gl;
        
        if(!VertexBuffer.Id.val) 
        {
            VertexBuffer.Id.val = gl.createBuffer();
        };

        gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer.Id.val);
        gl.bufferData(gl.ARRAY_BUFFER, VertexBuffer.cachedVertexData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

    }

    public PushLayoutToBuffer() : void 
    {
        VertexBuffer.cachedLayout.concat(this.uniqueLayout); 
    }

    
    public static Id : Ref<WebGLBuffer | null> = {val: null}
    public static cachedVertexData : Float32Array = new Float32Array();
    public static cachedLayout : Array<BufferAttribLayout> = new Array<BufferAttribLayout>();
    public static cachedSize : number = 0;
    
    private nUniqueVertices !: number;
    private uniqueLayout !: BufferAttribLayout;
    private uniqueVertexData : Float32Array;
    private uniqueSize : number = 0
    private uniqueOffset : number = 0;
};



/**
 * @brief Sister class of a VertexBuffer to describe the indices for the VertexBuffer. 
 * Not necessary, but is recommended for meshes/models with a large number of vertices.
 */
export class IndexBuffer   
{
    constructor(indices : Uint16Array) {
        this.uniqueIndices = indices;
        this.uniqueOffset = IndexBuffer.cachedSize;
        this.uniqueSize = this.uniqueIndices.length * 2; // 16 bits = 2 bytes.

        var temp = new Uint16Array(IndexBuffer.cachedIndices.length + this.uniqueIndices.length);
        temp.set(IndexBuffer.cachedIndices, 0);
        temp.set(this.uniqueIndices, IndexBuffer.cachedIndices.length);

        IndexBuffer.cachedIndices = temp;
        IndexBuffer.cachedSize = IndexBuffer.cachedIndices.length * 2; // 16 bits = 2 bytes.
        
        var webgl = WebGL.GetInstance();
        const gl = webgl.gl;

        if(!IndexBuffer.Id.val) 
        {
            IndexBuffer.Id.val = gl.createBuffer();
        };
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, IndexBuffer.Id.val);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, IndexBuffer.cachedIndices, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    }

    // Getters
    public GetUniqueIndices() : Uint16Array { return this.uniqueIndices; }
    public GetUniqueOffset() : number { return this.uniqueOffset; }
    public GetUniqueSize() : number { return this.uniqueSize; }

    public static cachedIndices : Uint16Array = new Uint16Array();
    public static cachedSize : number = 0;
    public static Id : Ref<WebGLBuffer | null> = {val: null}

    private uniqueIndices : Uint16Array;
    private uniqueOffset : number;
    private uniqueSize : number;
};
