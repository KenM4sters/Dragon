#version 300 es
precision highp float;

in vec2 vUV;
out vec4 FragColor;

uniform sampler2D uToneMappedTexture;
uniform vec2 uResolution;

vec3 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution) {
    vec2 inverse_resolution = 1.0 / resolution;
    vec3 rgbNW = texture(tex, (fragCoord + vec2(-1.0, -1.0)) * inverse_resolution).rgb;
    vec3 rgbNE = texture(tex, (fragCoord + vec2(1.0, -1.0)) * inverse_resolution).rgb;
    vec3 rgbSW = texture(tex, (fragCoord + vec2(-1.0, 1.0)) * inverse_resolution).rgb;
    vec3 rgbSE = texture(tex, (fragCoord + vec2(1.0, 1.0)) * inverse_resolution).rgb;
    vec3 rgbM  = texture(tex, fragCoord * inverse_resolution).rgb;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));
    vec2 dir = vec2(-((lumaNW + lumaNE) - (lumaSW + lumaSE)), (lumaNW + lumaSW) - (lumaNE + lumaSE));
    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * 0.5), 1.0 / 128.0);
    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(8.0, 8.0), max(vec2(-8.0, -8.0), dir * rcpDirMin)) * inverse_resolution;
    vec3 rgbA = 0.5 * (texture(tex, fragCoord * inverse_resolution + dir * (1.0 / 3.0 - 0.5)).rgb +
                       texture(tex, fragCoord * inverse_resolution + dir * (2.0 / 3.0 - 0.5)).rgb);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (texture(tex, fragCoord * inverse_resolution + dir * -0.5).rgb +
                                     texture(tex, fragCoord * inverse_resolution + dir * 0.5).rgb);
    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax)) {
        return rgbA;
    } else {
        return rgbB;
    }
}

void main() 
{
    FragColor = vec4(fxaa(uToneMappedTexture, vUV * uResolution, uResolution), 1.0);
    // FragColor = vec4(texture(uToneMappedTexture, vUV).rgb, 1.0);
}
