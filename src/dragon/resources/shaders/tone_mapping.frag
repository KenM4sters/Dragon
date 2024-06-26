#version 300 es
precision highp float;


out vec4 FragColor;
in vec2 vUV;

uniform sampler2D hdrTex;
uniform float exposure;

vec3 ACESFilm(vec3 x) 
{
    const float A = 2.51;
    const float B = 0.03;
    const float C = 2.43;
    const float D = 0.59;
    const float E = 0.14;
    return clamp((x*(A*x+B))/(x*(C*x+D)+E), 0.0, 1.0);
}


void main() {

    vec3 finalHDR = texture(hdrTex, vUV).rgb * exposure;

    vec3 tone_mapped = ACESFilm(finalHDR);

    FragColor = vec4(tone_mapped, 1.0);
}