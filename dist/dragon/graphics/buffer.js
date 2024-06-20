import { WebGL } from "../webgl";
//============================================================================
// Vertex Buffer
//============================================================================
export class BufferAttribute {
    constructor(count, size, name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // We need more context about the overall BufferAttribLayout in order to define its offset in the layout, so we'll promise the compiler that it will eventually be defined, and before we attempt to access it.
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "count", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.count = count;
        this.size = size;
        this.name = name;
    }
}
export class BufferAttribLayout {
    constructor(elements) {
        Object.defineProperty(this, "attributes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "stride", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        this.attributes = this.attributes.concat(elements);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }
    PushElement(element) {
        this.attributes.push(element);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }
    PushElementArray(elements) {
        this.attributes = this.attributes.concat(elements);
        this.CalculateStrideAndOffsets();
        this.CaclulateAttributesSize();
    }
    CalculateStrideAndOffsets() {
        var offset = 0;
        for (const element of this.attributes) {
            element.offset = offset;
            offset += element.size;
            this.stride += element.size;
        }
    }
    CaclulateAttributesSize() {
        for (const atttrib of this.attributes) {
            this.size += atttrib.size;
        }
    }
    // Getters
    GetAttributes() { return this.attributes; }
}
export class VertexBuffer {
    constructor(vertices) {
        Object.defineProperty(this, "nUniqueVertices", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueLayout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueVertexData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "uniqueOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        this.uniqueVertexData = vertices;
        // Cache new vertex data into a single shared Float32Array.
        var temp = new Float32Array(VertexBuffer.cachedVertexData.length + this.uniqueVertexData.length);
        temp.set(VertexBuffer.cachedVertexData, 0);
        temp.set(this.uniqueVertexData, VertexBuffer.cachedVertexData.length);
        VertexBuffer.cachedVertexData = temp;
    }
    // Getters
    GetUniqueLayout() { return this.uniqueLayout; }
    GetUniqueVertexData() { return this.uniqueVertexData; }
    GetUniqueOffset() { return this.uniqueOffset; }
    GetUniqueSize() { return this.uniqueSize; }
    GetVerticesCount() { return this.nUniqueVertices; }
    // Setters
    SetLayout(layout) {
        // Set the layout of our updated cached vertex data;
        this.uniqueLayout = layout;
        // Update existing layout properties to reflect the new layout.
        this.uniqueSize = this.uniqueVertexData.length * this.uniqueVertexData.BYTES_PER_ELEMENT;
        this.uniqueOffset = VertexBuffer.cachedSize;
        this.nUniqueVertices = this.uniqueSize / this.uniqueLayout.size;
        VertexBuffer.cachedSize += this.uniqueSize;
        this.PushLayoutToBuffer();
        var webgl = WebGL.GetInstance();
        const gl = webgl.gl;
        if (!VertexBuffer.Id.val) {
            VertexBuffer.Id.val = gl.createBuffer();
        }
        ;
        gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer.Id.val);
        gl.bufferData(gl.ARRAY_BUFFER, VertexBuffer.cachedVertexData, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    PushLayoutToBuffer() {
        VertexBuffer.cachedLayout.concat(this.uniqueLayout);
    }
}
Object.defineProperty(VertexBuffer, "Id", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: { val: null }
});
Object.defineProperty(VertexBuffer, "cachedVertexData", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Float32Array()
});
Object.defineProperty(VertexBuffer, "cachedLayout", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Array()
});
Object.defineProperty(VertexBuffer, "cachedSize", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0
});
;
//============================================================================
// Index Buffer
//============================================================================
export class IndexBuffer {
    constructor(indices) {
        Object.defineProperty(this, "uniqueIndices", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uniqueSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        if (!IndexBuffer.Id.val) {
            IndexBuffer.Id.val = gl.createBuffer();
        }
        ;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, IndexBuffer.Id.val);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, IndexBuffer.cachedIndices, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }
    // Getters
    GetUniqueIndices() { return this.uniqueIndices; }
    GetUniqueOffset() { return this.uniqueOffset; }
    GetUniqueSize() { return this.uniqueSize; }
}
Object.defineProperty(IndexBuffer, "cachedIndices", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Uint16Array()
});
Object.defineProperty(IndexBuffer, "cachedSize", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0
});
Object.defineProperty(IndexBuffer, "Id", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: { val: null }
});
;
