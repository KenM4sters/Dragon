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

vec3 Uncharted2(vec3 color) 
{
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;

  float W = 11.2;
  vec3 numerator = ((color * (A * color + C * B) + D * E) / (color * (A * color + B) + D * F)) - E / F;
  float whiteScale = ((W * (A * W + C * B) + D * E) / (W * (A * W + B) + D * F)) - E / F;

  return numerator / whiteScale;
}

vec3 Reinhard(vec3 color) 
{
  return color / (color + vec3(50000));
}


void main() 
{
    vec3 finalHDR = texture(hdrTex, vUV).rgb * exposure;

    vec3 tone_mapped = Uncharted2(finalHDR);

    FragColor = vec4(finalHDR, 1.0);
}