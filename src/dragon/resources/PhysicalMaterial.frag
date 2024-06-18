#version 300 es
precision highp float;

struct Camera 
{
    vec3 Position;
};

struct Light 
{
    vec3 Position;
    vec3 Color;
    float Intensity;
};

struct RawMaterial 
{
    vec3 Albedo;
    float Metallic;
    float Roughness;
    float AO;
    float Emission;
};
struct Material 
{
    sampler2D Albedo;
    sampler2D Metallic;
    sampler2D Roughness;
    sampler2D AO;
};

out vec4 FragColor;

in vec3 model_pos;
in vec3 vNormal;
in vec2 vUV;

uniform Camera camera;
uniform Material material;
uniform RawMaterial rawMaterial; 
uniform bool IsUsingTextures;
uniform Light light1;

const float PI = 3.14159265359;
// ----------------------------------------------------------------------------
float DistributionGGX(vec3 N, vec3 H, float roughness)
{
    float a = roughness*roughness;
    float a2 = a*a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH*NdotH;

    float nom   = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;

    return nom / denom;
}
// ----------------------------------------------------------------------------
float GeometrySchlickGGX(float NdotV, float roughness)
{
    float r = (roughness + 1.0);
    float k = (r*r) / 8.0;

    float nom   = NdotV;
    float denom = NdotV * (1.0 - k) + k;

    return nom / denom;
}
// ----------------------------------------------------------------------------
float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness)
{
    float NdotV = max(dot(N, V), 0.0);
    float NdotL = max(dot(N, L), 0.0);
    float ggx2 = GeometrySchlickGGX(NdotV, roughness);
    float ggx1 = GeometrySchlickGGX(NdotL, roughness);

    return ggx1 * ggx2;
}
// ----------------------------------------------------------------------------
vec3 FresnelSchlick(float cosTheta, vec3 F0)
{
    return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}
// ----------------------------------------------------------------------------

void main() {

    vec3 albedoMat;
    float metallicMat;
    float roughnessMat;
    float aoMat;
    float emissionMat;

    if(IsUsingTextures) 
    {
        albedoMat = texture(material.Albedo, vUV).rgb;
        metallicMat = texture(material.Metallic, vUV).r;
        roughnessMat = texture(material.Roughness, vUV).r;
        aoMat = texture(material.AO, vUV).r;
    } else 
    {
        albedoMat = rawMaterial.Albedo;
        metallicMat = rawMaterial.Metallic;
        roughnessMat = rawMaterial.Roughness;
        aoMat = rawMaterial.AO;
        emissionMat = rawMaterial.Emission;
    }

    vec3 N = normalize(vNormal);
    vec3 V = normalize(camera.Position - model_pos);

    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, albedoMat, metallicMat);
	           
    // reflectance equation
    vec3 Lo = vec3(0.0);
    // calculate per-light radiance
    vec3 L = normalize(light1.Position - model_pos);
    vec3 H = normalize(V + L);
    float D = length(light1.Position - model_pos);
    float attenuation = 1.0 / (D * D);
    vec3 radiance = light1.Color * attenuation * light1.Intensity;        
    
    // cook-torrance brdf
    float NDF = DistributionGGX(N, H, roughnessMat);        
    float G   = GeometrySmith(N, V, L, roughnessMat);      
    vec3 F    = FresnelSchlick(max(dot(H, V), 0.0), F0);       
    
    vec3 kS = F;
    vec3 kD = vec3(1.0) - kS;
    kD *= 1.0 - metallicMat;	  
    
    vec3 numerator    = NDF * G * F;
    float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001;
    vec3 specular     = numerator / denominator;  
        
    // add to outgoing radiance Lo
    float NdotL = max(dot(N, L), 0.0);                
    Lo += (kD * albedoMat / PI + specular) * radiance * NdotL; 
  
    vec3 ambient = vec3(0.03) * albedoMat * aoMat;
    vec3 color = ambient + Lo + emissionMat; 
   
    FragColor = vec4(color, 1.0);
}