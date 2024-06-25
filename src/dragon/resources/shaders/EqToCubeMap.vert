#version 300 es

in vec3 aPos;
out vec3 vLocalPos;
uniform mat4 projection;
uniform mat4 view;

void main() 
{
    vLocalPos = aPos;
    gl_Position = projection * view * vec4(aPos, 1.0);
}