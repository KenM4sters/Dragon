import * as glm from 'gl-matrix';
import { SpecialFXPass } from "../renderer/pass";
import { Renderer } from "../renderer/renderer";
import { RenderTarget, RenderTargetCreateInfo } from "../renderer/target";
import { Primitives } from "../../primitives";
import { Framebuffer, FramebufferCreateInfo } from "../framebuffer";
import { RawTexture2D, RawTextureCreateInfo } from "../texture";
import { Shader } from "../shader";


import upSamplingFrag from "../../resources/shaders/UpSampling.frag?raw";
import downSamplingFrag from "../../resources/shaders/DownSampling.frag?raw";
import rawVert from "../../resources/shaders/Raw.vert?raw"; 
import textureFrag from "../../resources/shaders/Texture.frag?raw"; 

export interface BloomPassCreateInfo  
{
    levels: number;
    threshold: number;
    strength: number;
    filterRadius : number;
};

export class BloomPass extends SpecialFXPass 
{
    constructor(renderer : Renderer, readTarget : RenderTarget[], bloomInfo : BloomPassCreateInfo) 
    {
        super(renderer);

        this.readTarget = readTarget[0];
        this.bloomInfo = bloomInfo;

        const canvas = this.gl.canvas;

        const writeTextureInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            nChannels: this.gl.RGBA,
            width: canvas.width,
            height: canvas.height,
            format: this.gl.RGBA32F,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo:
            {
                dimension: this.gl.TEXTURE_2D,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE,
            }
        };

        const writeBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(writeTextureInfo),
            attachmentUnit: 0,
            renderBufferCreateInfo: null
        };
        
        const targetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: canvas.width, height: canvas.height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: false,
            depthFunc: this.gl.LEQUAL,
            blending: true,
            blendFunc: this.gl.ONE
        };

        const writeBuffer = new Framebuffer(writeBufferInfo);
        this.writeTarget = new RenderTarget(this.readTarget.GetWriteBuffer(), writeBuffer, targetInfo);

        
        this.screenQuad = new Primitives.Square(rawVert, textureFrag);


        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "tex"), 0);
        this.gl.useProgram(null);



        var mipSize : glm.vec2 = glm.vec2.fromValues(this.gl.canvas.width, this.gl.canvas.height);
        var iMipSize : glm.vec2 = glm.vec2.fromValues(Math.floor(this.gl.canvas.width), Math.floor(this.gl.canvas.height));

        for(let i = 0; i < this.bloomInfo.levels; i++) 
        {   
            mipSize = glm.vec2.scale(glm.vec2.create(), mipSize, 0.5);
            iMipSize = glm.vec2.scale(glm.vec2.create(), iMipSize, 0.5);

            var mipInfo : RawTextureCreateInfo = 
            {
                dimension: this.gl.TEXTURE_2D,
                nChannels: this.gl.RGBA,
                width: mipSize[0],
                height: mipSize[1],
                format: this.gl.RGBA32F,
                type: this.gl.FLOAT,
                data: null,
                samplerInfo:
                {
                    dimension: this.gl.TEXTURE_2D,
                    minFilter: this.gl.LINEAR,
                    magFilter: this.gl.LINEAR,
                    sWrap: this.gl.CLAMP_TO_EDGE,
                    tWrap: this.gl.CLAMP_TO_EDGE,
                }
            };

            this.mipChain.push(new RawTexture2D(mipInfo));
        }

        
        const blurrWriteBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: this.mipChain[0],
            attachmentUnit: 0,
            renderBufferCreateInfo: null
        };

        this.blurrWriteBuffer = new Framebuffer(blurrWriteBufferInfo);



        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurrWriteBuffer.GetFramebufferId().val);
        var attachments : number[] = [ this.gl.COLOR_ATTACHMENT0 ];
        this.gl.drawBuffers(attachments);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        
        // Prepping uniform locations for the source HDR texture from the Scene output.
        this.gl.useProgram(this.upsampleShader.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.upsampleShader.GetId().val, "srcTexture"), 0);
        this.gl.useProgram(null);
        
        this.gl.useProgram(this.downsampleShader.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.downsampleShader.GetId().val, "srcTexture"), 0);
        this.gl.useProgram(null);

    }
    
    public override Render(elapsedTime: number, timeStep: number): void 
    {

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurrWriteBuffer.GetFramebufferId().val);

        // Firstly, we downsample the source texture 'BloomControls.nMipMap' times.
        this.RenderDownSamples();

        // Secondly, we upsample and blur the texture until it's back to the original dimensions.
        this.RenderUpSamples();

        // Lastly we render to our render target, reading from our blurrWritebuffer.
        //
        this.renderer.SetRenderTarget(this.writeTarget);
        const readBuffer = this.blurrWriteBuffer;

        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);

        if(readBuffer) 
        {   
            const texInfo = readBuffer.framebufferInfo.targetTexture.GetTextureInfo();
            this.gl.bindTexture(texInfo.dimension, this.mipChain[0].GetId().val);
            this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "tex"), 0);
        }

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public override Resize(width: number, height: number): void 
    {
        this.writeTarget.viewport = {width: width, height: height};

        this.writeTarget.Destroy();
        this.blurrWriteBuffer.Destroy();

        for(const mip of this.mipChain) 
        {
            mip.Destroy();
        }

        this.mipChain = [];


        const writeTextureInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            nChannels: this.gl.RGBA,
            width: width,
            height: height,
            format: this.gl.RGBA32F,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo:
            {
                dimension: this.gl.TEXTURE_2D,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE,
            }
        };

        const writeBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: new RawTexture2D(writeTextureInfo),
            attachmentUnit: 0,
            renderBufferCreateInfo: null
        };
        
        const targetInfo : RenderTargetCreateInfo = 
        {
            viewport: {width: width, height: height},
            clearColor: [0.1, 0.1, 0.1, 1.0],
            depthTest: false,
            depthFunc: this.gl.LEQUAL,
            blending: true,
            blendFunc: this.gl.ONE
        };

        this.writeTarget.Recreate(writeBufferInfo, targetInfo);

        
        this.screenQuad = new Primitives.Square(rawVert, textureFrag);


        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "tex"), 0);
        this.gl.useProgram(null);



        var mipSize : glm.vec2 = glm.vec2.fromValues(this.gl.canvas.width, this.gl.canvas.height);
        var iMipSize : glm.vec2 = glm.vec2.fromValues(Math.floor(this.gl.canvas.width), Math.floor(this.gl.canvas.height));

        for(let i = 0; i < this.bloomInfo.levels; i++) 
        {   
            mipSize = glm.vec2.scale(glm.vec2.create(), mipSize, 0.5);
            iMipSize = glm.vec2.scale(glm.vec2.create(), iMipSize, 0.5);

            var mipInfo : RawTextureCreateInfo = 
            {
                dimension: this.gl.TEXTURE_2D,
                nChannels: this.gl.RGBA,
                width: mipSize[0],
                height: mipSize[1],
                format: this.gl.RGBA32F,
                type: this.gl.FLOAT,
                data: null,
                samplerInfo:
                {
                    dimension: this.gl.TEXTURE_2D,
                    minFilter: this.gl.LINEAR,
                    magFilter: this.gl.LINEAR,
                    sWrap: this.gl.CLAMP_TO_EDGE,
                    tWrap: this.gl.CLAMP_TO_EDGE,
                }
            };

            this.mipChain.push(new RawTexture2D(mipInfo));
        }

        
        const blurrWriteBufferInfo : FramebufferCreateInfo = 
        {
            targetTexture: this.mipChain[0],
            attachmentUnit: 0,
            renderBufferCreateInfo: null
        };

        this.blurrWriteBuffer = new Framebuffer(blurrWriteBufferInfo);


        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurrWriteBuffer.GetFramebufferId().val);
        var attachments : number[] = [ this.gl.COLOR_ATTACHMENT0 ];
        this.gl.drawBuffers(attachments);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }



    private RenderDownSamples() : void 
    {

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        const readBuffer = this.writeTarget.GetReadBuffer();

        this.gl.useProgram(this.downsampleShader.GetId().val);
        if(readBuffer) 
        {
            this.gl.bindTexture(this.gl.TEXTURE_2D, readBuffer.framebufferInfo.targetTexture.GetId().val);
        }


        for(let i = 0; i < this.mipChain.length; i ++) 
        { 
            const bloomMip = this.mipChain[i];
            var mipInfo = bloomMip.GetTextureInfo();   
            
            this.gl.viewport(0, 0, mipInfo.width, mipInfo.height);
            // this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            // this.gl.clearColor(0.1, 0.1, 0.1, 1.0);

            this.blurrWriteBuffer.SetColorAttachment(bloomMip, 0);
            
            this.gl.uniform2fv(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "srcResolution"), glm.vec2.fromValues(mipInfo.width, mipInfo.height));

            this.renderer.Draw(this.screenQuad.GetVertexArray(), this.upsampleShader, 6);
            
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this.gl.bindTexture(this.gl.TEXTURE_2D, bloomMip.GetId().val);
        }

        this.gl.useProgram(null);
    }

    private RenderUpSamples() : void 
    {

        this.gl.useProgram(this.upsampleShader.GetId().val);
        this.gl.uniform1f(this.gl.getUniformLocation(this.upsampleShader.GetId().val, "filterRadius"), this.bloomInfo.filterRadius);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
        this.gl.blendEquation(this.gl.FUNC_ADD);
        

        for(let i = this.mipChain.length - 1; i > 0; i--) 
        {
            const bloomMip = this.mipChain[i];
            const nextBloomMip = this.mipChain[i - 1]; // Remember we're going backwards.
  
            this.gl.viewport(0, 0, nextBloomMip.GetTextureInfo().width, nextBloomMip.GetTextureInfo().height);
            // this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            // this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
            
            this.gl.bindTexture(bloomMip.GetTextureInfo().dimension, bloomMip.GetId().val);

            this.blurrWriteBuffer.SetColorAttachment(nextBloomMip, 0);

            this.renderer.Draw(this.screenQuad.GetVertexArray(), this.upsampleShader, 6);
        }

        this.gl.disable(this.gl.BLEND);
        this.gl.useProgram(null);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    public override GetWriteTarget(): RenderTarget 
    {
        return this.writeTarget;    
    }

    private blurrWriteBuffer !: Framebuffer;
    private mipChain : Array<RawTexture2D> = Array<RawTexture2D>();
    private upsampleShader : Shader = new Shader(rawVert, upSamplingFrag);
    private downsampleShader : Shader = new Shader(rawVert, downSamplingFrag);

    private readTarget: RenderTarget;
    private writeTarget : RenderTarget;
    private bloomInfo : BloomPassCreateInfo;

}