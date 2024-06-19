#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vUV;

uniform sampler2D tex;

void main() 
{
    FragColor = texture(tex, vUV).rgb;
}