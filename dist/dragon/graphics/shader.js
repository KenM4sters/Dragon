import { WebGL } from "../webgl";
export class Shader {
    constructor(vScriptId, fScriptId) {
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.Compile(vScriptId, fScriptId);
    }
    // Getters 
    GetId() { return this.ID; }
    Compile(vSource, fSource) {
        if (!vSource || !fSource)
            throw new Error("Failed to get Shader source code from scriptId!");
        const gl = WebGL.GetInstance().gl;
        // Secondly, we need to create glPrograms for each shader.
        const vShader = gl.createShader(gl.VERTEX_SHADER);
        if (vShader == null) {
            throw new Error("Failed to create vertex shader!");
        }
        ;
        gl.shaderSource(vShader, vSource);
        gl.compileShader(vShader);
        if (gl.getShaderInfoLog(vShader)) {
            console.log(gl.getShaderInfoLog(vShader));
        }
        ;
        const fShader = gl.createShader(gl.FRAGMENT_SHADER);
        if (fShader == null) {
            throw new Error("Failed to create fragment shader!");
        }
        ;
        gl.shaderSource(fShader, fSource);
        gl.compileShader(fShader);
        if (gl.getShaderInfoLog(fShader)) {
            console.log(gl.getShaderInfoLog(fShader));
        }
        ;
        // Thirdly, we need to link the 2 shaders into a single shader program that we can use/release
        // as and when we want to use the two shaders.
        const id = gl.createProgram();
        if (!id) {
            throw new Error("Failed to create shader program!");
        }
        ;
        this.ID = { val: id };
        gl.attachShader(this.ID.val, vShader);
        gl.attachShader(this.ID.val, fShader);
        gl.linkProgram(this.ID.val);
        if (!gl.getProgramParameter(this.ID.val, gl.LINK_STATUS)) {
            console.warn("Could not initialise shaders");
            console.log(gl.getProgramInfoLog(this.ID.val));
        }
        gl.useProgram(this.ID.val);
    }
}
;
