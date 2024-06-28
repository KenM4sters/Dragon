#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vWorldPos;

uniform mat4 projection;
uniform mat4 view;

void main()
{
    vWorldPos = aPosition;  
    gl_Position =  projection * view * vec4(vWorldPos, 1.0);
}