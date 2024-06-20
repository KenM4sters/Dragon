var ee=Object.defineProperty;var te=(t,e,n)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var a=(t,e,n)=>te(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const ne=`<section class="home">
    <div class="landing">
        <div class="navbar">
            <ul class="navbar-items-container">
                <span class="navbar-item"><a href="https://github.com/KenM4sters/Mammoth2D" target="_blank"> Github </a></span>
                <span class="navbar-item"><a href="https://discord.com/users/1156685102101839962" target="_blank"> Discord </a></span>
                <span class="navbar-item"><a href="mailto:sam.brookman414@hotmail.com"> Contact </a></span>
            </ul>
        </div>
    </div>
</section>`,ie=`<section class="links">
    <h1 class="links-header"> Links </h1>
    <div class="links-container">
        <div class="link-wrapper">
            <a class="about-link github" href="https://github.com/KenM4sters/Mammoth2D" target="_blank"><i class="fa-brands fa-square-github fa-2xl"></i></a>
            <p1 class="about-link-caption"> view my projects on github</p1>
        </div>
        <div class="link-wrapper">
            <a class="about-link email" href="mailto:sam.brookman414@hotmail.com"><i class="fa-solid fa-envelope fa-2xl"></i></a>
            <p1 class="about-link-caption"> contact me via email</p1>
        </div>
        <div class="link-wrapper">
            <a class="about-link discord" href="https://discord.com/users/1156685102101839962" target="_blank"><i class="fa-brands fa-discord fa-2xl"></i></a>
            <p1 class="about-link-caption"> reach out on discord</p1>
        </div>
    </div>
</section>`,re=`<section class="projects">
    <div class="projects-navbar">
        <span class="project-item mammoth2d"> Mammoth2D </span>
        <span class="project-item silverback"> Silverback </span>
        <span class="project-item dragon"> Dragon </span>
        <span class="project-item reaction"> Reaction </span>
    </div>
    <div class="projects-wrapper">
    </div>
</div>
</section>`,se=`<section class="about">
    <div class="about-container">
        <h1 class="about-header"> about me </h1>
        <p class="about-para"> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Esse sit omnis beatae ipsam natus accusantium aspernatur corporis 
            fugit quo incidunt quam dolorum, possimus similique dolore, autem 
            dignissimos maiores, quas eos. 
        </p>
    </div>
</section>`,ae=`
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
                Mammoth2D is a 2D game engine written in C++ using Vulkan on the backend.  
            </p1>
            <p1>
                This is currently my largest project and is under-going heavy refactoring as 
                I continue to develop and integrate own ECS and Physics libraries. 
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
</div>`,ce=`
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
</div>`,le=`
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
</div>`;class G{constructor(e){a(this,"text");this.text=e}}class he{constructor(){a(this,"projects",new Map);let e=document.querySelector("#app"),n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div");n.innerHTML=ne,i.innerHTML=re,r.innerHTML=se,s.innerHTML=ie,e.appendChild(n),e.appendChild(i),e.appendChild(s);const o=new G(ae),c=new G(oe),l=new G(le),g=new G(ce);this.projects.set("mammoth2d",o),this.projects.set("silverback",c),this.projects.set("reaction",l),this.projects.set("dragon",g);let u=document.querySelector(".projects-wrapper");this.ViewProject(u,document.querySelector(".mammoth2d"),o),window.addEventListener("DOMContentLoaded",()=>{window.addEventListener("click",p=>{const d=p.target;d.classList.contains("mammoth2d")?this.ViewProject(u,d,o):d.classList.contains("silverback")?this.ViewProject(u,d,c):d.classList.contains("reaction")?this.ViewProject(u,d,l):d.classList.contains("dragon")&&this.ViewProject(u,d,g)})})}ViewProject(e,n,i){if(n.classList.add("selected-project"),n&&n.parentElement){const r=Array.from(n.parentElement.children).filter(s=>s!==n);for(let s of r)s.classList.remove("selected-project")}e.innerHTML=i.text}}var U=1e-6,E=typeof Float32Array<"u"?Float32Array:Array,de=Math.PI/180;function Y(t){return t*de}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function ue(){var t=new E(9);return E!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function A(){var t=new E(16);return E!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function ge(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function pe(t,e,n){var i=n[0],r=n[1],s=n[2],o,c,l,g,u,p,d,h,b,v,f,x;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(o=e[0],c=e[1],l=e[2],g=e[3],u=e[4],p=e[5],d=e[6],h=e[7],b=e[8],v=e[9],f=e[10],x=e[11],t[0]=o,t[1]=c,t[2]=l,t[3]=g,t[4]=u,t[5]=p,t[6]=d,t[7]=h,t[8]=b,t[9]=v,t[10]=f,t[11]=x,t[12]=o*i+u*r+b*s+e[12],t[13]=c*i+p*r+v*s+e[13],t[14]=l*i+d*r+f*s+e[14],t[15]=g*i+h*r+x*s+e[15]),t}function ve(t,e,n){var i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function fe(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,c=i+i,l=r+r,g=n*o,u=i*o,p=i*c,d=r*o,h=r*c,b=r*l,v=s*o,f=s*c,x=s*l;return t[0]=1-p-b,t[1]=u+x,t[2]=d-f,t[3]=0,t[4]=u-x,t[5]=1-g-b,t[6]=h+v,t[7]=0,t[8]=d+f,t[9]=h-v,t[10]=1-g-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function me(t,e,n,i,r){var s=1/Math.tan(e/2),o;return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0?(o=1/(i-r),t[10]=(r+i)*o,t[14]=2*r*i*o):(t[10]=-1,t[14]=-2*i),t}var be=me;function we(t,e,n,i){var r,s,o,c,l,g,u,p,d,h,b=e[0],v=e[1],f=e[2],x=i[0],B=i[1],z=i[2],N=n[0],O=n[1],k=n[2];return Math.abs(b-N)<U&&Math.abs(v-O)<U&&Math.abs(f-k)<U?ge(t):(u=b-N,p=v-O,d=f-k,h=1/Math.hypot(u,p,d),u*=h,p*=h,d*=h,r=B*d-z*p,s=z*u-x*d,o=x*p-B*u,h=Math.hypot(r,s,o),h?(h=1/h,r*=h,s*=h,o*=h):(r=0,s=0,o=0),c=p*o-d*s,l=d*r-u*o,g=u*s-p*r,h=Math.hypot(c,l,g),h?(h=1/h,c*=h,l*=h,g*=h):(c=0,l=0,g=0),t[0]=r,t[1]=c,t[2]=u,t[3]=0,t[4]=s,t[5]=l,t[6]=p,t[7]=0,t[8]=o,t[9]=g,t[10]=d,t[11]=0,t[12]=-(r*b+s*v+o*f),t[13]=-(c*b+l*v+g*f),t[14]=-(u*b+p*v+d*f),t[15]=1,t)}function S(){var t=new E(3);return E!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function ye(t){var e=t[0],n=t[1],i=t[2];return Math.hypot(e,n,i)}function F(t,e,n){var i=new E(3);return i[0]=t,i[1]=e,i[2]=n,i}function Ee(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function j(t,e){var n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function xe(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function I(t,e,n){var i=e[0],r=e[1],s=e[2],o=n[0],c=n[1],l=n[2];return t[0]=r*l-s*c,t[1]=s*o-i*l,t[2]=i*c-r*o,t}var Ae=ye;(function(){var t=S();return function(e,n,i,r,s,o){var c,l;for(n||(n=3),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,c=i;c<l;c+=n)t[0]=e[c],t[1]=e[c+1],t[2]=e[c+2],s(t,t,o),e[c]=t[0],e[c+1]=t[1],e[c+2]=t[2];return e}})();function Se(){var t=new E(4);return E!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Re(t,e,n,i){var r=new E(4);return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function Te(t,e){var n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=i*o,t[2]=r*o,t[3]=s*o,t}(function(){var t=Se();return function(e,n,i,r,s,o){var c,l;for(n||(n=4),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,c=i;c<l;c+=n)t[0]=e[c],t[1]=e[c+1],t[2]=e[c+2],t[3]=e[c+3],s(t,t,o),e[c]=t[0],e[c+1]=t[1],e[c+2]=t[2],e[c+3]=t[3];return e}})();function _(){var t=new E(4);return E!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function K(t,e,n){n=n*.5;var i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function D(t,e,n,i){var r=e[0],s=e[1],o=e[2],c=e[3],l=n[0],g=n[1],u=n[2],p=n[3],d,h,b,v,f;return h=r*l+s*g+o*u+c*p,h<0&&(h=-h,l=-l,g=-g,u=-u,p=-p),1-h>U?(d=Math.acos(h),b=Math.sin(d),v=Math.sin((1-i)*d)/b,f=Math.sin(i*d)/b):(v=1-i,f=i),t[0]=v*r+f*l,t[1]=v*s+f*g,t[2]=v*o+f*u,t[3]=v*c+f*p,t}function Fe(t,e){var n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,o=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+o]-e[o*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[o]=(e[o*3+r]+e[r*3+o])*i}return t}var Me=Re,V=Te;(function(){var t=S(),e=F(1,0,0),n=F(0,1,0);return function(i,r,s){var o=xe(r,s);return o<-.999999?(I(t,e,r),Ae(t)<1e-6&&I(t,n,r),j(t,t),K(i,t,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(I(t,r,s),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+o,V(i,i))}})();(function(){var t=_(),e=_();return function(n,i,r,s,o,c){return D(t,i,o,c),D(e,r,s,c),D(n,t,e,2*c*(1-c)),n}})();(function(){var t=ue();return function(e,n,i,r){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],V(e,Fe(e,t))}})();const R=class R{constructor(){a(this,"canvas");a(this,"gl");if(this.canvas=document.getElementById("canvas"),this.gl=this.canvas.getContext("webgl2",{antialias:!0}),!this.gl)throw new Error("webgl context is not available!");var e=this.gl.getExtension("EXT_color_buffer_float");if(!e)throw new Error("EXT_color_buffer_float is not supported");var n=this.gl.getExtension("OES_texture_float_linear");if(!n)throw new Error("OES_texture_float_linear is not supported")}OnResize(){}static GetInstance(){return R.instance||(R.instance=new R),R.instance}};a(R,"instance",null);let y=R;class ${constructor(e,n){a(this,"ID");this.Compile(e,n)}GetId(){return this.ID}Compile(e,n){if(!e||!n)throw new Error("Failed to get Shader source code from scriptId!");const i=y.GetInstance().gl,r=i.createShader(i.VERTEX_SHADER);if(r==null)throw new Error("Failed to create vertex shader!");i.shaderSource(r,e),i.compileShader(r),i.getShaderInfoLog(r)&&console.log(i.getShaderInfoLog(r));const s=i.createShader(i.FRAGMENT_SHADER);if(s==null)throw new Error("Failed to create fragment shader!");i.shaderSource(s,n),i.compileShader(s),i.getShaderInfoLog(s)&&console.log(i.getShaderInfoLog(s));const o=i.createProgram();if(!o)throw new Error("Failed to create shader program!");this.ID={val:o},i.attachShader(this.ID.val,r),i.attachShader(this.ID.val,s),i.linkProgram(this.ID.val),i.getProgramParameter(this.ID.val,i.LINK_STATUS)||(console.warn("Could not initialise shaders"),console.log(i.getProgramInfoLog(this.ID.val))),i.useProgram(this.ID.val)}}const Ie=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 modelPos;
out vec3 vNormal;
out vec2 vUV;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    modelPos = vec3(model * vec4(aPosition, 1.0)); 
    vNormal = mat3(transpose(inverse(model))) * aNormal;  
    vUV = aUV;
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}`,Ge=`#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vNormal;

void main() 
{
    FragColor = vec4(vNormal, 1.0);
}`;class Ue{constructor(){}}class L extends Ue{constructor(){super();a(this,"shader");this.shader=new $(Ie,Ge)}GetShader(){return this.shader}}class X{constructor(e){a(this,"func");this.func=e}}class C{constructor(){a(this,"position",F(0,0,0));a(this,"scale",F(1,1,1));a(this,"rotation",Me(0,0,0,0));a(this,"model",A());a(this,"view",A());a(this,"projection",A())}}class Le{constructor(){a(this,"components",new Map)}Set(e,...n){const i=new e(...n);if(i==null||i==null)throw new Error("Invalid call to Entity.Set(). Failed to create instance of T!");this.components.set(i.constructor.name,i)}Get(e){return this.components.get(e.name)}Update(e){const n=y.GetInstance().gl,i=this.Get(C),r=this.Get(L);if(i instanceof C&&r instanceof L){i.model=A(),i.model=fe(i.model,i.rotation),i.model=ve(A(),i.model,i.scale),i.model=pe(A(),i.model,i.position);const s=r.GetShader();n.useProgram(s.GetId().val),n.uniformMatrix4fv(n.getUniformLocation(s.GetId().val,"model"),!1,i.model),n.uniformMatrix4fv(n.getUniformLocation(s.GetId().val,"view"),!1,e.GetViewMatrix()),n.uniformMatrix4fv(n.getUniformLocation(s.GetId().val,"projection"),!1,e.GetProjectionMatrix()),n.useProgram(null)}}}class Ce{constructor(){a(this,"entities",new Array)}CreateEntity(){let e=new Le;return this.entities.push(e),e}GetAllEntities(){return this.entities}}class Pe{constructor(){a(this,"registry",new Ce);a(this,"camera");a(this,"graphics");a(this,"scriptLoop");a(this,"animationFrameId",0);a(this,"lastFrame",0);a(this,"elapsedTime",0);a(this,"timeStep",0)}SetAnimationLoop(e){this.scriptLoop=e,this.animationFrameId=requestAnimationFrame(n=>this.AnimationLoop(n))}AnimationLoop(e){this.elapsedTime=e,this.timeStep=e-this.lastFrame,this.lastFrame=e,this.scriptLoop&&this.scriptLoop(e,this.timeStep),this.animationFrameId=requestAnimationFrame(n=>this.AnimationLoop(n))}Update(){this.camera!=null&&this.graphics!=null&&this.registry!=null&&this.graphics.Update(this.registry,this.camera,this.elapsedTime,this.timeStep)}Stop(){cancelAnimationFrame(this.animationFrameId),this.scriptLoop=void 0}}class T{constructor(e,n,i){a(this,"name");a(this,"offset");a(this,"size");a(this,"count");this.count=e,this.size=n,this.name=i}}class Q{constructor(e){a(this,"attributes",[]);a(this,"size",0);a(this,"stride",0);this.attributes=this.attributes.concat(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElement(e){this.attributes.push(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElementArray(e){this.attributes=this.attributes.concat(e),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}CalculateStrideAndOffsets(){var e=0;for(const n of this.attributes)n.offset=e,e+=n.size,this.stride+=n.size}CaclulateAttributesSize(){for(const e of this.attributes)this.size+=e.size}GetAttributes(){return this.attributes}}const m=class m{constructor(e){a(this,"nUniqueVertices");a(this,"uniqueLayout");a(this,"uniqueVertexData");a(this,"uniqueSize",0);a(this,"uniqueOffset",0);this.uniqueVertexData=e;var n=new Float32Array(m.cachedVertexData.length+this.uniqueVertexData.length);n.set(m.cachedVertexData,0),n.set(this.uniqueVertexData,m.cachedVertexData.length),m.cachedVertexData=n}GetUniqueLayout(){return this.uniqueLayout}GetUniqueVertexData(){return this.uniqueVertexData}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}GetVerticesCount(){return this.nUniqueVertices}SetLayout(e){this.uniqueLayout=e,this.uniqueSize=this.uniqueVertexData.length*this.uniqueVertexData.BYTES_PER_ELEMENT,this.uniqueOffset=m.cachedSize,this.nUniqueVertices=this.uniqueSize/this.uniqueLayout.size,m.cachedSize+=this.uniqueSize,this.PushLayoutToBuffer();var n=y.GetInstance();const i=n.gl;m.Id.val||(m.Id.val=i.createBuffer()),i.bindBuffer(i.ARRAY_BUFFER,m.Id.val),i.bufferData(i.ARRAY_BUFFER,m.cachedVertexData,i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null)}PushLayoutToBuffer(){m.cachedLayout.concat(this.uniqueLayout)}};a(m,"Id",{val:null}),a(m,"cachedVertexData",new Float32Array),a(m,"cachedLayout",new Array),a(m,"cachedSize",0);let M=m;const w=class w{constructor(e){a(this,"uniqueIndices");a(this,"uniqueOffset");a(this,"uniqueSize");this.uniqueIndices=e,this.uniqueOffset=w.cachedSize,this.uniqueSize=this.uniqueIndices.length*2;var n=new Uint16Array(w.cachedIndices.length+this.uniqueIndices.length);n.set(w.cachedIndices,0),n.set(this.uniqueIndices,w.cachedIndices.length),w.cachedIndices=n,w.cachedSize=w.cachedIndices.length*2;var i=y.GetInstance();const r=i.gl;w.Id.val||(w.Id.val=r.createBuffer()),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,w.Id.val),r.bufferData(r.ELEMENT_ARRAY_BUFFER,w.cachedIndices,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,null)}GetUniqueIndices(){return this.uniqueIndices}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}};a(w,"cachedIndices",new Uint16Array),a(w,"cachedSize",0),a(w,"Id",{val:null});let q=w;var P;(t=>{class e{constructor(s,o){a(this,"vertexArray");a(this,"shader");this.shader=new $(s,o);const c=new M(t.Vertices.squarePNT),l=new Array(new T(3,12,"aPosition"),new T(3,12,"aNormal"),new T(2,8,"aUV")),g=new Q(l);c.SetLayout(g),this.vertexArray=new J(c)}GetVertexArray(){return this.vertexArray}GetShader(){return this.shader}}t.Square=e;class n{constructor(){}}a(n,"cubePNT",new Float32Array([-.5,-.5,-.5,0,0,-1,0,0,.5,-.5,-.5,0,0,-1,1,0,.5,.5,-.5,0,0,-1,1,1,.5,.5,-.5,0,0,-1,1,1,-.5,.5,-.5,0,0,-1,0,1,-.5,-.5,-.5,0,0,-1,0,0,-.5,-.5,.5,0,0,1,0,0,.5,-.5,.5,0,0,1,1,0,.5,.5,.5,0,0,1,1,1,.5,.5,.5,0,0,1,1,1,-.5,.5,.5,0,0,1,0,1,-.5,-.5,.5,0,0,1,0,0,-.5,.5,.5,-1,0,0,1,0,-.5,.5,-.5,-1,0,0,1,1,-.5,-.5,-.5,-1,0,0,0,1,-.5,-.5,-.5,-1,0,0,0,1,-.5,-.5,.5,-1,0,0,0,0,-.5,.5,.5,-1,0,0,1,0,.5,.5,.5,1,0,0,1,0,.5,.5,-.5,1,0,0,1,1,.5,-.5,-.5,1,0,0,0,1,.5,-.5,-.5,1,0,0,0,1,.5,-.5,.5,1,0,0,0,0,.5,.5,.5,1,0,0,1,0,-.5,-.5,-.5,0,-1,0,0,1,.5,-.5,-.5,0,-1,0,1,1,.5,-.5,.5,0,-1,0,1,0,.5,-.5,.5,0,-1,0,1,0,-.5,-.5,.5,0,-1,0,0,0,-.5,-.5,-.5,0,-1,0,0,1,-.5,.5,-.5,0,1,0,0,1,.5,.5,-.5,0,1,0,1,1,.5,.5,.5,0,1,0,1,0,.5,.5,.5,0,1,0,1,0,-.5,.5,.5,0,1,0,0,0,-.5,.5,-.5,0,1,0,0,1])),a(n,"squarePNT",new Float32Array([1,1,0,0,0,1,1,1,1,-1,0,0,0,1,1,0,-1,-1,0,0,0,1,0,0,-1,-1,0,0,0,1,0,0,-1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1])),t.Vertices=n;class i{constructor(){}}a(i,"square",new Uint16Array([0,1,3,1,2,3])),a(i,"cube",new Uint16Array([0,1,3,1,2,3,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20])),t.Indices=i})(P||(P={}));class J{constructor(e,n=null){a(this,"id",{val:null});a(this,"vertexBuffer");a(this,"indexBuffer",null);this.vertexBuffer=e,this.indexBuffer=n;const r=y.GetInstance().gl;this.id={val:r.createVertexArray()},r.bindVertexArray(this.id.val),r.bindBuffer(r.ARRAY_BUFFER,M.Id.val),this.indexBuffer&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,q.Id.val);var s=0;for(const l of this.vertexBuffer.GetUniqueLayout().GetAttributes()){var o=this.vertexBuffer.GetUniqueLayout(),c=M.cachedSize-this.vertexBuffer.GetUniqueVertexData().length*this.vertexBuffer.GetUniqueVertexData().BYTES_PER_ELEMENT;r.vertexAttribPointer(s,l.count,r.FLOAT,!1,o.stride,c+l.offset),r.enableVertexAttribArray(s),s++}r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,null)}GetId(){return this.id}GetVertexBuffer(){return this.vertexBuffer}GetIndexBuffer(){return this.indexBuffer}}class De{constructor(){}}class Z extends De{constructor(){super();a(this,"vertexArray");const n=new M(P.Vertices.cubePNT),i=new Array(new T(3,12,"aPosition"),new T(3,12,"aNormal"),new T(2,8,"aUV")),r=new Q(i);n.SetLayout(r),this.vertexArray=new J(n)}GetVertexArray(){return this.vertexArray}}class je{constructor(e){a(this,"width",0);a(this,"height",0);a(this,"position");a(this,"front",[0,0,-1]);a(this,"up",[0,1,0]);a(this,"right",[1,0,0]);a(this,"fov",45);a(this,"projectionMatrix",A());a(this,"viewMatrix",A());this.position=e}UpdateViewMatrix(){this.right=j(S(),I(S(),this.front,this.up)),this.up=j(S(),I(S(),this.right,this.front)),this.viewMatrix=we(this.viewMatrix,this.position,Ee(S(),this.position,this.front),this.up)}UpdateProjectionMatrix(e,n){this.width=e,this.height=n,be(this.projectionMatrix,Y(this.fov),this.width/this.height,.1,1e3)}ResetFOV(e,n,i){this.fov=e,this.UpdateProjectionMatrix(n,i)}GetPosition(){return this.position}GetProjectionMatrix(){return this.projectionMatrix}GetViewMatrix(){return this.viewMatrix}}class qe{constructor(){a(this,"dragon",new Pe);this.Loop=this.Loop.bind(this)}}class Ve{constructor(){a(this,"gl");this.gl=y.GetInstance().gl,this.gl.enable(this.gl.DEPTH_TEST)}RenderCube(e,n){this.gl.bindVertexArray(e.GetId().val),this.gl.useProgram(n.GetId().val),this.gl.drawArrays(this.gl.TRIANGLES,0,36),this.gl.bindVertexArray(null),this.gl.useProgram(null)}RenderQuad(e,n){this.gl.bindVertexArray(e.GetId().val),this.gl.useProgram(n.GetId().val),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.gl.bindVertexArray(null),this.gl.useProgram(null)}BeginStage(e){e.Begin(),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.clear(this.gl.DEPTH_BUFFER_BIT),this.gl.clearColor(.1,.1,.1,1)}EndStage(e){return e.End(),e.GetTargetTexture()}OnResize(){}}class H{constructor(e){a(this,"framebuffer");this.framebuffer=e}CreateStage(e,n=null){e&&this.framebuffer.CreateFrambuffer(e),n&&this.framebuffer.CreateRenderbuffer(n)}Begin(){const e=y.GetInstance().gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer.GetFramebufferId().val)}End(){const e=y.GetInstance().gl;e.bindFramebuffer(e.FRAMEBUFFER,null)}OnResize(){}GetTargetTexture(){return this.framebuffer.framebufferInfo.targetTexture}Destroy(){this.framebuffer.Destroy()}}class W{constructor(){a(this,"framebufferInfo");a(this,"renderBufferInfo");a(this,"framebufferId");a(this,"renderbufferId");a(this,"gl");this.gl=y.GetInstance().gl;const e=this.gl.createFramebuffer();if(!e)throw new Error("Failed to create framebuffer!");this.framebufferId={val:e},this.renderbufferId={val:null}}CreateFrambuffer(e){this.framebufferInfo=e,e.targetTexture.CreateTextureImage2D({dimension:e.dimension,format:e.format,width:e.width,height:e.height,nChannels:e.nChannels,type:e.type,data:e.data}),e.targetTexture.CreateSampler({dimension:e.dimension,minFilter:e.minFilter,magFilter:e.magFilter,sWrap:e.sWrap,tWrap:e.tWrap});const n=this.gl.COLOR_ATTACHMENT0+e.attachmentUnit;this.gl.bindTexture(e.dimension,e.targetTexture.GetId().val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,n,e.targetTexture.GetTextureInfo().dimension,e.targetTexture.GetId().val,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(e.dimension,null);const i=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);i!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is not complete: "+i.toString(16))}CreateRenderbuffer(e){this.renderBufferInfo=e;const n=this.gl.createRenderbuffer();if(!n)throw new Error("Failed to create framebuffer!");this.renderbufferId={val:n},this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,e.format,e.width,e.height),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,e.attachmentType,this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}Destroy(){this.gl.deleteFramebuffer(this.framebufferId.val),this.gl.deleteRenderbuffer(this.renderbufferId.val),this.framebufferInfo&&this.framebufferInfo.targetTexture.Destroy()}GetFramebufferId(){return this.framebufferId}GetRenderbufferId(){return this.renderbufferId}}class Be{constructor(){a(this,"id");a(this,"gl");this.gl=y.GetInstance().gl;const e=this.gl.createTexture();if(!e)throw new Error("Failed to create texture!");this.id={val:e}}Destroy(){this.gl.deleteTexture(this.id.val)}GetId(){return this.id}}class ze extends Be{constructor(){super();a(this,"textureInfo")}CreateSampler(n){this.gl.bindTexture(n.dimension,this.id.val),this.gl.texParameteri(n.dimension,this.gl.TEXTURE_MIN_FILTER,n.magFilter),this.gl.texParameteri(n.dimension,this.gl.TEXTURE_MAG_FILTER,n.minFilter),this.gl.texParameteri(n.dimension,this.gl.TEXTURE_WRAP_S,n.sWrap),this.gl.texParameteri(n.dimension,this.gl.TEXTURE_WRAP_T,n.tWrap),this.gl.bindTexture(n.dimension,null)}CreateTextureImage2D(n){this.textureInfo=n,this.gl.bindTexture(n.dimension,this.id.val),this.gl.texImage2D(n.dimension,0,n.format,n.width,n.height,0,n.nChannels,n.type,n.data),this.gl.bindTexture(n.dimension,null)}GetTextureInfo(){return this.textureInfo}}class Ne{constructor(e,n){a(this,"quad");this.quad=new P.Square(e,n)}}const Oe=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec2 vUV;

void main() {
    vUV = aUV;
    gl_Position = vec4(aPosition, 1.0);
}`,ke=`#version 300 es
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
}`;class _e{constructor(){a(this,"renderer",new Ve);a(this,"stages",new Map);a(this,"hdrPass",new Ne(Oe,ke));a(this,"gl");a(this,"width",0);a(this,"height",0);const e=y.GetInstance();this.gl=e.gl,window.addEventListener("resize",()=>this.OnResize())}Update(e,n,i,r){this.renderer.BeginStage(this.stages.get("SceneStage")),(n.width!=this.width||n.height!=this.height)&&(n.UpdateProjectionMatrix(this.width,this.height),n.UpdateViewMatrix());for(const o of e.GetAllEntities()){const c=o.Get(Z),l=o.Get(L),g=o.Get(X);o.Update(n),g&&g.func(o,i,r),c&&l&&this.renderer.RenderCube(c.GetVertexArray(),l.GetShader())}const s=this.renderer.EndStage(this.stages.get("SceneStage"));this.gl.bindTexture(s.GetTextureInfo().dimension,s.GetId().val),this.gl.useProgram(this.hdrPass.quad.GetShader().GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.hdrPass.quad.GetShader().GetId().val,"tex"),0),this.renderer.RenderQuad(this.hdrPass.quad.GetVertexArray(),this.hdrPass.quad.GetShader()),this.gl.bindTexture(s.GetTextureInfo().dimension,null),this.gl.useProgram(null)}SetSizes(e,n){(this.width!=e||this.height!=n)&&this.Resize(e,n)}Resize(e,n){this.width=e,this.height=n;const i=y.GetInstance();i.canvas.width=this.width,i.canvas.height=this.height,i.gl.viewport(0,0,this.width,this.height);const r={targetTexture:new ze,dimension:this.gl.TEXTURE_2D,format:this.gl.RGB,width:this.width,height:this.height,nChannels:this.gl.RGB,type:this.gl.UNSIGNED_BYTE,data:null,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT,attachmentUnit:0},s={width:this.width,height:this.height,format:this.gl.DEPTH24_STENCIL8,attachmentType:this.gl.DEPTH_STENCIL_ATTACHMENT};let o=this.stages.get("SceneStage");o&&o.Destroy(),o=new H(new W),o.CreateStage(r,s),this.stages.set("SceneStage",o);let c=this.stages.get("HDRStage");c&&c.Destroy(),c=new H(new W),this.stages.set("HDRStage",c)}OnResize(){var e=window.innerWidth,n=window.innerHeight,i=document.querySelector("#canvas");(i.width!=e||i.height!=n)&&(i.width=e,i.height=n,this.Resize(i.width,i.height))}}function He(t,e,n){const i=t.Get(C);if(i){const r=F(1,-1,0),s=e*45*5e-4,o=K(i.rotation,r,Y(s));i.rotation=V(o,o)}}class We extends qe{constructor(){super(),this.dragon.camera=new je(F(0,0,5));const e=this.dragon.registry.CreateEntity();e.Set(L),e.Set(Z),e.Set(C),e.Set(X,He),this.dragon.graphics=new _e,this.dragon.graphics.SetSizes(window.innerWidth,window.innerHeight),this.dragon.SetAnimationLoop(this.Loop)}Loop(e,n){this.dragon.Update()}}class Ye{constructor(){a(this,"frontend");a(this,"script");this.frontend=new he,this.script=new We}}new Ye;
