#version 300 es

in vec3 aPositon;

uniform mat4 projection;
uniform mat4 view;
uniform mat4 model;

void main() 
{
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}