import * as glm from "gl-matrix";
import { RawTexture2D, RawTextureCreateInfo } from "../texture";
import { SpecialFXPass, SpecialFXPassTypes } from "./pass";
import { Primitives } from "../../primitives";
import { Shader } from "../shader";
import { RenderTarget, RenderTargetCreateInfo } from "../renderer/target";
import { SpecialFX } from "./specialFX";


import screenQuadVert from "../../resources/shaders/screen_quad.vert?raw";
import bloomFrag from "../../resources/shaders/bloom.frag?raw"; 
import upSamplingFrag from "../../resources/shaders/up_sampling.frag?raw";
import downSamplingFrag from "../../resources/shaders/down_sampling.frag?raw";



export interface BloomPassCreateInfo 
{
    filterRadius : number;
    levels : number;
    strength : number;
};

export class BloomPass extends SpecialFXPass 
{
    constructor(specialFx : SpecialFX, createInfo : BloomPassCreateInfo)  
    {
        super(specialFx.renderer, SpecialFXPassTypes.ToneMapping, []);
        this.specialFx = specialFx;
        this.bloomInfo = createInfo; 

        this.screenQuad = new Primitives.Square(screenQuadVert, bloomFrag);

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

        
        // Prepping uniform locations for the source HDR texture from the Scene output.
        //
        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "sceneTexture"), 0);
        this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "blurredTexture"), 1);
        this.gl.useProgram(null);

        this.gl.useProgram(this.upsampleShader.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.upsampleShader.GetId().val, "srcTexture"), 0);
        this.gl.useProgram(null);
        
        this.gl.useProgram(this.downsampleShader.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.downsampleShader.GetId().val, "srcTexture"), 0);
        this.gl.useProgram(null);
    }

    public Render(read: RawTexture2D, write: RawTexture2D): void 
    {

        const target = this.specialFx.target;
        
        this.renderer.SetRenderTarget(target);

        // Blur the read texture, writing to the write texture.
        //
        this.Blur(target);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        
        // Combining the blurred and scene textures and writing to the write texture.
        //
        target.writeBuffer?.SetColorAttachment(write, 0);
        this.gl.useProgram(this.screenQuad.GetShader().GetId().val);

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.specialFx.scene.GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.mipChain[0].GetId().val);

        this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val, "bloomStrength"), this.bloomInfo.strength);

        this.renderer.Draw(this.screenQuad.GetVertexArray(), this.screenQuad.GetShader(), 6);

        this.renderer.End();
    }

    public Resize(width: number, height: number): void 
    {
        
        var mipSize : glm.vec2 = glm.vec2.fromValues(width, height);

        for(let i = 0; i < this.mipChain.length; i++) 
        {   
            mipSize = glm.vec2.scale(glm.vec2.create(), mipSize, 0.5);
            
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

            this.mipChain[i].Resize(mipInfo);
        }
    }


    private Blur(target : RenderTarget) : void 
    {
        // Downsampling
        //
        const writeBuffer = target.writeBuffer;

        this.gl.useProgram(this.downsampleShader.GetId().val);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.specialFx.scene.GetId().val);
        
        for(let i = 0; i < this.mipChain.length; i++) 
        { 
            const bloomMip = this.mipChain[i];
            var mipInfo = bloomMip.GetTextureInfo();   
            
            this.gl.viewport(0, 0, mipInfo.width, mipInfo.height);
            
            writeBuffer?.SetColorAttachment(bloomMip, 0);
            
            this.gl.uniform2fv(this.gl.getUniformLocation(this.downsampleShader.GetId().val, "srcResolution"), glm.vec2.fromValues(mipInfo.width, mipInfo.height));
            
            this.renderer.Draw(this.screenQuad.GetVertexArray(), this.downsampleShader, 6);
            
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, bloomMip.GetId().val);
        }

        this.gl.useProgram(null);

        // Upsampling
        //
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
        this.gl.blendEquation(this.gl.FUNC_ADD);  
        this.gl.useProgram(this.upsampleShader.GetId().val);
        this.gl.uniform1f(this.gl.getUniformLocation(this.upsampleShader.GetId().val, "filterRadius"), this.bloomInfo.filterRadius);

        for(let i = this.mipChain.length - 1; i > 0; i--) 
        {
            const bloomMip = this.mipChain[i];
            const nextBloomMip = this.mipChain[i - 1]; // Remember we're going backwards.
  
            this.gl.viewport(0, 0, nextBloomMip.GetTextureInfo().width, nextBloomMip.GetTextureInfo().height);
            
            this.gl.bindTexture(bloomMip.GetTextureInfo().dimension, bloomMip.GetId().val);

            writeBuffer?.SetColorAttachment(nextBloomMip, 0);

            this.renderer.Draw(this.screenQuad.GetVertexArray(), this.upsampleShader, 6);
        }

        this.gl.disable(this.gl.BLEND);
        this.gl.useProgram(null);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    private specialFx : SpecialFX;
    private bloomInfo : BloomPassCreateInfo;

    private mipChain : Array<RawTexture2D> = Array<RawTexture2D>();
    private upsampleShader : Shader = new Shader(screenQuadVert, upSamplingFrag);
    private downsampleShader : Shader = new Shader(screenQuadVert, downSamplingFrag);
}