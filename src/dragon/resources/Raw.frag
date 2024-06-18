#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 vUV;

uniform sampler2D srcTexture;

void main() 
{
    FragColor = vec4(texture(srcTexture, vUV).rgb, 1.0);
}