#version 300 es
precision highp float;


out vec4 FragColor;
in vec2 vUV;

uniform sampler2D sceneTexture;
uniform sampler2D blurredTexture;
uniform float bloomStrength;

vec3 bloom_none()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    return hdrColor;
}

vec3 bloom_old()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    vec3 bloomColor = texture(blurredTexture, vUV).rgb;
    return hdrColor + bloomColor; // additive blending
}

vec3 bloom_new()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    vec3 bloomColor = texture(blurredTexture, vUV).rgb;
    return mix(hdrColor, bloomColor, bloomStrength); // linear interpolation
}

void main() {

    vec3 bloomed = bloom_new();

    FragColor = vec4(bloomed, 1.0);
}