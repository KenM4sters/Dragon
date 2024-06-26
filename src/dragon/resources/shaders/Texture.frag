#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 vUV;

uniform sampler2D tex;

void main() 
{
    FragColor = texture(tex, vUV);
}