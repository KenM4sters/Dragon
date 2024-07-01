#version 300 es
precision highp float;

out vec4 FragColor;

in vec3 vLocalPos;
in vec3 vNormal;
in vec2 vUV;
  
uniform samplerCube environmentMap;
  
void main()
{
    vec3 envColor = texture(environmentMap, vLocalPos).rgb;

    // envColor -= (envColor / 10.0);
    FragColor = vec4(envColor, 1.0);
    // FragColor = vec4(0.1, 0.1, 0.1, 1.0);
}