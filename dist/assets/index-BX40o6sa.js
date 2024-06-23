var ee=Object.defineProperty;var te=(t,e,i)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var s=(t,e,i)=>te(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const ne=`<section class="home">
    <div class="landing">
        <div class="navbar">
            <!-- <h4 class="landing-title"> samuel brookman </h4> -->
            <ul class="navbar-items-container">
                <span class="navbar-item"><a href="https://github.com/KenM4sters/Silverback" target="_blank"> Github </a></span>
                <span class="navbar-item"><a href="https://discord.com/users/1156685102101839962" target="_blank"> Discord </a></span>
                <span class="navbar-item"><a href="mailto:sam.brookman414@hotmail.com"> Contact </a></span>
            </ul>
        </div>
    </div>
</section>`,ie=`<section class="links">
    <h1 class="links-header"> Links </h1>
    <div class="links-container">
        <div class="link-wrapper">
            <a class="about-link github" href="https://github.com/KenM4sters/Silverback" target="_blank"><i class="fa-brands fa-square-github fa-2xl"></i></a>
            <p1 class="about-link-caption"> Github </p1>
        </div>
        <div class="link-wrapper">
            <a class="about-link email" href="mailto:sam.brookman414@hotmail.com"><i class="fa-solid fa-envelope fa-2xl"></i></a>
            <p1 class="about-link-caption"> Email</p1>
        </div>
        <div class="link-wrapper">
            <a class="about-link discord" href="https://discord.com/users/1156685102101839962" target="_blank"><i class="fa-brands fa-discord fa-2xl"></i></a>
            <p1 class="about-link-caption"> Discord</p1>
        </div>
    </div>
</section>`,re=`<section class="projects">
    <!-- <div class="projects-title">
        <h5> Latest projects </h5>
    </div> -->
    <div class="projects-navbar">
        <span class="project-item mammoth2d"> Mammoth2D </span>
        <span class="project-item silverback"> Silverback </span>
        <span class="project-item dragon"> Dragon </span>
        <span class="project-item reaction"> Reaction </span>
    </div>
    <div class="projects-wrapper">
    </div>
</div>
</section>`,ae=`<section class="about">
    <div class="about-container">
        <h1 class="about-header"> about me </h1>
        <p class="about-para"> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Esse sit omnis beatae ipsam natus accusantium aspernatur corporis 
            fugit quo incidunt quam dolorum, possimus similique dolore, autem 
            dignissimos maiores, quas eos. 
        </p>
    </div>
</section>`,se=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a href="https://github.com/KenM4sters/Mammoth2D" target="_blank" style="font-weight: 500; color: rgb(186, 208, 211);">view here</a>
            </div>
            <div class="project-meta-data">
                <p1>STATUS</p1>
                <p4>ongoing</p4>
            </div>
            <div class="project-meta-data">
                <p1>FRAMEWORKS</p1>
                <p4>CMake, vulkan, glm</p4>
            </div>
        </div>
        <div class="project-description">
            <p1>
                Mammoth2D is a 2D game engine written in C++ using vulkan on the backend.  
            </p1>
            <p1>
                The main ambition with this project, besides learning vulkan of course, is to consolidate other smaller related libraries
                (ECS, Physics, Maths etc...) into one large project where I can practice developing
                in a larger, more sophisticated codebase. 
            </p1>
            <p1>
                This is currently my largest project and is under-going heavy refactoring as 
                I continue to develop and integrate my own ECS and Physics libraries. 
            </p1>
        </div>
    </div>
    <div class="project-image-container">
        <img class="project-image" src="mammoth2d.png" alt="2d platformer">
    </div>
</div>
`,oe=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a href="https://github.com/KenM4sters/Silverback" target="_blank" style="font-weight: 500; color: rgb(186, 208, 211);">view here</a>
            </div>
            <div class="project-meta-data">
                <p1>STATUS</p1>
                <p4>ongoing</p4>
            </div>
            <div class="project-meta-data">
                <p1>FRAMEWORKS</p1>
                <p4>CMake, glm</p4>
            </div>
        </div>
        <div class="project-description">
            <p1>
                Silverback is an ECS (Entity Component System) framework written in C++ 
                and designed to offer a comfortable balance between peformance and ease of use.  
            </p1>
            <p1>
                It makes extensive use of TMP (Template Meta Programming) to achieve an extremely
                intuitive API while offering excellent peformance throughout by maintaining efficient
                cache locality and a heavy bias towards data-driven-programming. 
            </p1>
            <p1>
                This is what I enjoy the most about programming.
            </p1>
        </div>
    </div>
    <div class="project-image-container">
        <img class="project-image" src="shmup.png" alt="2d platformer">
    </div>
</div>`,le=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>Typescript</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a href="https://github.com/KenM4sters/Dragon" target="_blank" style="font-weight: 500; color: rgb(186, 208, 211);">view here</a>
            </div>
            <div class="project-meta-data">
                <p1>STATUS</p1>
                <p4>ongoing</p4>
            </div>
            <div class="project-meta-data">
                <p1>FRAMEWORKS</p1>
                <p4>Node</p4>
            </div>
        </div>
        <div class="project-description">
            <p1>
                Dragon is a 3D PBR renderer written in Typescript using WebGL.  
            </p1>
            <p1>
                Even though I generally prefer working with systems languages like C and C++, 
                ultimately I want to bring video games to as many people as possible, and no platform
                is as widely suppport as the web.
            </p1>
            <p1>
                I'm by no means a web developer, but I do really enjoy developing with different
                technologies to the ones that I'm used to, and I've found that working with 
                Typescript and WebGL is (generally...) very pleasing. 
            </p1>
            <p1>
                I've also taken a look into WebGPU and plan on giving it more time once it's 
                supported on more browsers.
            </p1>
        </div>
    </div>
    <div class="project-image-container">
        <img class="project-image" src="dragon.png" alt="2d platformer">
    </div>
</div>`,ce=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a href="https://github.com/KenM4sters/Katana" target="_blank" style="font-weight: 500; color: rgb(186, 208, 211);">view here</a>
            </div>
            <div class="project-meta-data">
                <p1>STATUS</p1>
                <p4>ongoing</p4>
            </div>
            <div class="project-meta-data">
                <p1>FRAMEWORKS</p1>
                <p4>CMake, glm</p4>
            </div>
        </div>
        <div class="project-description">
            <p1>
                Reaction is a simple Physics library intended to be used for efficient 
                collision detection and resolution in 2D games. 
            </p1>
            <p1>
                This is my most recent project, and is currently undergoing lots of
                modifications as I learn more about the complex space of integrating 
                realistic collisions within video games at an acceptable frame rate.
            </p1>
            <p1>
                I have huge plans for this project as I hope to develop it to the point 
                where it can be used in, relatively simple, physics simulations that involve interactions
                such as stacking, cloth and rope physics.
            </p1>
        </div>
    </div>
    <div class="project-image-container">
        <img class="project-image" src="terrain.png" alt="2d platformer">
    </div>
</div>`;class U{constructor(e){s(this,"text");this.text=e}}class he{constructor(){s(this,"projects",new Map);let e=document.querySelector("#app"),i=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");i.innerHTML=ne,n.innerHTML=re,r.innerHTML=ae,a.innerHTML=ie,e.appendChild(i),e.appendChild(n),e.appendChild(a);const o=new U(se),l=new U(oe),c=new U(ce),f=new U(le);this.projects.set("mammoth2d",o),this.projects.set("silverback",l),this.projects.set("reaction",c),this.projects.set("dragon",f);let u=document.querySelector(".projects-wrapper");this.ViewProject(u,document.querySelector(".mammoth2d"),o),window.addEventListener("DOMContentLoaded",()=>{window.addEventListener("click",g=>{const d=g.target;d.classList.contains("mammoth2d")?this.ViewProject(u,d,o):d.classList.contains("silverback")?this.ViewProject(u,d,l):d.classList.contains("reaction")?this.ViewProject(u,d,c):d.classList.contains("dragon")&&this.ViewProject(u,d,f)})})}ViewProject(e,i,n){if(i.classList.add("selected-project"),i&&i.parentElement){const r=Array.from(i.parentElement.children).filter(a=>a!==i);for(let a of r)a.classList.remove("selected-project")}e.innerHTML=n.text}}class H{constructor(){}}class W extends H{constructor(i,n,r){super();s(this,"position");s(this,"color");s(this,"intensity");this.position=i,this.color=n,this.intensity=r}}var G=1e-6,y=typeof Float32Array<"u"?Float32Array:Array,de=Math.PI/180;function X(t){return t*de}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function ue(){var t=new y(9);return y!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function T(){var t=new y(16);return y!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function fe(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ge(t,e,i){var n=i[0],r=i[1],a=i[2],o,l,c,f,u,g,d,h,b,m,p,x;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(o=e[0],l=e[1],c=e[2],f=e[3],u=e[4],g=e[5],d=e[6],h=e[7],b=e[8],m=e[9],p=e[10],x=e[11],t[0]=o,t[1]=l,t[2]=c,t[3]=f,t[4]=u,t[5]=g,t[6]=d,t[7]=h,t[8]=b,t[9]=m,t[10]=p,t[11]=x,t[12]=o*n+u*r+b*a+e[12],t[13]=l*n+g*r+m*a+e[13],t[14]=c*n+d*r+p*a+e[14],t[15]=f*n+h*r+x*a+e[15]),t}function me(t,e,i){var n=i[0],r=i[1],a=i[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function pe(t,e){var i=e[0],n=e[1],r=e[2],a=e[3],o=i+i,l=n+n,c=r+r,f=i*o,u=n*o,g=n*l,d=r*o,h=r*l,b=r*c,m=a*o,p=a*l,x=a*c;return t[0]=1-g-b,t[1]=u+x,t[2]=d-p,t[3]=0,t[4]=u-x,t[5]=1-f-b,t[6]=h+m,t[7]=0,t[8]=d+p,t[9]=h-m,t[10]=1-f-g,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ve(t,e,i,n,r){var a=1/Math.tan(e/2),o;return t[0]=a/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0?(o=1/(n-r),t[10]=(r+n)*o,t[14]=2*r*n*o):(t[10]=-1,t[14]=-2*n),t}var be=ve;function we(t,e,i,n){var r,a,o,l,c,f,u,g,d,h,b=e[0],m=e[1],p=e[2],x=n[0],j=n[1],N=n[2],q=i[0],z=i[1],k=i[2];return Math.abs(b-q)<G&&Math.abs(m-z)<G&&Math.abs(p-k)<G?fe(t):(u=b-q,g=m-z,d=p-k,h=1/Math.hypot(u,g,d),u*=h,g*=h,d*=h,r=j*d-N*g,a=N*u-x*d,o=x*g-j*u,h=Math.hypot(r,a,o),h?(h=1/h,r*=h,a*=h,o*=h):(r=0,a=0,o=0),l=g*o-d*a,c=d*r-u*o,f=u*a-g*r,h=Math.hypot(l,c,f),h?(h=1/h,l*=h,c*=h,f*=h):(l=0,c=0,f=0),t[0]=r,t[1]=l,t[2]=u,t[3]=0,t[4]=a,t[5]=c,t[6]=g,t[7]=0,t[8]=o,t[9]=f,t[10]=d,t[11]=0,t[12]=-(r*b+a*m+o*p),t[13]=-(l*b+c*m+f*p),t[14]=-(u*b+g*m+d*p),t[15]=1,t)}function A(){var t=new y(3);return y!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function ye(t){var e=t[0],i=t[1],n=t[2];return Math.hypot(e,i,n)}function M(t,e,i){var n=new y(3);return n[0]=t,n[1]=e,n[2]=i,n}function Ee(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function P(t,e){var i=e[0],n=e[1],r=e[2],a=i*i+n*n+r*r;return a>0&&(a=1/Math.sqrt(a)),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t}function xe(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function L(t,e,i){var n=e[0],r=e[1],a=e[2],o=i[0],l=i[1],c=i[2];return t[0]=r*c-a*l,t[1]=a*o-n*c,t[2]=n*l-r*o,t}var Ae=ye;(function(){var t=A();return function(e,i,n,r,a,o){var l,c;for(i||(i=3),n||(n=0),r?c=Math.min(r*i+n,e.length):c=e.length,l=n;l<c;l+=i)t[0]=e[l],t[1]=e[l+1],t[2]=e[l+2],a(t,t,o),e[l]=t[0],e[l+1]=t[1],e[l+2]=t[2];return e}})();function Fe(){var t=new y(4);return y!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Me(t,e,i,n){var r=new y(4);return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r}function Se(t,e){var i=e[0],n=e[1],r=e[2],a=e[3],o=i*i+n*n+r*r+a*a;return o>0&&(o=1/Math.sqrt(o)),t[0]=i*o,t[1]=n*o,t[2]=r*o,t[3]=a*o,t}(function(){var t=Fe();return function(e,i,n,r,a,o){var l,c;for(i||(i=4),n||(n=0),r?c=Math.min(r*i+n,e.length):c=e.length,l=n;l<c;l+=i)t[0]=e[l],t[1]=e[l+1],t[2]=e[l+2],t[3]=e[l+3],a(t,t,o),e[l]=t[0],e[l+1]=t[1],e[l+2]=t[2],e[l+3]=t[3];return e}})();function O(){var t=new y(4);return y!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Y(t,e,i){i=i*.5;var n=Math.sin(i);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(i),t}function C(t,e,i,n){var r=e[0],a=e[1],o=e[2],l=e[3],c=i[0],f=i[1],u=i[2],g=i[3],d,h,b,m,p;return h=r*c+a*f+o*u+l*g,h<0&&(h=-h,c=-c,f=-f,u=-u,g=-g),1-h>G?(d=Math.acos(h),b=Math.sin(d),m=Math.sin((1-n)*d)/b,p=Math.sin(n*d)/b):(m=1-n,p=n),t[0]=m*r+p*c,t[1]=m*a+p*f,t[2]=m*o+p*u,t[3]=m*l+p*g,t}function Re(t,e){var i=e[0]+e[4]+e[8],n;if(i>0)n=Math.sqrt(i+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var a=(r+1)%3,o=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[a*3+a]-e[o*3+o]+1),t[r]=.5*n,n=.5/n,t[3]=(e[a*3+o]-e[o*3+a])*n,t[a]=(e[a*3+r]+e[r*3+a])*n,t[o]=(e[o*3+r]+e[r*3+o])*n}return t}var Te=Me,B=Se;(function(){var t=A(),e=M(1,0,0),i=M(0,1,0);return function(n,r,a){var o=xe(r,a);return o<-.999999?(L(t,e,r),Ae(t)<1e-6&&L(t,i,r),P(t,t),Y(n,t,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(L(t,r,a),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+o,B(n,n))}})();(function(){var t=O(),e=O();return function(i,n,r,a,o,l){return C(t,n,o,l),C(e,r,a,l),C(i,t,e,2*l*(1-l)),i}})();(function(){var t=ue();return function(e,i,n,r){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-i[0],t[5]=-i[1],t[8]=-i[2],B(e,Re(e,t))}})();const F=class F{constructor(){s(this,"canvas");s(this,"gl");if(this.canvas=document.getElementById("canvas"),this.gl=this.canvas.getContext("webgl2",{antialias:!0}),!this.gl)throw new Error("webgl context is not available!");var e=this.gl.getExtension("EXT_color_buffer_float");if(!e)throw new Error("EXT_color_buffer_float is not supported");var i=this.gl.getExtension("OES_texture_float_linear");if(!i)throw new Error("OES_texture_float_linear is not supported")}OnResize(){}static GetInstance(){return F.instance||(F.instance=new F),F.instance}};s(F,"instance",null);let E=F;class K{constructor(e,i){s(this,"ID");this.Compile(e,i)}GetId(){return this.ID}Compile(e,i){if(!e||!i)throw new Error("Failed to get Shader source code from scriptId!");const n=E.GetInstance().gl,r=n.createShader(n.VERTEX_SHADER);if(r==null)throw new Error("Failed to create vertex shader!");n.shaderSource(r,e),n.compileShader(r),n.getShaderInfoLog(r)&&console.log(n.getShaderInfoLog(r));const a=n.createShader(n.FRAGMENT_SHADER);if(a==null)throw new Error("Failed to create fragment shader!");n.shaderSource(a,i),n.compileShader(a),n.getShaderInfoLog(a)&&console.log(n.getShaderInfoLog(a));const o=n.createProgram();if(!o)throw new Error("Failed to create shader program!");this.ID={val:o},n.attachShader(this.ID.val,r),n.attachShader(this.ID.val,a),n.linkProgram(this.ID.val),n.getProgramParameter(this.ID.val,n.LINK_STATUS)||(console.warn("Could not initialise shaders"),console.log(n.getProgramInfoLog(this.ID.val))),n.useProgram(this.ID.val)}}const Le=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vModelPos;
out vec3 vNormal;
out vec2 vUV;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    vModelPos = vec3(model * vec4(aPosition, 1.0)); 
    vNormal = mat3(transpose(inverse(model))) * aNormal;  
    vUV = aUV;
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}`,Ue=`#version 300 es
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

in vec3 vModelPos;
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
    vec3 V = normalize(camera.Position - vModelPos);

    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, albedoMat, metallicMat);
	           
    // reflectance equation
    vec3 Lo = vec3(0.0);
    // calculate per-light radiance
    vec3 L = normalize(light1.Position - vModelPos);
    vec3 H = normalize(V + L);
    float D = length(light1.Position - vModelPos);
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
}`;class Ge{constructor(){}}class V extends Ge{constructor(){super();s(this,"shader");s(this,"albedo",M(.2,.4,.8));s(this,"metallic",.3);s(this,"roughenss",.8);s(this,"ao",.1);s(this,"emission",0);this.shader=new K(Le,Ue)}GetShader(){return this.shader}}class Ie{constructor(){s(this,"position",M(0,0,0));s(this,"scale",M(1,1,1));s(this,"rotation",Te(0,0,0,0))}}class Q{constructor(e,i,n=new Ie){s(this,"position");s(this,"scale");s(this,"rotation");s(this,"geometry");s(this,"material");s(this,"userUpdateCallback");this.geometry=e,this.material=i,this.position=n.position,this.scale=n.scale,this.rotation=n.rotation}SetTransforms(e){this.position=e.position,this.scale=e.scale,this.rotation=e.rotation}SetUpdateCallback(e){this.userUpdateCallback=e}UpdateUniforms(e,i){const n=E.GetInstance().gl;let r=T();if(r=pe(r,this.rotation),r=me(T(),r,this.scale),r=ge(T(),r,this.position),this.material instanceof V){const a=this.material,o=a.GetShader();n.useProgram(o.GetId().val),n.uniformMatrix4fv(n.getUniformLocation(o.GetId().val,"model"),!1,r),n.uniformMatrix4fv(n.getUniformLocation(o.GetId().val,"view"),!1,e.GetViewMatrix()),n.uniformMatrix4fv(n.getUniformLocation(o.GetId().val,"projection"),!1,e.GetProjectionMatrix()),n.uniform3fv(n.getUniformLocation(o.GetId().val,"camera.Position"),e.GetPosition()),n.uniform1f(n.getUniformLocation(o.GetId().val,"IsUsingTextures"),0),n.uniform3fv(n.getUniformLocation(o.GetId().val,"rawMaterial.Albedo"),a.albedo),n.uniform1f(n.getUniformLocation(o.GetId().val,"rawMaterial.Metallic"),a.metallic),n.uniform1f(n.getUniformLocation(o.GetId().val,"rawMaterial.Roughness"),a.roughenss),n.uniform1f(n.getUniformLocation(o.GetId().val,"rawMaterial.AO"),a.ao),n.uniform1f(n.getUniformLocation(o.GetId().val,"rawMaterial.Emission"),a.emission);for(const l of i)l instanceof W&&(n.uniform3fv(n.getUniformLocation(o.GetId().val,"light1.Position"),l.position),n.uniform3fv(n.getUniformLocation(o.GetId().val,"light1.Color"),l.color),n.uniform1f(n.getUniformLocation(o.GetId().val,"light1.Intensity"),l.intensity),n.useProgram(null))}}}class Ce{constructor(){s(this,"meshes",new Array);s(this,"lights",new Array)}Add(e){e instanceof Q?this.meshes.push(e):e instanceof H&&this.lights.push(e)}GetAllChildren(){return{meshes:this.meshes,lights:this.lights}}}class Pe{constructor(){s(this,"scene",new Ce);s(this,"camera");s(this,"graphics");s(this,"scriptLoop");s(this,"animationFrameId",0);s(this,"lastFrame",0);s(this,"elapsedTime",0);s(this,"timeStep",0)}SetAnimationLoop(e){this.scriptLoop=e,this.animationFrameId=requestAnimationFrame(i=>this.AnimationLoop(i))}AnimationLoop(e){this.elapsedTime=e,this.timeStep=e-this.lastFrame,this.lastFrame=e,this.scriptLoop&&this.scriptLoop(e,this.timeStep),this.animationFrameId=requestAnimationFrame(i=>this.AnimationLoop(i))}Update(){this.camera!=null&&this.graphics!=null&&this.scene!=null&&this.graphics.Update(this.scene,this.camera,this.elapsedTime,this.timeStep)}Stop(){cancelAnimationFrame(this.animationFrameId),this.scriptLoop=void 0}}class S{constructor(e,i,n){s(this,"name");s(this,"offset");s(this,"size");s(this,"count");this.count=e,this.size=i,this.name=n}}class ${constructor(e){s(this,"attributes",[]);s(this,"size",0);s(this,"stride",0);this.attributes=this.attributes.concat(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElement(e){this.attributes.push(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElementArray(e){this.attributes=this.attributes.concat(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}CalculateStrideAndOffsets(){var e=0;for(const i of this.attributes)i.offset=e,e+=i.size,this.stride+=i.size}CaclulateAttributesSize(){for(const e of this.attributes)this.size+=e.size}GetAttributes(){return this.attributes}}const v=class v{constructor(e){s(this,"nUniqueVertices");s(this,"uniqueLayout");s(this,"uniqueVertexData");s(this,"uniqueSize",0);s(this,"uniqueOffset",0);this.uniqueVertexData=e;var i=new Float32Array(v.cachedVertexData.length+this.uniqueVertexData.length);i.set(v.cachedVertexData,0),i.set(this.uniqueVertexData,v.cachedVertexData.length),v.cachedVertexData=i}GetUniqueLayout(){return this.uniqueLayout}GetUniqueVertexData(){return this.uniqueVertexData}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}GetVerticesCount(){return this.nUniqueVertices}SetLayout(e){this.uniqueLayout=e,this.uniqueSize=this.uniqueVertexData.length*this.uniqueVertexData.BYTES_PER_ELEMENT,this.uniqueOffset=v.cachedSize,this.nUniqueVertices=this.uniqueSize/this.uniqueLayout.size,v.cachedSize+=this.uniqueSize,this.PushLayoutToBuffer();var i=E.GetInstance();const n=i.gl;v.Id.val||(v.Id.val=n.createBuffer()),n.bindBuffer(n.ARRAY_BUFFER,v.Id.val),n.bufferData(n.ARRAY_BUFFER,v.cachedVertexData,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null)}PushLayoutToBuffer(){v.cachedLayout.concat(this.uniqueLayout)}};s(v,"Id",{val:null}),s(v,"cachedVertexData",new Float32Array),s(v,"cachedLayout",new Array),s(v,"cachedSize",0);let R=v;const w=class w{constructor(e){s(this,"uniqueIndices");s(this,"uniqueOffset");s(this,"uniqueSize");this.uniqueIndices=e,this.uniqueOffset=w.cachedSize,this.uniqueSize=this.uniqueIndices.length*2;var i=new Uint16Array(w.cachedIndices.length+this.uniqueIndices.length);i.set(w.cachedIndices,0),i.set(this.uniqueIndices,w.cachedIndices.length),w.cachedIndices=i,w.cachedSize=w.cachedIndices.length*2;var n=E.GetInstance();const r=n.gl;w.Id.val||(w.Id.val=r.createBuffer()),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,w.Id.val),r.bufferData(r.ELEMENT_ARRAY_BUFFER,w.cachedIndices,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,null)}GetUniqueIndices(){return this.uniqueIndices}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}};s(w,"cachedIndices",new Uint16Array),s(w,"cachedSize",0),s(w,"Id",{val:null});let D=w;var I;(t=>{class e{constructor(a,o){s(this,"vertexArray");s(this,"shader");this.shader=new K(a,o);const l=new R(t.Vertices.squarePNT),c=new Array(new S(3,12,"aPosition"),new S(3,12,"aNormal"),new S(2,8,"aUV")),f=new $(c);l.SetLayout(f),this.vertexArray=new J(l)}GetVertexArray(){return this.vertexArray}GetShader(){return this.shader}}t.Square=e;class i{constructor(){}}s(i,"cubePNT",new Float32Array([-.5,-.5,-.5,0,0,-1,0,0,.5,-.5,-.5,0,0,-1,1,0,.5,.5,-.5,0,0,-1,1,1,.5,.5,-.5,0,0,-1,1,1,-.5,.5,-.5,0,0,-1,0,1,-.5,-.5,-.5,0,0,-1,0,0,-.5,-.5,.5,0,0,1,0,0,.5,-.5,.5,0,0,1,1,0,.5,.5,.5,0,0,1,1,1,.5,.5,.5,0,0,1,1,1,-.5,.5,.5,0,0,1,0,1,-.5,-.5,.5,0,0,1,0,0,-.5,.5,.5,-1,0,0,1,0,-.5,.5,-.5,-1,0,0,1,1,-.5,-.5,-.5,-1,0,0,0,1,-.5,-.5,-.5,-1,0,0,0,1,-.5,-.5,.5,-1,0,0,0,0,-.5,.5,.5,-1,0,0,1,0,.5,.5,.5,1,0,0,1,0,.5,.5,-.5,1,0,0,1,1,.5,-.5,-.5,1,0,0,0,1,.5,-.5,-.5,1,0,0,0,1,.5,-.5,.5,1,0,0,0,0,.5,.5,.5,1,0,0,1,0,-.5,-.5,-.5,0,-1,0,0,1,.5,-.5,-.5,0,-1,0,1,1,.5,-.5,.5,0,-1,0,1,0,.5,-.5,.5,0,-1,0,1,0,-.5,-.5,.5,0,-1,0,0,0,-.5,-.5,-.5,0,-1,0,0,1,-.5,.5,-.5,0,1,0,0,1,.5,.5,-.5,0,1,0,1,1,.5,.5,.5,0,1,0,1,0,.5,.5,.5,0,1,0,1,0,-.5,.5,.5,0,1,0,0,0,-.5,.5,-.5,0,1,0,0,1])),s(i,"squarePNT",new Float32Array([1,1,0,0,0,1,1,1,1,-1,0,0,0,1,1,0,-1,-1,0,0,0,1,0,0,-1,-1,0,0,0,1,0,0,-1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1])),t.Vertices=i;class n{constructor(){}}s(n,"square",new Uint16Array([0,1,3,1,2,3])),s(n,"cube",new Uint16Array([0,1,3,1,2,3,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20])),t.Indices=n})(I||(I={}));class J{constructor(e,i=null){s(this,"id",{val:null});s(this,"vertexBuffer");s(this,"indexBuffer",null);this.vertexBuffer=e,this.indexBuffer=i;const r=E.GetInstance().gl;this.id={val:r.createVertexArray()},r.bindVertexArray(this.id.val),r.bindBuffer(r.ARRAY_BUFFER,R.Id.val),this.indexBuffer&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,D.Id.val);var a=0;for(const c of this.vertexBuffer.GetUniqueLayout().GetAttributes()){var o=this.vertexBuffer.GetUniqueLayout(),l=R.cachedSize-this.vertexBuffer.GetUniqueVertexData().length*this.vertexBuffer.GetUniqueVertexData().BYTES_PER_ELEMENT;r.vertexAttribPointer(a,c.count,r.FLOAT,!1,o.stride,l+c.offset),r.enableVertexAttribArray(a),a++}r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,null)}GetId(){return this.id}GetVertexBuffer(){return this.vertexBuffer}GetIndexBuffer(){return this.indexBuffer}}class De{constructor(){}}class Z extends De{constructor(){super();s(this,"vertexArray");const i=new R(I.Vertices.cubePNT),n=new Array(new S(3,12,"aPosition"),new S(3,12,"aNormal"),new S(2,8,"aUV")),r=new $(n);i.SetLayout(r),this.vertexArray=new J(i)}GetVertexArray(){return this.vertexArray}}class Be{constructor(e){s(this,"width",0);s(this,"height",0);s(this,"position");s(this,"front",[0,0,-1]);s(this,"up",[0,1,0]);s(this,"right",[1,0,0]);s(this,"fov",45);s(this,"projectionMatrix",T());s(this,"viewMatrix",T());this.position=e}UpdateViewMatrix(){this.right=P(A(),L(A(),this.front,this.up)),this.up=P(A(),L(A(),this.right,this.front)),this.viewMatrix=we(this.viewMatrix,this.position,Ee(A(),this.position,this.front),this.up)}UpdateProjectionMatrix(e,i){this.width=e,this.height=i,be(this.projectionMatrix,X(this.fov),this.width/this.height,.1,1e3)}ResetFOV(e,i,n){this.fov=e,this.UpdateProjectionMatrix(i,n)}GetPosition(){return this.position}GetProjectionMatrix(){return this.projectionMatrix}GetViewMatrix(){return this.viewMatrix}}class Ve{constructor(){s(this,"dragon",new Pe);this.Loop=this.Loop.bind(this)}}class je{constructor(){s(this,"gl");this.gl=E.GetInstance().gl,this.gl.enable(this.gl.DEPTH_TEST)}RenderCube(e,i){this.gl.bindVertexArray(e.GetId().val),this.gl.useProgram(i.GetId().val),this.gl.drawArrays(this.gl.TRIANGLES,0,36),this.gl.bindVertexArray(null),this.gl.useProgram(null)}RenderQuad(e,i){this.gl.bindVertexArray(e.GetId().val),this.gl.useProgram(i.GetId().val),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.gl.bindVertexArray(null),this.gl.useProgram(null)}BeginStage(e){this.gl.viewport(0,0,e.viewport.width,e.viewport.height),e.depthTest&&(this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(e.depthFunc));const i=e.GetWriteBuffer();i?this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.GetFramebufferId().val):this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.clearColor(e.clearColor[0],e.clearColor[1],e.clearColor[2],e.clearColor[3])}EndStage(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.useProgram(null),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindTexture(this.gl.TEXTURE_3D,null)}OnResize(){}}class Ne{constructor(e){s(this,"framebufferInfo");s(this,"renderBufferInfo",null);s(this,"framebufferId");s(this,"renderbufferId");s(this,"gl");this.gl=E.GetInstance().gl;const i=this.gl.createFramebuffer();if(!i)throw new Error("Failed to create framebuffer!");this.framebufferId={val:i},this.renderbufferId={val:null},this.framebufferInfo=e,e.targetTexture.CreateTextureImage2D({dimension:e.dimension,format:e.format,width:e.width,height:e.height,nChannels:e.nChannels,type:e.type,data:e.data}),e.targetTexture.CreateSampler({dimension:e.dimension,minFilter:e.minFilter,magFilter:e.magFilter,sWrap:e.sWrap,tWrap:e.tWrap});const n=this.gl.COLOR_ATTACHMENT0+e.attachmentUnit;this.gl.bindTexture(e.dimension,e.targetTexture.GetId().val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,n,e.targetTexture.GetTextureInfo().dimension,e.targetTexture.GetId().val,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(e.dimension,null);const r=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(r!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is not complete: "+r.toString(16)),e.renderBufferCreateInfo){this.renderBufferInfo=e.renderBufferCreateInfo;const a=this.gl.createRenderbuffer();if(!a)throw new Error("Failed to create framebuffer!");this.renderbufferId={val:a},this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,e.renderBufferCreateInfo.format,e.renderBufferCreateInfo.width,e.renderBufferCreateInfo.height),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,e.renderBufferCreateInfo.attachmentType,this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}}Destroy(){this.gl.deleteFramebuffer(this.framebufferId.val),this.gl.deleteRenderbuffer(this.renderbufferId.val),this.framebufferInfo&&this.framebufferInfo.targetTexture.Destroy()}GetFramebufferId(){return this.framebufferId}GetRenderbufferId(){return this.renderbufferId}}class qe{constructor(){s(this,"id");s(this,"gl");this.gl=E.GetInstance().gl;const e=this.gl.createTexture();if(!e)throw new Error("Failed to create texture!");this.id={val:e}}Destroy(){this.gl.deleteTexture(this.id.val)}GetId(){return this.id}}class ze extends qe{constructor(){super();s(this,"textureInfo")}CreateSampler(i){this.gl.bindTexture(i.dimension,this.id.val),this.gl.texParameteri(i.dimension,this.gl.TEXTURE_MIN_FILTER,i.magFilter),this.gl.texParameteri(i.dimension,this.gl.TEXTURE_MAG_FILTER,i.minFilter),this.gl.texParameteri(i.dimension,this.gl.TEXTURE_WRAP_S,i.sWrap),this.gl.texParameteri(i.dimension,this.gl.TEXTURE_WRAP_T,i.tWrap),this.gl.bindTexture(i.dimension,null)}CreateTextureImage2D(i){this.textureInfo=i,this.gl.bindTexture(i.dimension,this.id.val),this.gl.texImage2D(i.dimension,0,i.format,i.width,i.height,0,i.nChannels,i.type,i.data),this.gl.bindTexture(i.dimension,null)}GetTextureInfo(){return this.textureInfo}}const ke=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec2 vUV;

void main() {
    vUV = aUV;
    gl_Position = vec4(aPosition, 1.0);
}`,Oe=`#version 300 es
precision highp float;


out vec4 FragColor;
in vec2 vUV;

uniform sampler2D tex;

vec3 ACESFilm(vec3 x) {
    const float A = 2.51;
    const float B = 0.03;
    const float C = 2.43;
    const float D = 0.59;
    const float E = 0.14;
    return clamp((x*(A*x+B))/(x*(C*x+D)+E), 0.0, 1.0);
}

// vec3 bloom_none()
// {
//     vec3 hdrColor = texture(srcTex, vUV).rgb;
//     return hdrColor;
// }

// vec3 bloom_old()
// {
//     vec3 hdrColor = texture(srcTex, vUV).rgb;
//     vec3 bloomColor = texture(blurredTex, vUV).rgb;
//     return hdrColor + bloomColor; // additive blending
// }

// vec3 bloom_new()
// {
//     vec3 hdrColor = texture(srcTex, vUV).rgb;
//     vec3 bloomColor = texture(blurredTex, vUV).rgb;
//     return mix(hdrColor, bloomColor, BloomStrength); // linear interpolation
// }

void main() {

    // vec3 finalHDR = bloom_new();

    // finalHDR *= Exposure;

    vec3 tone_mapped = ACESFilm(texture(tex, vUV).rgb);

    FragColor = vec4(tone_mapped, 1.0);
}`;class _{constructor(e,i,n){s(this,"readBuffer",null);s(this,"writeBuffer",null);s(this,"clearColor");s(this,"depthTest");s(this,"depthFunc");s(this,"viewport");s(this,"blending");s(this,"blendFunc");this.readBuffer=e,this.writeBuffer=i,this.viewport=n.viewport,this.clearColor=n.clearColor,this.depthTest=n.depthTest,this.depthFunc=n.depthFunc,this.blending=n.blending,this.blendFunc=n.blendFunc}Destroy(){var e;(e=this.writeBuffer)==null||e.Destroy()}GetReadBuffer(){return this.readBuffer}GetWriteBuffer(){return this.writeBuffer}}class _e{constructor(){s(this,"renderer",new je);s(this,"screenQuad",new I.Square(ke,Oe));s(this,"stages",new Map);s(this,"gl");s(this,"width",0);s(this,"height",0);const e=E.GetInstance();this.gl=e.gl,window.addEventListener("resize",()=>this.OnResize())}Update(e,i,n,r){const a=this.stages.get("SceneStage");if(a){this.renderer.BeginStage(a),(i.width!=this.width||i.height!=this.height)&&(i.UpdateProjectionMatrix(this.width,this.height),i.UpdateViewMatrix());const l=e.GetAllChildren();for(const c of l.meshes)c.UpdateUniforms(i,l.lights),c.userUpdateCallback&&c.userUpdateCallback(c,n,r),c.geometry instanceof Z&&c.material instanceof V&&this.renderer.RenderCube(c.geometry.GetVertexArray(),c.material.GetShader());this.renderer.EndStage()}const o=this.stages.get("HDRStage");if(o){this.renderer.BeginStage(o),this.gl.useProgram(this.screenQuad.GetShader().GetId().val);const l=o.GetReadBuffer();l&&(this.gl.bindTexture(l.framebufferInfo.dimension,l.framebufferInfo.targetTexture.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"tex"),0)),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.renderer.RenderQuad(this.screenQuad.GetVertexArray(),this.screenQuad.GetShader()),this.renderer.EndStage()}}SetSizes(e,i){(this.width!=e||this.height!=i)&&this.Resize(e,i)}Resize(e,i){this.width=e,this.height=i,this.gl.canvas.width=this.width,this.gl.canvas.height=this.height;let n=this.stages.get("SceneStage");n&&n.Destroy();const r={targetTexture:new ze,dimension:this.gl.TEXTURE_2D,format:this.gl.RGBA16F,width:this.width,height:this.height,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT,attachmentUnit:0,renderBufferCreateInfo:{width:this.width,height:this.height,format:this.gl.DEPTH24_STENCIL8,attachmentType:this.gl.DEPTH_STENCIL_ATTACHMENT}},a={viewport:{width:this.width,height:this.height},clearColor:[.1,.1,.1,1],depthTest:!0,depthFunc:this.gl.LEQUAL,blending:!1,blendFunc:this.gl.ONE},o=new Ne(r);n=new _(null,o,a),this.stages.set("SceneStage",n);let l=this.stages.get("HDRStage");l&&l.Destroy();const c={viewport:{width:this.width,height:this.height},clearColor:[.1,.1,.1,1],depthTest:!0,depthFunc:this.gl.LEQUAL,blending:!1,blendFunc:this.gl.ONE};l=new _(n.GetWriteBuffer(),null,c),this.stages.set("HDRStage",l)}OnResize(){var e=window.innerWidth,i=window.innerHeight,n=document.querySelector("#canvas");(n.width!=e||n.height!=i)&&(n.width=e,n.height=i,this.Resize(n.width,n.height))}}function He(t,e,i){const n=M(1,-1,0),r=e*45*5e-4,a=Y(t.rotation,n,X(r));t.rotation=B(a,a)}class We extends Ve{constructor(){super(),this.dragon.camera=new Be(M(0,0,5));let e=new V;e.ao=2,e.roughenss=.3,e.metallic=.7;let i=new Z,n=new Q(i,e);n.SetUpdateCallback(He),this.dragon.scene.Add(n);const r=new W([-5,5,2],[1,1,1],100);this.dragon.scene.Add(r),this.dragon.graphics=new _e,this.dragon.graphics.SetSizes(window.innerWidth,window.innerHeight),this.dragon.SetAnimationLoop(this.Loop)}Loop(e,i){this.dragon.Update()}}class Xe{constructor(){s(this,"frontend");s(this,"script");this.frontend=new he,this.script=new We}}new Xe;
