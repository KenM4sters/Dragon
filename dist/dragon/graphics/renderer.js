import { WebGL } from "../webgl";
export class Renderer {
    constructor() {
        Object.defineProperty(this, "gl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.gl = WebGL.GetInstance().gl;
        this.gl.enable(this.gl.DEPTH_TEST);
    }
    RenderCube(vertexArray, shader) {
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);
    }
    RenderQuad(vertexArray, shader) {
        this.gl.bindVertexArray(vertexArray.GetId().val);
        this.gl.useProgram(shader.GetId().val);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.gl.bindVertexArray(null);
        this.gl.useProgram(null);
    }
    BeginStage(stage) {
        stage.Begin();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
    }
    EndStage(stage) {
        stage.End();
        return stage.GetTargetTexture();
    }
    OnResize() {
    }
}
;
