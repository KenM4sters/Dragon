#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 vUV;

uniform sampler2D uToneMappedTexture;

void main() 
{
    FragColor = texture(uToneMappedTexture, vUV);
}