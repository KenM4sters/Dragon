#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vNormal;

void main() 
{
    FragColor = vec4(vNormal, 1.0);
}