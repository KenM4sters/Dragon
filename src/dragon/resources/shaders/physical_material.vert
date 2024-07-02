#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vModelPosition;
out vec3 vNormal;
out vec2 vUV;
out vec4 vLightSpaceFragPosition; 

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform mat4 lightSpaceProjection;
uniform mat4 lightSpaceView;

void main() {

    vModelPosition = vec3(model * vec4(aPosition, 1.0));
    vNormal = mat3(transpose(inverse(model))) * aNormal;  
    vUV = aUV;
    vLightSpaceFragPosition = lightSpaceProjection * lightSpaceView * model * vec4(aPosition, 1.0);

    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}