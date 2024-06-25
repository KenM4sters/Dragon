import { TextureImageData } from "three/src/textures/types";
import { Ref, WebGL } from "../webgl";
import { SamplerCreateInfo } from "./texture";


export interface HDRImageCreateInfo 
{
    dimension : number;
    format : number;
    nChannels : number;
    type : number;
    threeData : TextureImageData;
    samplerInfo : SamplerCreateInfo;
}

export abstract class Image 
{
    constructor() 
    {
        this.gl = WebGL.GetInstance().gl;

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
}

export class HDRImage extends Image 
{
    constructor(createInfo : HDRImageCreateInfo) 
    {
        super();

        this.imageInfo = createInfo;

        this.gl.bindTexture(createInfo.samplerInfo.dimension, this.id.val);

        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_MIN_FILTER, createInfo.samplerInfo.magFilter);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_MAG_FILTER, createInfo.samplerInfo.minFilter);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_WRAP_S, createInfo.samplerInfo.sWrap);
        this.gl.texParameteri(createInfo.samplerInfo.dimension, this.gl.TEXTURE_WRAP_T, createInfo.samplerInfo.tWrap);

        this.gl.pixelStorei(this.gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.gl.NONE);

        this.gl.texImage2D(createInfo.dimension, 0, createInfo.format, createInfo.threeData.width, createInfo.threeData.height, 0, createInfo.nChannels, createInfo.type, createInfo.threeData.data);
        
        this.gl.bindTexture(createInfo.dimension, null);
    }

    public GetImageInfo() : HDRImageCreateInfo 
    {
        return this.imageInfo;
    }

    private imageInfo : HDRImageCreateInfo;
}