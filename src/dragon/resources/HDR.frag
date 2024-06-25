#version 300 es
precision highp float;


out vec4 FragColor;
in vec2 vUV;

uniform sampler2D sceneTex;
uniform sampler2D bloomTex;
uniform float exposure;
uniform float bloomStrength;

vec3 ACESFilm(vec3 x) {
    const float A = 2.51;
    const float B = 0.03;
    const float C = 2.43;
    const float D = 0.59;
    const float E = 0.14;
    return clamp((x*(A*x+B))/(x*(C*x+D)+E), 0.0, 1.0);
}

vec3 bloom_none()
{
    vec3 hdrColor = texture(sceneTex, vUV).rgb;
    return hdrColor;
}

vec3 bloom_old()
{
    vec3 hdrColor = texture(sceneTex, vUV).rgb;
    vec3 bloomColor = texture(bloomTex, vUV).rgb;
    return hdrColor + bloomColor; // additive blending
}

vec3 bloom_new()
{
    vec3 hdrColor = texture(sceneTex, vUV).rgb;
    vec3 bloomColor = texture(bloomTex, vUV).rgb;
    return mix(hdrColor, bloomColor, bloomStrength); // linear interpolation
}

void main() {

    vec3 finalHDR = bloom_new();

    finalHDR *= exposure;

    vec3 tone_mapped = ACESFilm(finalHDR);

    FragColor = vec4(tone_mapped, 1.0);
}