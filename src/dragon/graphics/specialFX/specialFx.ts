import { Layer, WebGL } from "../../webgl";
import { Framebuffer, FramebufferCreateInfo } from "../framebuffer";
import { Renderer } from "../renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../renderer/target";
import { RawTexture2D, RawTextureCreateInfo } from "../texture";
import { BloomPass, BloomPassCreateInfo } from "./bloom";
import { BlurPass, BlurPassCreateInfo } from "./blur";
import { SpecialFXPass } from "./pass";
import { ToneMappingPass, ToneMappingPassCreateInfo } from "./toneMapping";

let read : RawTexture2D;
let write : RawTexture2D;

export class SpecialFX implements Layer
{
    constructor(renderer : Renderer, sceneTexture : RawTexture2D) 
    {
        this.renderer = renderer;
        this.scene = sceneTexture;
        this.gl = WebGL.GetInstance().gl;

        const canvas = WebGL.GetInstance().canvas;

        const writeTextureInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA32F,
            width: canvas.width,
            height: canvas.height,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_2D,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.REPEAT,
                tWrap: this.gl.REPEAT,
            }
        }

        this.ping = new RawTexture2D(writeTextureInfo);
        this.pong = new RawTexture2D(writeTextureInfo);
        read = this.ping;
        write = this.pong;

        const writeBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: this.pong,
            attachmentUnit: 0,
            renderBufferCreateInfo: null
        };

        this.writeBuffer = new Framebuffer(writeBufferInfo);

        const renderTargetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: canvas.width, height: canvas.height},
            depthFunc: this.gl.LEQUAL,
            blendFunc: this.gl.ONE
        };

        this.target = new RenderTarget(this.writeBuffer, renderTargetInfo);

        const hdrInfo : ToneMappingPassCreateInfo = 
        {
            exposure: 1.0
        };

        const bloomInfo : BloomPassCreateInfo = 
        {
            levels: 1,
            filterRadius: 0.001,
            strength: 0.5,
        }
    
        // this.passes.push(new BloomPass(this, bloomInfo));
        this.passes.push(new ToneMappingPass(this, hdrInfo));
    }

    public Render() : void 
    {
        this.target.writeBuffer = this.writeBuffer;

        for(let i = 0; i < this.passes.length; i++) 
        { 
            if(i == 0) 
            {
                this.passes[i].Render(this.scene, write);
            }
            else 
            {
                this.passes[i].Render(read, write)
            };

            if(read == this.ping) 
            {
                write = this.ping;
                read = this.pong;
            }
            else 
            {
                read = this.ping
                write = this.pong
            }
        }
    }
    
    public AddBloom(createInfo : BloomPassCreateInfo) : void 
    {
        this.passes.push(new BloomPass(this, createInfo));
        this.SortPasses();
    }

    public AddToneMapping(createInfo : ToneMappingPassCreateInfo) : void 
    {
        this.passes.push(new ToneMappingPass(this, createInfo));
        this.SortPasses();
    }

    public AddBlur(createInfo : BlurPassCreateInfo) : void 
    {
        this.passes.push(new BlurPass(this, createInfo));
        this.SortPasses();
    }

    public SortPasses() : void 
    {

    }

    public Resize(width : number, height : number) : void 
    {
        const targetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: width, height: height},
            depthFunc: this.gl.LEQUAL,
            blendFunc: this.gl.ONE
        };
        
        this.target.Resize(width, height, targetInfo);

        const writeTextureInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RGBA32F,
            width: width,
            height: height,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_2D,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.REPEAT,
                tWrap: this.gl.REPEAT,
            }
        }

        this.ping.Resize(writeTextureInfo);
        this.pong.Resize(writeTextureInfo);
        read = this.ping;
        write = this.pong;

        for(const pass of this.passes) 
        {
            pass.Resize(width, height);
        }
    }

    public readonly renderer : Renderer;
    public readonly scene : RawTexture2D;
    public ping : RawTexture2D;
    public pong : RawTexture2D;
    public target : RenderTarget;

    private writeBuffer : Framebuffer;
    private passes : SpecialFXPass[] = [];
    private gl : WebGL2RenderingContext;
}