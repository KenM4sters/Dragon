#version 300 es
precision highp float;

struct Material {
    vec3 Albedo;
    float Metallic;
    float Roughness;
    float AO;
    float Emission;
};

struct Light {
    vec3 Position;
    vec3 AmbientColor;
    float Intensity;
};

out vec4 FragColor;
in vec2 vUV;
in vec3 vModelPosition;
in vec3 vNormal;

uniform vec4 uColor;
uniform Light uLight;
uniform Material uMaterial;
uniform vec3 uCameraPosition;

uniform samplerCube uConvolutedMap;
uniform samplerCube uPrefilteredMap;
uniform sampler2D uBRDF;

const float PI = 3.14159265359;
float DistributionGGX(vec3 N, vec3 H, float roughness);
float GeometrySchlickGGX(float NdotV, float roughness);
float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness);
vec3 FresnelSchlick(float cosTheta, vec3 F0);
vec3 FresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness);

void main() 
{
    // Setup
    //================================================================
    vec3 V = normalize(uCameraPosition - vModelPosition);
    vec3 N = normalize(vNormal);  
    vec3 R = reflect(-V, N);  

    vec3 L = normalize(uLight.Position - vModelPosition);
    vec3 H = normalize(V + L);

    float distanceToLight = length(uLight.Position - vModelPosition);
    float attentuation = distanceToLight / (distanceToLight * distanceToLight);
    vec3 radiance = uLight.AmbientColor * attentuation * uLight.Intensity;
    //================================================================

    // BRDF
    //================================================================
    vec3 F0 = vec3(0.04);
    F0 = mix(F0, uMaterial.Albedo, uMaterial.Metallic);
    vec3 F = FresnelSchlick(max(dot(H, V), 0.0), F0);

    float NDF = DistributionGGX(N, H, uMaterial.Roughness);
    float G = GeometrySmith(N, H, L, uMaterial.Roughness);

    vec3 numerator = NDF * G * F;
    float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, V), 0.0) + 0.0001;
    vec3 specular = numerator / denominator;  

    vec3 Ks = F;
    vec3 Kd = vec3(1.0) - F;
    Kd *= 1.0 - uMaterial.Metallic;

    float NdotL = max(dot(N, L), 0.0);        
    vec3 Lo = (Kd * uMaterial.Albedo / PI + specular) * radiance * NdotL;

    vec3 FR = FresnelSchlickRoughness(max(dot(N, V), 0.0), F0, uMaterial.Roughness);

    vec3 kS = FR;
    vec3 kD = 1.0 - kS;
    kD *= 1.0 - uMaterial.Metallic;	  
    
    vec3 irradiance = texture(uConvolutedMap, N).rgb;
    vec3 diffuse    = irradiance * uMaterial.Albedo;
    
    const float MAX_REFLECTION_LOD = 4.0;
    vec3 prefilteredColor = textureLod(uPrefilteredMap, R, uMaterial.Roughness * MAX_REFLECTION_LOD).rgb;   
    vec2 envBRDF  = texture(uBRDF, vec2(max(dot(N, V), 0.0), uMaterial.Roughness)).rg;
    vec3 final_specular = prefilteredColor * (FR * envBRDF.x + envBRDF.y);
    
    vec3 ambient = (kD * diffuse + final_specular) * uMaterial.AO; 
    vec3 color = ambient + Lo;

    FragColor = vec4(prefilteredColor, 1.0);

}

vec3 FresnelSchlick(float cosTheta, vec3 F0)
{
    return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}  

vec3 FresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness)
{
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}  

float DistributionGGX(vec3 N, vec3 H, float roughness)
{
    float a      = roughness*roughness;
    float a2     = a*a;
    float NdotH  = max(dot(N, H), 0.0);
    float NdotH2 = NdotH*NdotH;
	
    float num   = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;
	
    return num / denom;
}

float GeometrySchlickGGX(float NdotV, float roughness)
{
    float r = (roughness + 1.0);
    float k = (r*r) / 8.0;

    float num   = NdotV;
    float denom = NdotV * (1.0 - k) + k;
	
    return num / denom;
}
float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness)
{
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    float ggx2  = GeometrySchlickGGX(NdotV, roughness);
    float ggx1  = GeometrySchlickGGX(NdotL, roughness);
	
    return ggx1 * ggx2;
}