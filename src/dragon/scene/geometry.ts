import { BufferAttribLayout, BufferAttribute, Primitives, VertexArray, VertexBuffer } from "../export";


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
        
        const cubeBuffer = new VertexBuffer(Primitives.Vertices.cubePNT);
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

    private vertexArray : VertexArray;
};



function GenerateCompleteSphere(radius: number, stackCount: number, sectorCount: number): { vertices: Float32Array, indices: Uint16Array } {
    const vert: number[] = [];
    const ind: number[] = [];

    let x, y, z, xy, nx, ny, nz, s, t, i, j, k1, k2, kk = 0;
    const lengthInv = 1.0 / radius;
    const sectorStep = 2 * Math.PI / sectorCount;
    const stackStep = Math.PI / stackCount;
    let offset = 0;

    for (i = 0; i <= stackCount; ++i) {
        const stackAngle = Math.PI / 2 - i * stackStep; // starting from pi/2 to -pi/2
        xy = radius * Math.cos(stackAngle); // r * cos(u)
        z = radius * Math.sin(stackAngle); // r * sin(u)

        for (j = 0; j <= sectorCount; ++j) {
            const sectorAngle = j * sectorStep; // starting from 0 to 2pi

            // Vertex position
            x = xy * Math.cos(sectorAngle); // r * cos(u) * cos(v)
            y = xy * Math.sin(sectorAngle); // r * cos(u) * sin(v)

            // r * sin(u)
            vert.push(x);
            vert.push(y);
            vert.push(z);

            // Normalized vertex normal
            nx = x * lengthInv;
            ny = y * lengthInv;
            nz = z * lengthInv;
            vert.push(nx);
            vert.push(ny);
            vert.push(nz);

            // Vertex tex coord between [0, 1]
            s = j / sectorCount;
            t = i / stackCount;
            vert.push(s);
            vert.push(t);

            // next
            offset += 3;
            offset += 3;
            offset += 2;
        }
    }

    for(i=0; i < stackCount; ++i)
        {
            k1 = i * (sectorCount + 1);            // beginning of current stack
            k2 = k1 + sectorCount + 1;             // beginning of next stack

            for(j=0; j < sectorCount; ++j, ++k1, ++k2)
            {
                // 2 triangles per sector excluding 1st and last stacks
                if(i != 0)
                {
                    ind[kk] = (k1);  // k1---k2---k1+1
                    ind[kk+1] = (k2);  // k1---k2---k1+1
                    ind[kk+2] = (k1+1);  // k1---k2---k1+1
                    kk += 3;
                }

                if(i != (stackCount-1))
                {
                    ind[kk] = (k1+1);  // k1---k2---k1+1
                    ind[kk+1] = (k2);  // k1---k2---k1+1
                    ind[kk+2] = (k2+1);  // k1---k2---k1+1
                    kk += 3;
                }
            }
        }
    

    const vertices = new Float32Array(vert);
    const indices = new Uint16Array(ind);

    return { vertices, indices };
}


function GenerateCompletePlane(w : number, h : number, wSegments : number, hSegments : number) : {vertices : Float32Array, indices : Uint16Array}
{
    const vert: number[] = [];
    const ind: number[] = [];

    for (let y = 0; y <= hSegments; y++) {
        for (let x = 0; x <= wSegments; x++) {
            const u = x / wSegments;
            const v = y / hSegments;
            const posX = u * w - w / 2; // Center the plane
            const posZ = v * h - h / 2; // Center the plane
            vert.push(posX, 0.0, posZ);
            vert.push(0.0, 1.0, 0.0);

            // Store UV coordinates
            // vert.push(x % 2 ? 0.0 : 1.0);
            // vert.push(y % 2 ? 0.0 : 1.0);
            vert.push(u);
            vert.push(v);
        }
    }
    
    for (let y = 0; y < hSegments; y++) {
        for (let x = 0; x < wSegments; x++) {
            const v0 = y * (wSegments + 1) + x;
            const v1 = v0 + 1;
            const v2 = (y + 1) * (wSegments + 1) + x;
            const v3 = v2 + 1;

            ind.push(v0, v1, v2);
            ind.push(v1, v3, v2);
        }
    }

    const vertices = new Float32Array(vert);
    const indices = new Uint16Array(ind);
    
    return {vertices, indices};
}