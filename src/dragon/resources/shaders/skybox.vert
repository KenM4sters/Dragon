#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

uniform mat4 projection;
uniform mat4 view;

out vec3 vLocalPos;
out vec3 vNormal;
out vec2 vUV;

void main()
{
    vLocalPos = aPosition;
    vNormal = aNormal;
    vUV = aUV;

    mat4 rotView = mat4(mat3(view)); // remove translation from the view matrix
    vec4 clipPos = projection * rotView * vec4(vLocalPos, 1.0);

    gl_Position = clipPos.xyww;
}