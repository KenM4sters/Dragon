import * as glm from "gl-matrix";
import { BoxGeometry, Mesh, Primitives, RawCubeTexture, RawTexture2D, RawTextureCreateInfo, Scene, Shader, SkyboxMaterial, Texture } from "../export";
import { HDRImage, HDRImageCreateInfo } from "../graphics/image";
import { WebGL } from "../webgl";


import eqToCubeVertSrc from "../resources/shaders/eq_to_cube.vert?raw";
import eqToCubeFragSrc from "../resources/shaders/eq_to_cube.frag?raw";

import convoluteVertSrc from "../resources/shaders/convolute.vert?raw";
import convoluteFragSrc from "../resources/shaders/convolute.frag?raw";

import prefilterVertSrc from "../resources/shaders/prefilter.vert?raw";
import prefilterFragSrc from "../resources/shaders/prefilter.frag?raw";

import brdfVertSrc from "../resources/shaders/brdf.vert?raw";
import brdfFragSrc from "../resources/shaders/brdf.frag?raw";



export class Skybox 
{
    constructor(scene : Scene, imageInfo : HDRImageCreateInfo) 
    {   
        this.scene = scene;
        this.gl = WebGL.GetInstance().gl;

        const cubeMapInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_CUBE_MAP,
            format: this.gl.RGBA32F,
            width: 512,
            height: 512,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_CUBE_MAP,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE,
                rWrap: this.gl.CLAMP_TO_EDGE,
            }
        };

        const convoluteInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_CUBE_MAP,
            format: this.gl.RGBA32F,
            width: 64,
            height: 64,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_CUBE_MAP,      
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE,
                rWrap: this.gl.CLAMP_TO_EDGE,
            }
        };

        const prefilterInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_CUBE_MAP,
            format: this.gl.RGBA32F,
            width: 256,
            height: 256,
            nChannels: this.gl.RGBA,
            type: this.gl.FLOAT,
            data: null,
            samplerInfo: 
            {      
                dimension: this.gl.TEXTURE_CUBE_MAP,      
                minFilter: this.gl.LINEAR_MIPMAP_LINEAR,
                magFilter: this.gl.LINEAR,
                sWrap: this.gl.CLAMP_TO_EDGE,
                tWrap: this.gl.CLAMP_TO_EDGE,
                rWrap: this.gl.CLAMP_TO_EDGE,
            }
        };

        const brdfInfo : RawTextureCreateInfo = 
        {
            dimension: this.gl.TEXTURE_2D,
            format: this.gl.RG16F,
            width: 512,
            height: 512,
            nChannels: this.gl.RG,
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

        this.cubeMap = new RawCubeTexture(cubeMapInfo);
        this.convolutedMap = new RawCubeTexture(convoluteInfo);
        this.prefilteredMap = new RawCubeTexture(prefilterInfo);
        this.brdf = new RawTexture2D(brdfInfo);

        this.hdrImage = new HDRImage(imageInfo);
        
        const mat = new SkyboxMaterial(this.cubeMap);
        const geo = new BoxGeometry();
        this.cube = new Mesh(geo, mat);

        this.GenerateIrradianceMaps();
        this.GenreateBRDF();
    }       

    private GenerateIrradianceMaps() : void 
    {        
        let captureProjection = glm.mat4.perspective(glm.mat4.create(), glm.glMatrix.toRadian(90.0), 1, 0.1, 10);
        let captureViews = [
            // Positive X
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues( 1.0,  0.0,  0.0), glm.vec3.fromValues(0.0, -1.0,  0.0)),
            // Negative X
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues(-1.0,  0.0,  0.0), glm.vec3.fromValues(0.0, -1.0,  0.0)),
            // Positive Y
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues( 0.0,  1.0,  0.0), glm.vec3.fromValues(0.0,  0.0,  1.0)),
            // Negative Y
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues( 0.0, -1.0,  0.0), glm.vec3.fromValues(0.0,  0.0, -1.0)),
            // Positive Z
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues( 0.0,  0.0,  1.0), glm.vec3.fromValues(0.0, -1.0,  0.0)),
            // Negative Z
            glm.mat4.lookAt(glm.mat4.create(), glm.vec3.fromValues(0.0, 0.0, 0.0), glm.vec3.fromValues( 0.0,  0.0, -1.0), glm.vec3.fromValues(0.0, -1.0,  0.0)),
        ];


        // Cube map
        //
        const target = this.scene.renderTarget;
        let texInfo = this.cubeMap.GetTextureInfo();
        target.viewport = {width: texInfo.width, height: texInfo.height};
        this.scene.renderer.SetRenderTarget(this.scene.renderTarget);

        const geo = this.cube.geometry as BoxGeometry;

        this.gl.useProgram(this.eqToCubShader.GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.hdrImage.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.eqToCubShader.GetId().val, "hdrTex"), 0);

        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.eqToCubShader.GetId().val, "projection"), false, captureProjection);
        
        for(let i = 0; i < 6; i++) 
        {            
            texInfo.dimension = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i;

            if(target.writeBuffer) 
            {                
                target.writeBuffer.SetColorAttachment(this.cubeMap, 0);

                if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) 
                {
                    console.error('Framebuffer not complete');
                }
            }
            
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.eqToCubShader.GetId().val, "view"), false, captureViews[i]);

            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

            this.scene.renderer.Draw(geo.GetVertexArray(), this.eqToCubShader, 36);
        } 

        target.writeBuffer?.SetColorAttachment(this.scene.writeTexture, 0);
        target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};


        // Convolution
        //
        texInfo = this.convolutedMap.GetTextureInfo();
        target.viewport = {width: texInfo.width, height: texInfo.height};
        this.scene.renderer.SetRenderTarget(this.scene.renderTarget);

        this.gl.useProgram(this.convoluteShader.GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubeMap.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.convoluteShader.GetId().val, "environmetMap"), 0);

        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.convoluteShader.GetId().val, "projection"), false, captureProjection);

        for(let i = 0; i < 6; i++) 
        {            
            texInfo.dimension = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i;

            if(target.writeBuffer) 
            {                
                target.writeBuffer.SetColorAttachment(this.convolutedMap, 0);

                if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) 
                {
                    console.error('Framebuffer not complete');
                }
            }
            
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.convoluteShader.GetId().val, "view"), false, captureViews[i]);

            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

            this.scene.renderer.Draw(geo.GetVertexArray(), this.convoluteShader, 36);
        } 

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
        target.writeBuffer?.SetColorAttachment(this.scene.writeTexture, 0);
        target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};


        // Prefilter
        //
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.prefilteredMap.GetId().val);
        this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);

        this.gl.useProgram(this.prefilterShader.GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.cubeMap.GetId().val);
        this.gl.uniform1i(this.gl.getUniformLocation(this.prefilterShader.GetId().val, "environmetMap"), 0);

        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.prefilterShader.GetId().val, "projection"), false, captureProjection);
        let maxMipLevels = 5;

        if(target.writeBuffer) 
        {            
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, target.writeBuffer.GetFramebufferId().val);
            for (let mip = 0; mip < maxMipLevels; mip++)
            {
                // reisze framebuffer according to mip-level size.
                let mipWidth  = (256 * Math.pow(0.5, mip));
                let mipHeight = (256 * Math.pow(0.5, mip));

                target.viewport = {width: mipWidth, height: mipHeight};
                this.gl.viewport(0, 0, mipWidth, mipHeight);

                let roughness = mip / (maxMipLevels - 1);
                this.gl.uniform1f(this.gl.getUniformLocation(this.prefilterShader.GetId().val, "roughness"), roughness);

                for (let i = 0; i < 6; i++)
                {
                    texInfo.dimension = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i;

                    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, 
                        texInfo.dimension, 
                        this.prefilteredMap.GetId().val, mip); 
            
                    target.writeBuffer.Resize(mipWidth, mipHeight);

                    if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) 
                    {
                        console.error('Framebuffer not complete');
                    }
                    
                    this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.prefilterShader.GetId().val, "view"), false, captureViews[i]);

                    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

                    this.scene.renderer.Draw(geo.GetVertexArray(), this.prefilterShader, 36);
                }
            }
        }
        // Cleanup.
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
        target.writeBuffer?.SetColorAttachment(this.scene.writeTexture, 0);
        target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};

    }

    private GenreateBRDF() : void 
    {
        const target = this.scene.renderTarget;
        let texInfo = this.brdf.GetTextureInfo();
        target.viewport = {width: texInfo.width, height: texInfo.height};
        this.scene.renderer.SetRenderTarget(this.scene.renderTarget);

        const shader = this.brdfQuad.GetShader();

        this.gl.useProgram(shader.GetId().val);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.hdrImage.GetId().val);

        if(target.writeBuffer) 
        {
            target.writeBuffer.SetColorAttachment(this.brdf, 0);

            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    
            this.scene.renderer.Draw(this.brdfQuad.GetVertexArray(), shader, 6);
    
            // Cleanup.
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            target.writeBuffer.SetColorAttachment(this.scene.writeTexture, 0);
            target.viewport = {width: this.gl.canvas.width, height: this.gl.canvas.height};
        }
        
    }

    public GetHDRImage() : HDRImage { return this.hdrImage; }
    public GetCube() : Mesh { return this.cube; }
    public GetCubeMap() : RawCubeTexture { return this.cubeMap; }
    public GetConvolutedMap() : RawCubeTexture { return this.convolutedMap; }
    public GetPrefilteredMap() : RawCubeTexture { return this.prefilteredMap; }
    public GetBRDF() : RawTexture2D { return this.brdf; }

    private cube : Mesh;

    private hdrImage : HDRImage;
    private cubeMap : RawCubeTexture;
    private prefilteredMap : RawCubeTexture;
    private convolutedMap : RawCubeTexture;
    private brdf : RawTexture2D;
    private eqToCubShader : Shader = new Shader(eqToCubeVertSrc, eqToCubeFragSrc);
    private convoluteShader : Shader = new Shader(convoluteVertSrc, convoluteFragSrc);
    private prefilterShader : Shader = new Shader(prefilterVertSrc, prefilterFragSrc);
    private brdfQuad : Primitives.Square = new Primitives.Square(brdfVertSrc, brdfFragSrc);
    private scene : Scene;
    private gl : WebGL2RenderingContext;
}   