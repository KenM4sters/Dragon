import { Ref, WebGL } from "./webgl";

export interface RawTextureCreateInfo 
{
    dimension : number;
    format : number;  
    width : number;
    height : number;
    nChannels : number;
    type: number;
    data : Float32Array | Uint8Array | Uint16Array | Uint32Array | null;
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

    public abstract CreateSampler(samplerInfo : SamplerCreateInfo) : void;

    public GetId() : Ref<WebGLTexture> { return this.id; }

    protected id : Ref<WebGLTexture>;
    protected gl : WebGL2RenderingContext;
};


export class RawTexture2D extends Texture
{   
    constructor() 
    {
        super();
    }

    public override CreateSampler(samplerInfo : SamplerCreateInfo) : void 
    {   
        this.gl.bindTexture(samplerInfo.dimension, this.id.val);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_MIN_FILTER, samplerInfo.magFilter);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_MAG_FILTER, samplerInfo.minFilter);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_WRAP_S, samplerInfo.sWrap);
        this.gl.texParameteri(samplerInfo.dimension, this.gl.TEXTURE_WRAP_T, samplerInfo.tWrap);
        this.gl.bindTexture(samplerInfo.dimension, null);
    }

    public CreateTextureImage2D(textureInfo : RawTextureCreateInfo) : void
    {
        this.textureInfo = textureInfo;
        this.gl.bindTexture(textureInfo.dimension, this.id.val);
        this.gl.texImage2D(textureInfo.dimension, 0, textureInfo.format, textureInfo.width, textureInfo.height, 0, textureInfo.nChannels, textureInfo.type,textureInfo.data);
        this.gl.bindTexture(textureInfo.dimension, null);
    }

    public GetTextureInfo() : RawTextureCreateInfo { return this.textureInfo; }

    private textureInfo !: RawTextureCreateInfo;
};