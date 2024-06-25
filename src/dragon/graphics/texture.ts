import { Ref, WebGL } from "../webgl";

export interface RawTextureCreateInfo 
{
    dimension : number;
    format : number;  
    width : number;
    height : number;
    nChannels : number;
    type: number;
    data : Float32Array | Uint8Array | Uint16Array | Uint32Array | null;
    samplerInfo : SamplerCreateInfo
};

export interface SamplerCreateInfo 
{
    dimension : number;
    minFilter : number;
    magFilter : number;
    sWrap : number;
    tWrap : number;
};

abstract class Texture 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;

        const texture = this.gl.createTexture();
        if(!texture) 
        {
            throw new Error("Failed to create texture!");
        }

        this.id = {val: texture};
    }

    public Destroy() : void
    {
        this.gl.deleteTexture(this.id.val);
    }

    public GetId() : Ref<WebGLTexture> { return this.id; }

    protected id : Ref<WebGLTexture>;
    protected gl : WebGL2RenderingContext;
};


export class RawTexture2D extends Texture
{   
    constructor(createInfo : RawTextureCreateInfo) 
    {
        super();

        this.textureInfo = createInfo;

        this.gl.bindTexture(createInfo.samplerInfo.dimension, this.id.val);

        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_MIN_FILTER, createInfo.samplerInfo.magFilter);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_MAG_FILTER, createInfo.samplerInfo.minFilter);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_WRAP_S, createInfo.samplerInfo.sWrap);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_WRAP_T, createInfo.samplerInfo.tWrap);

        this.gl.texImage2D(createInfo.dimension, 0, createInfo.format, createInfo.width, createInfo.height, 0, createInfo.nChannels, createInfo.type, createInfo.data);
        
        this.gl.bindTexture(createInfo.dimension, null);
    } 
    

    public GetTextureInfo() : RawTextureCreateInfo { return this.textureInfo; }

    private textureInfo !: RawTextureCreateInfo;
};