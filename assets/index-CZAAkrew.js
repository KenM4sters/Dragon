var ni=Object.defineProperty;var si=(r,t,e)=>t in r?ni(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>si(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const ri=`<section class="home">
    <div class="landing">
        <div class="navbar">
            <!-- <h4 class="landing-title"> samuel brookman </h4> -->
            <div class="navbar-items-container">
                <span class="navbar-item"><a href="https://github.com/KenM4sters/Silverback" target="_blank"> Github </a></span>
                <span class="navbar-item"><a href="https://discord.com/users/1156685102101839962" target="_blank"> Discord </a></span>
                <span class="navbar-item"><a href="mailto:sam.brookman414@hotmail.com"> Contact </a></span>
            </div>
            <div class="about-toggle inactive-toggle">
                <i class="fa-regular fa-comment"></i>
            </div>
        </div>
        <div>
            <div class="scene-view-container">
                <div class="scene-view">
                    <span class="scene-view-slider"></span>
                    <div class="scene-view-icon camera-view"><i class="fa-solid fa-camera"></i></div>
                    <div class="scene-view-icon satellite-view"><i class="fa-solid fa-satellite"></i></div>
                </div>
            </div>
        </div>
        <div class="about-container hide-about">
            <div class="about-header">
                <p1>About this scene</p1>
            </div>
            <div class="about-info">
                <p1>
                    This scene was created using my own 3D web-based graphics engine that's written in TS and
                    uses the WebGL api for graphics rendering.<br><br>
                </p1>
                <p1>
                    Eventhough I'm more comfortable working with systems languages like C and C++,
                    I do really enjoy exploring different technologies and being able to 
                    combine real-time graphics rendering with the aesthetics and portability of 
                    the web is an amazing luxury, and something that I'm keen on exploring further,
                    even if just recreationally.
                </p1>
                <h1> Features </h1>
                <ul>
                    <li> HDR rendering </li>
                    <li> PBR pipeline with environment shading </li>
                    <li> Multipass postprocessing pipeline including Bloom </li>
                    <li> Anti-aliasing using a combination of FXAA and MSAA </li>
                    <li> Feature-rich scene customization </li>
                    <li> Shadows </li>
                </ul>
            </div>
        </div>
        <div class="projects-hint">
            <p1> scroll to view projects </p1>
        </div>
    </div>
</section>`,ai=`<section class="projects">
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
</section>`,oi=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a class="code-link" href="https://github.com/KenM4sters/Mammoth2D" target="_blank">view here</a>
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
`,hi=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a class="code-link" href="https://github.com/KenM4sters/Silverback" target="_blank">view here</a>
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
</div>`,li=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>Typescript</p4>
            </div>
            <div class="project-meta-data"> 
                <p1 >CODE</p1>
                <a class="code-link" href="https://github.com/KenM4sters/Dragon" target="_blank">view here</a>
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
</div>`,ci=`
<div class="projects-container"> 
    <div class="project-info-container">
        <div class="project-meta-data-container">
            <div class="project-meta-data">
                <p1>LANGUAGES</p1>
                <p4>C++</p4>
            </div>
            <div class="project-meta-data"> 
                <p1>CODE</p1>
                <a class="code-link" href="https://github.com/KenM4sters/Katana" target="_blank">view here</a>
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
                Reaction is a simple physics library intended to be used for efficient 
                collision detection and resolution in 2D games. 
            </p1>
            <p1>
                This is my most recent project, and is currently undergoing lots of
                modifications as I learn more about the complex space of integrating 
                realistic collisions within video games at an acceptable frame rate.
            </p1>
            <p1>
                I have huge plans for this project as integrating realistic mechanics 
                into a graphics application, whether it be a physics-specific simulation or a 
                video game, has always been a huge ambition of mine. I plan on giving it 
                much more time once my largest project, Mammoth2D, is in a more suitable condition
                to be sidelined, and hope to achieve some interesting dynamics such as rope and 
                cloth.
            </p1>
        </div>
    </div>
    <div class="project-image-container">
        <img class="project-image" src="terrain.png" alt="2d platformer">
    </div>
</div>`;class di{constructor(){u(this,"mammoth");u(this,"silverback");u(this,"dragon");u(this,"reaction");this.mammoth=oi,this.silverback=hi,this.dragon=li,this.reaction=ci}}class ui{constructor(){u(this,"projects");u(this,"viewingAbout",!1);let t=document.querySelector("#app"),e=document.createElement("div"),i=document.createElement("div");e.innerHTML=ri,i.innerHTML=ai,t.appendChild(e),t.appendChild(i),this.projects=new di;let n=document.querySelector(".projects-wrapper");this.ViewProject(n,document.querySelector(".mammoth2d"),this.projects.mammoth),window.addEventListener("click",h=>{const o=h.target;o.classList.contains("mammoth2d")?this.ViewProject(n,o,this.projects.mammoth):o.classList.contains("silverback")?this.ViewProject(n,o,this.projects.silverback):o.classList.contains("dragon")?this.ViewProject(n,o,this.projects.dragon):o.classList.contains("reaction")&&this.ViewProject(n,o,this.projects.reaction)});let s=document.querySelector(".about-toggle"),a=document.querySelector(".about-container");s.addEventListener("click",()=>{this.viewingAbout?(this.viewingAbout=!1,a.classList.remove("show-about"),a.classList.add("hide-about"),s.classList.remove("active-toggle"),s.classList.add("inactive-toggle")):(this.viewingAbout=!0,a.classList.remove("hide-about"),a.classList.add("show-about"),s.classList.remove("inactive-toggle"),s.classList.add("active-toggle"))})}ViewProject(t,e,i){if(e.classList.add("selected-project"),e&&e.parentElement){const n=Array.from(e.parentElement.children).filter(s=>s!==e);for(let s of n)s.classList.remove("selected-project")}t.innerHTML=i}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oe="165",He=300,we=1e3,bt=1001,Te=1002,Ot=1003,Et=1006,je=1008,mi=1009,gi=1014,Qt=1015,Lt=1016,fi=1020,pi=1023,$t=1026,be=1027,xi="",vi="srgb-linear",yi=515,Gt=2e3,Ee=2001;class We{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const N=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function le(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(N[r&255]+N[r>>8&255]+N[r>>16&255]+N[r>>24&255]+"-"+N[t&255]+N[t>>8&255]+"-"+N[t>>16&15|64]+N[t>>24&255]+"-"+N[e&63|128]+N[e>>8&255]+"-"+N[e>>16&255]+N[e>>24&255]+N[i&255]+N[i>>8&255]+N[i>>16&255]+N[i>>24&255]).toLowerCase()}function Y(r,t,e){return Math.max(t,Math.min(e,r))}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Y(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,i,n,s,a,h,o,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,h,o,l)}set(t,e,i,n,s,a,h,o,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=h,c[3]=e,c[4]=s,c[5]=o,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],h=i[3],o=i[6],l=i[1],c=i[4],d=i[7],g=i[2],m=i[5],f=i[8],p=n[0],v=n[3],x=n[6],b=n[1],R=n[4],M=n[7],E=n[2],S=n[5],w=n[8];return s[0]=a*p+h*b+o*E,s[3]=a*v+h*R+o*S,s[6]=a*x+h*M+o*w,s[1]=l*p+c*b+d*E,s[4]=l*v+c*R+d*S,s[7]=l*x+c*M+d*w,s[2]=g*p+m*b+f*E,s[5]=g*v+m*R+f*S,s[8]=g*x+m*M+f*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],h=t[5],o=t[6],l=t[7],c=t[8];return e*a*c-e*h*l-i*s*c+i*h*o+n*s*l-n*a*o}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],h=t[5],o=t[6],l=t[7],c=t[8],d=c*a-h*l,g=h*o-c*s,m=l*s-a*o,f=e*d+i*g+n*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/f;return t[0]=d*p,t[1]=(n*l-c*i)*p,t[2]=(h*i-n*a)*p,t[3]=g*p,t[4]=(c*e-n*o)*p,t[5]=(n*s-h*e)*p,t[6]=m*p,t[7]=(i*o-l*e)*p,t[8]=(a*e-i*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,h){const o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*a+l*h)+a+t,-n*l,n*o,-n*(-l*a+o*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Zt.makeScale(t,e)),this}rotate(t){return this.premultiply(Zt.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zt.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zt=new Ft;function Me(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kt(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}let pt;class wi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pt===void 0&&(pt=Me("canvas")),pt.width=t.width,pt.height=t.height;const i=pt.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=pt}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Me("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Kt(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kt(e[i]/255)*255):e[i]=Kt(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ti=0;class bi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=le(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,h=n.length;a<h;a++)n[a].isDataTexture?s.push(Jt(n[a].image)):s.push(Jt(n[a]))}else s=Jt(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Jt(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wi.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ei=0,Ct=class Nt extends We{constructor(t=Nt.DEFAULT_IMAGE,e=Nt.DEFAULT_MAPPING,i=bt,n=bt,s=Et,a=je,h=pi,o=mi,l=Nt.DEFAULT_ANISOTROPY,c=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ei++}),this.uuid=le(),this.name="",this.source=new bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=h,this.internalFormat=null,this.type=o,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==He)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case we:t.x=t.x-Math.floor(t.x);break;case bt:t.x=t.x<0?0:1;break;case Te:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case we:t.y=t.y-Math.floor(t.y);break;case bt:t.y=t.y<0?0:1;break;case Te:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=He;Ct.DEFAULT_ANISOTROPY=1;class Ut{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,h){let o=i[n+0],l=i[n+1],c=i[n+2],d=i[n+3];const g=s[a+0],m=s[a+1],f=s[a+2],p=s[a+3];if(h===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d;return}if(h===1){t[e+0]=g,t[e+1]=m,t[e+2]=f,t[e+3]=p;return}if(d!==p||o!==g||l!==m||c!==f){let v=1-h;const x=o*g+l*m+c*f+d*p,b=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const E=Math.sqrt(R),S=Math.atan2(E,x*b);v=Math.sin(v*S)/E,h=Math.sin(h*S)/E}const M=h*b;if(o=o*v+g*M,l=l*v+m*M,c=c*v+f*M,d=d*v+p*M,v===1-h){const E=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=E,l*=E,c*=E,d*=E}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const h=i[n],o=i[n+1],l=i[n+2],c=i[n+3],d=s[a],g=s[a+1],m=s[a+2],f=s[a+3];return t[e]=h*f+c*d+o*m-l*g,t[e+1]=o*f+c*g+l*d-h*m,t[e+2]=l*f+c*m+h*g-o*d,t[e+3]=c*f-h*d-o*g-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,h=Math.cos,o=Math.sin,l=h(i/2),c=h(n/2),d=h(s/2),g=o(i/2),m=o(n/2),f=o(s/2);switch(a){case"XYZ":this._x=g*c*d+l*m*f,this._y=l*m*d-g*c*f,this._z=l*c*f+g*m*d,this._w=l*c*d-g*m*f;break;case"YXZ":this._x=g*c*d+l*m*f,this._y=l*m*d-g*c*f,this._z=l*c*f-g*m*d,this._w=l*c*d+g*m*f;break;case"ZXY":this._x=g*c*d-l*m*f,this._y=l*m*d+g*c*f,this._z=l*c*f+g*m*d,this._w=l*c*d-g*m*f;break;case"ZYX":this._x=g*c*d-l*m*f,this._y=l*m*d+g*c*f,this._z=l*c*f-g*m*d,this._w=l*c*d+g*m*f;break;case"YZX":this._x=g*c*d+l*m*f,this._y=l*m*d+g*c*f,this._z=l*c*f-g*m*d,this._w=l*c*d-g*m*f;break;case"XZY":this._x=g*c*d-l*m*f,this._y=l*m*d-g*c*f,this._z=l*c*f+g*m*d,this._w=l*c*d+g*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],h=e[5],o=e[9],l=e[2],c=e[6],d=e[10],g=i+h+d;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(c-o)*m,this._y=(s-l)*m,this._z=(a-n)*m}else if(i>h&&i>d){const m=2*Math.sqrt(1+i-h-d);this._w=(c-o)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+l)/m}else if(h>d){const m=2*Math.sqrt(1+h-i-d);this._w=(s-l)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(o+c)/m}else{const m=2*Math.sqrt(1+d-i-h);this._w=(a-n)/m,this._x=(s+l)/m,this._y=(o+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Y(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,h=e._x,o=e._y,l=e._z,c=e._w;return this._x=i*c+a*h+n*l-s*o,this._y=n*c+a*o+s*h-i*l,this._z=s*c+a*l+i*o-n*h,this._w=a*c-i*h-n*o-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let h=a*t._w+i*t._x+n*t._y+s*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const o=1-h*h;if(o<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,h),d=Math.sin((1-e)*c)/l,g=Math.sin(e*c)/l;return this._w=a*d+this._w*g,this._x=i*d+this._x*g,this._y=n*d+this._y*g,this._z=s*d+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_e.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_e.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,h=t.z,o=t.w,l=2*(a*n-h*i),c=2*(h*e-s*n),d=2*(s*i-a*e);return this.x=e+o*l+a*d-h*c,this.y=i+o*c+h*l-s*d,this.z=n+o*d+s*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,h=e.y,o=e.z;return this.x=n*o-s*h,this.y=s*a-i*o,this.z=i*h-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return te.copy(this).projectOnVector(t),this.sub(te)}reflect(t){return this.sub(te.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Y(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const te=new D,_e=new Ut;class nt{constructor(t,e,i,n,s,a,h,o,l,c,d,g,m,f,p,v){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,h,o,l,c,d,g,m,f,p,v)}set(t,e,i,n,s,a,h,o,l,c,d,g,m,f,p,v){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=n,x[1]=s,x[5]=a,x[9]=h,x[13]=o,x[2]=l,x[6]=c,x[10]=d,x[14]=g,x[3]=m,x[7]=f,x[11]=p,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/xt.setFromMatrixColumn(t,0).length(),s=1/xt.setFromMatrixColumn(t,1).length(),a=1/xt.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),h=Math.sin(i),o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const g=a*c,m=a*d,f=h*c,p=h*d;e[0]=o*c,e[4]=-o*d,e[8]=l,e[1]=m+f*l,e[5]=g-p*l,e[9]=-h*o,e[2]=p-g*l,e[6]=f+m*l,e[10]=a*o}else if(t.order==="YXZ"){const g=o*c,m=o*d,f=l*c,p=l*d;e[0]=g+p*h,e[4]=f*h-m,e[8]=a*l,e[1]=a*d,e[5]=a*c,e[9]=-h,e[2]=m*h-f,e[6]=p+g*h,e[10]=a*o}else if(t.order==="ZXY"){const g=o*c,m=o*d,f=l*c,p=l*d;e[0]=g-p*h,e[4]=-a*d,e[8]=f+m*h,e[1]=m+f*h,e[5]=a*c,e[9]=p-g*h,e[2]=-a*l,e[6]=h,e[10]=a*o}else if(t.order==="ZYX"){const g=a*c,m=a*d,f=h*c,p=h*d;e[0]=o*c,e[4]=f*l-m,e[8]=g*l+p,e[1]=o*d,e[5]=p*l+g,e[9]=m*l-f,e[2]=-l,e[6]=h*o,e[10]=a*o}else if(t.order==="YZX"){const g=a*o,m=a*l,f=h*o,p=h*l;e[0]=o*c,e[4]=p-g*d,e[8]=f*d+m,e[1]=d,e[5]=a*c,e[9]=-h*c,e[2]=-l*c,e[6]=m*d+f,e[10]=g-p*d}else if(t.order==="XZY"){const g=a*o,m=a*l,f=h*o,p=h*l;e[0]=o*c,e[4]=-d,e[8]=l*c,e[1]=g*d+p,e[5]=a*c,e[9]=m*d-f,e[2]=f*d-m,e[6]=h*c,e[10]=p*d+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mi,t,_i)}lookAt(t,e,i){const n=this.elements;return H.subVectors(t,e),H.lengthSq()===0&&(H.z=1),H.normalize(),at.crossVectors(i,H),at.lengthSq()===0&&(Math.abs(i.z)===1?H.x+=1e-4:H.z+=1e-4,H.normalize(),at.crossVectors(i,H)),at.normalize(),zt.crossVectors(H,at),n[0]=at.x,n[4]=zt.x,n[8]=H.x,n[1]=at.y,n[5]=zt.y,n[9]=H.y,n[2]=at.z,n[6]=zt.z,n[10]=H.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],h=i[4],o=i[8],l=i[12],c=i[1],d=i[5],g=i[9],m=i[13],f=i[2],p=i[6],v=i[10],x=i[14],b=i[3],R=i[7],M=i[11],E=i[15],S=n[0],w=n[4],y=n[8],_=n[12],C=n[1],I=n[5],G=n[9],L=n[13],T=n[2],z=n[6],F=n[10],W=n[14],lt=n[3],q=n[7],O=n[11],ft=n[15];return s[0]=a*S+h*C+o*T+l*lt,s[4]=a*w+h*I+o*z+l*q,s[8]=a*y+h*G+o*F+l*O,s[12]=a*_+h*L+o*W+l*ft,s[1]=c*S+d*C+g*T+m*lt,s[5]=c*w+d*I+g*z+m*q,s[9]=c*y+d*G+g*F+m*O,s[13]=c*_+d*L+g*W+m*ft,s[2]=f*S+p*C+v*T+x*lt,s[6]=f*w+p*I+v*z+x*q,s[10]=f*y+p*G+v*F+x*O,s[14]=f*_+p*L+v*W+x*ft,s[3]=b*S+R*C+M*T+E*lt,s[7]=b*w+R*I+M*z+E*q,s[11]=b*y+R*G+M*F+E*O,s[15]=b*_+R*L+M*W+E*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],h=t[5],o=t[9],l=t[13],c=t[2],d=t[6],g=t[10],m=t[14],f=t[3],p=t[7],v=t[11],x=t[15];return f*(+s*o*d-n*l*d-s*h*g+i*l*g+n*h*m-i*o*m)+p*(+e*o*m-e*l*g+s*a*g-n*a*m+n*l*c-s*o*c)+v*(+e*l*d-e*h*m-s*a*d+i*a*m+s*h*c-i*l*c)+x*(-n*h*c-e*o*d+e*h*g+n*a*d-i*a*g+i*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],h=t[5],o=t[6],l=t[7],c=t[8],d=t[9],g=t[10],m=t[11],f=t[12],p=t[13],v=t[14],x=t[15],b=d*v*l-p*g*l+p*o*m-h*v*m-d*o*x+h*g*x,R=f*g*l-c*v*l-f*o*m+a*v*m+c*o*x-a*g*x,M=c*p*l-f*d*l+f*h*m-a*p*m-c*h*x+a*d*x,E=f*d*o-c*p*o-f*h*g+a*p*g+c*h*v-a*d*v,S=e*b+i*R+n*M+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=b*w,t[1]=(p*g*s-d*v*s-p*n*m+i*v*m+d*n*x-i*g*x)*w,t[2]=(h*v*s-p*o*s+p*n*l-i*v*l-h*n*x+i*o*x)*w,t[3]=(d*o*s-h*g*s-d*n*l+i*g*l+h*n*m-i*o*m)*w,t[4]=R*w,t[5]=(c*v*s-f*g*s+f*n*m-e*v*m-c*n*x+e*g*x)*w,t[6]=(f*o*s-a*v*s-f*n*l+e*v*l+a*n*x-e*o*x)*w,t[7]=(a*g*s-c*o*s+c*n*l-e*g*l-a*n*m+e*o*m)*w,t[8]=M*w,t[9]=(f*d*s-c*p*s-f*i*m+e*p*m+c*i*x-e*d*x)*w,t[10]=(a*p*s-f*h*s+f*i*l-e*p*l-a*i*x+e*h*x)*w,t[11]=(c*h*s-a*d*s-c*i*l+e*d*l+a*i*m-e*h*m)*w,t[12]=E*w,t[13]=(c*p*n-f*d*n+f*i*g-e*p*g-c*i*v+e*d*v)*w,t[14]=(f*h*n-a*p*n-f*i*o+e*p*o+a*i*v-e*h*v)*w,t[15]=(a*d*n-c*h*n+c*i*o-e*d*o-a*i*g+e*h*g)*w,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,h=t.y,o=t.z,l=s*a,c=s*h;return this.set(l*a+i,l*h-n*o,l*o+n*h,0,l*h+n*o,c*h+i,c*o-n*a,0,l*o-n*h,c*o+n*a,s*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,h=e._z,o=e._w,l=s+s,c=a+a,d=h+h,g=s*l,m=s*c,f=s*d,p=a*c,v=a*d,x=h*d,b=o*l,R=o*c,M=o*d,E=i.x,S=i.y,w=i.z;return n[0]=(1-(p+x))*E,n[1]=(m+M)*E,n[2]=(f-R)*E,n[3]=0,n[4]=(m-M)*S,n[5]=(1-(g+x))*S,n[6]=(v+b)*S,n[7]=0,n[8]=(f+R)*w,n[9]=(v-b)*w,n[10]=(1-(g+p))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=xt.set(n[0],n[1],n[2]).length();const a=xt.set(n[4],n[5],n[6]).length(),h=xt.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],X.copy(this);const l=1/s,c=1/a,d=1/h;return X.elements[0]*=l,X.elements[1]*=l,X.elements[2]*=l,X.elements[4]*=c,X.elements[5]*=c,X.elements[6]*=c,X.elements[8]*=d,X.elements[9]*=d,X.elements[10]*=d,e.setFromRotationMatrix(X),i.x=s,i.y=a,i.z=h,this}makePerspective(t,e,i,n,s,a,h=Gt){const o=this.elements,l=2*s/(e-t),c=2*s/(i-n),d=(e+t)/(e-t),g=(i+n)/(i-n);let m,f;if(h===Gt)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else if(h===Ee)m=-a/(a-s),f=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return o[0]=l,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=c,o[9]=g,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,n,s,a,h=Gt){const o=this.elements,l=1/(e-t),c=1/(i-n),d=1/(a-s),g=(e+t)*l,m=(i+n)*c;let f,p;if(h===Gt)f=(a+s)*d,p=-2*d;else if(h===Ee)f=s*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-g,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=p,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const xt=new D,X=new nt,Mi=new D(0,0,0),_i=new D(1,1,1),at=new D,zt=new D,H=new D,Re=new nt,Ae=new Ut;class Xt{constructor(t=0,e=0,i=0,n=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],h=n[8],o=n[1],l=n[5],c=n[9],d=n[2],g=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Y(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Y(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(h,m),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Y(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Y(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Y(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(h,m));break;case"XZY":this._z=Math.asin(-Y(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(h,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Re.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Re,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ae.setFromEuler(this),this.setFromQuaternion(Ae,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class Ri{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ai=0;const Se=new D,vt=new Ut,K=new nt,Pt=new D,Rt=new D,Si=new D,Fi=new Ut,Fe=new D(1,0,0),Ce=new D(0,1,0),Ue=new D(0,0,1),Ie={type:"added"},Ci={type:"removed"},yt={type:"childadded",child:null},ee={type:"childremoved",child:null};class ut extends We{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ai++}),this.uuid=le(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const t=new D,e=new Xt,i=new Ut,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ft}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ri,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vt.setFromAxisAngle(t,e),this.quaternion.multiply(vt),this}rotateOnWorldAxis(t,e){return vt.setFromAxisAngle(t,e),this.quaternion.premultiply(vt),this}rotateX(t){return this.rotateOnAxis(Fe,t)}rotateY(t){return this.rotateOnAxis(Ce,t)}rotateZ(t){return this.rotateOnAxis(Ue,t)}translateOnAxis(t,e){return Se.copy(t).applyQuaternion(this.quaternion),this.position.add(Se.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fe,t)}translateY(t){return this.translateOnAxis(Ce,t)}translateZ(t){return this.translateOnAxis(Ue,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(K.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Pt.copy(t):Pt.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Rt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?K.lookAt(Rt,Pt,this.up):K.lookAt(Pt,Rt,this.up),this.quaternion.setFromRotationMatrix(K),n&&(K.extractRotation(n.matrixWorld),vt.setFromRotationMatrix(K),this.quaternion.premultiply(vt.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ie),yt.child=t,this.dispatchEvent(yt),yt.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ci),ee.child=t,this.dispatchEvent(ee),ee.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),K.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),K.multiply(t.parent.matrixWorld)),t.applyMatrix4(K),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ie),yt.child=t,this.dispatchEvent(yt),yt.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rt,t,Si),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rt,Fi,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const h=n[s];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(h,o){return h[o.uuid]===void 0&&(h[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const o=h.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const d=o[l];s(t.shapes,d)}else s(t.shapes,o)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let o=0,l=this.material.length;o<l;o++)h.push(s(t.materials,this.material[o]));n.material=h}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let h=0;h<this.children.length;h++)n.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let h=0;h<this.animations.length;h++){const o=this.animations[h];n.animations.push(s(t.animations,o))}}if(e){const h=a(t.geometries),o=a(t.materials),l=a(t.textures),c=a(t.images),d=a(t.shapes),g=a(t.skeletons),m=a(t.animations),f=a(t.nodes);h.length>0&&(i.geometries=h),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),g.length>0&&(i.skeletons=g),m.length>0&&(i.animations=m),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(h){const o=[];for(const l in h){const c=h[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ut.DEFAULT_UP=new D(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const it=Ui();function Ui(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let o=0;o<256;++o){const l=o-127;l<-27?(i[o]=0,i[o|256]=32768,n[o]=24,n[o|256]=24):l<-14?(i[o]=1024>>-l-14,i[o|256]=1024>>-l-14|32768,n[o]=-l-1,n[o|256]=-l-1):l<=15?(i[o]=l+15<<10,i[o|256]=l+15<<10|32768,n[o]=13,n[o|256]=13):l<128?(i[o]=31744,i[o|256]=64512,n[o]=24,n[o|256]=24):(i[o]=31744,i[o|256]=64512,n[o]=13,n[o|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),h=new Uint32Array(64);for(let o=1;o<1024;++o){let l=o<<13,c=0;for(;!(l&8388608);)l<<=1,c-=8388608;l&=-8388609,c+=947912704,s[o]=l|c}for(let o=1024;o<2048;++o)s[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(h[o]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:h}}function Ii(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Y(r,-65504,65504),it.floatView[0]=r;const t=it.uint32View[0],e=t>>23&511;return it.baseTable[e]+((t&8388607)>>it.shiftTable[e])}function Li(r){const t=r>>10;return it.uint32View[0]=it.mantissaTable[it.offsetTable[t]+(r&1023)]+it.exponentTable[t],it.floatView[0]}const Dt={toHalfFloat:Ii,fromHalfFloat:Li};class Gi extends Ct{constructor(t,e,i,n,s,a,h,o,l,c=$t){if(c!==$t&&c!==be)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$t&&(i=gi),i===void 0&&c===be&&(i=fi),super(null,n,s,a,h,o,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:Ot,this.minFilter=o!==void 0?o:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zi=new Gi(1,1);zi.compareFunction=yi;class Pi extends Ct{constructor(t=null,e=1,i=1,n,s,a,h,o,l=Ot,c=Ot,d,g){super(null,a,h,o,l,c,n,s,d,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Le={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Di{constructor(t,e,i){const n=this;let s=!1,a=0,h=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){h++,s===!1&&n.onStart!==void 0&&n.onStart(c,a,h),s=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,h),a===h&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,g=l.length;d<g;d+=2){const m=l[d],f=l[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return f}return null}}}const Bi=new Di;class ce{constructor(t){this.manager=t!==void 0?t:Bi,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ce.DEFAULT_MATERIAL_NAME="__DEFAULT";const J={};class Ni extends Error{constructor(t,e){super(t),this.response=e}}class Vi extends ce{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Le.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(J[t]!==void 0){J[t].push({onLoad:e,onProgress:i,onError:n});return}J[t]=[],J[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,o=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=J[t],d=l.body.getReader(),g=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=g?parseInt(g):0,f=m!==0;let p=0;const v=new ReadableStream({start(x){b();function b(){d.read().then(({done:R,value:M})=>{if(R)x.close();else{p+=M.byteLength;const E=new ProgressEvent("progress",{lengthComputable:f,loaded:p,total:m});for(let S=0,w=c.length;S<w;S++){const y=c[S];y.onProgress&&y.onProgress(E)}x.enqueue(M),b()}},R=>{x.error(R)})}}});return new Response(v)}else throw new Ni(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,h));case"json":return l.json();default:if(h===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(h),g=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(g);return l.arrayBuffer().then(f=>m.decode(f))}}}).then(l=>{Le.add(t,l);const c=J[t];delete J[t];for(let d=0,g=c.length;d<g;d++){const m=c[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=J[t];if(c===void 0)throw this.manager.itemError(t),l;delete J[t];for(let d=0,g=c.length;d<g;d++){const m=c[d];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ki extends ce{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new Pi,h=new Vi(this.manager);return h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setPath(this.path),h.setWithCredentials(s.withCredentials),h.load(t,function(o){let l;try{l=s.parse(o)}catch(c){if(n!==void 0)n(c);else{console.error(c);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:bt,a.wrapT=l.wrapT!==void 0?l.wrapT:bt,a.magFilter=l.magFilter!==void 0?l.magFilter:Et,a.minFilter=l.minFilter!==void 0?l.minFilter:Et,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=je),l.mipmapCount===1&&(a.minFilter=Et),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,e&&e(a,l)},i,n),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oe}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oe);class Oi extends ki{constructor(t){super(t),this.type=Lt}parse(t){const a=function(y,_){switch(y){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},c=`
`,d=function(y,_,C){_=_||1024;let G=y.pos,L=-1,T=0,z="",F=String.fromCharCode.apply(null,new Uint16Array(y.subarray(G,G+128)));for(;0>(L=F.indexOf(c))&&T<_&&G<y.byteLength;)z+=F,T+=F.length,G+=128,F+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(G,G+128)));return-1<L?(y.pos+=T+L+1,z+F.slice(0,L)):!1},g=function(y){const _=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,G=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,F;for((y.pos>=y.byteLength||!(z=d(y)))&&a(1,"no header found"),(F=z.match(_))||a(3,"bad initial token"),T.valid|=1,T.programtype=F[1],T.string+=z+`
`;z=d(y),z!==!1;){if(T.string+=z+`
`,z.charAt(0)==="#"){T.comments+=z+`
`;continue}if((F=z.match(C))&&(T.gamma=parseFloat(F[1])),(F=z.match(I))&&(T.exposure=parseFloat(F[1])),(F=z.match(G))&&(T.valid|=2,T.format=F[1]),(F=z.match(L))&&(T.valid|=4,T.height=parseInt(F[1],10),T.width=parseInt(F[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2||a(3,"missing format specifier"),T.valid&4||a(3,"missing image size specifier"),T},m=function(y,_,C){const I=_;if(I<8||I>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);I!==(y[2]<<8|y[3])&&a(3,"wrong scanline width");const G=new Uint8Array(4*_*C);G.length||a(4,"unable to allocate buffer space");let L=0,T=0;const z=4*I,F=new Uint8Array(4),W=new Uint8Array(z);let lt=C;for(;lt>0&&T<y.byteLength;){T+4>y.byteLength&&a(1),F[0]=y[T++],F[1]=y[T++],F[2]=y[T++],F[3]=y[T++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=I)&&a(3,"bad rgbe scanline format");let q=0,O;for(;q<z&&T<y.byteLength;){O=y[T++];const $=O>128;if($&&(O-=128),(O===0||q+O>z)&&a(3,"bad scanline data"),$){const Z=y[T++];for(let ye=0;ye<O;ye++)W[q++]=Z}else W.set(y.subarray(T,T+O),q),q+=O,T+=O}const ft=I;for(let $=0;$<ft;$++){let Z=0;G[L]=W[$+Z],Z+=I,G[L+1]=W[$+Z],Z+=I,G[L+2]=W[$+Z],Z+=I,G[L+3]=W[$+Z],L+=4}lt--}return G},f=function(y,_,C,I){const G=y[_+3],L=Math.pow(2,G-128)/255;C[I+0]=y[_+0]*L,C[I+1]=y[_+1]*L,C[I+2]=y[_+2]*L,C[I+3]=1},p=function(y,_,C,I){const G=y[_+3],L=Math.pow(2,G-128)/255;C[I+0]=Dt.toHalfFloat(Math.min(y[_+0]*L,65504)),C[I+1]=Dt.toHalfFloat(Math.min(y[_+1]*L,65504)),C[I+2]=Dt.toHalfFloat(Math.min(y[_+2]*L,65504)),C[I+3]=Dt.toHalfFloat(1)},v=new Uint8Array(t);v.pos=0;const x=g(v),b=x.width,R=x.height,M=m(v.subarray(v.pos),b,R);let E,S,w;switch(this.type){case Qt:w=M.length/4;const y=new Float32Array(w*4);for(let C=0;C<w;C++)f(M,C*4,y,C*4);E=y,S=Qt;break;case Lt:w=M.length/4;const _=new Uint16Array(w*4);for(let C=0;C<w;C++)p(M,C*4,_,C*4);E=_,S=Lt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:R,data:E,header:x.string,gamma:x.gamma,exposure:x.exposure,type:S}}setDataType(t){return this.type=t,this}load(t,e,i,n){function s(a,h){switch(a.type){case Qt:case Lt:a.colorSpace=vi,a.minFilter=Et,a.magFilter=Et,a.generateMipmaps=!1,a.flipY=!0;break}e&&e(a,h)}return super.load(t,s,i,n)}}const Wt=class Wt{constructor(){u(this,"textures",new Map);u(this,"status",0)}LoadAllAssets(t){const e=new Oi;for(const i of Ge)if(i.type=="LDR"){const n=new Image;n.src=i.path,n.style.transform="'rotateY(180deg)'",n.addEventListener("load",()=>{this.textures.set(i.name,n),this.UpdateStatus(t)})}else i.type=="HDR"&&e.load(i.path,n=>{this.textures.set(i.name,n.image),this.UpdateStatus(t)})}UpdateStatus(t){this.status+=1,this.status==Ge.length&&t()}GetTexture(t){return this.textures.get(t)}static GetInstance(){return this.instance||(this.instance=new Wt),this.instance}};u(Wt,"instance");let Ht=Wt;const Ge=[{name:"ocean",type:"HDR",path:"./ocean.hdr"}],ct=class ct{constructor(){u(this,"canvas");u(this,"gl");if(this.canvas=document.getElementById("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gl=this.canvas.getContext("webgl2",{antialias:!0}),!this.gl)throw new Error("webgl context is not available!");var t=this.gl.getExtension("EXT_color_buffer_float");if(!t)throw new Error("EXT_color_buffer_float is not supported");var e=this.gl.getExtension("OES_texture_float_linear");if(!e)throw new Error("OES_texture_float_linear is not supported")}static GetInstance(){return ct.instance||(ct.instance=new ct),ct.instance}};u(ct,"instance",null);let P=ct;class Hi{constructor(){u(this,"gl");this.gl=P.GetInstance().gl,this.gl.enable(this.gl.DEPTH_TEST)}Draw(t,e,i){this.gl.bindVertexArray(t.GetId().val),this.gl.useProgram(e.GetId().val),this.gl.drawArrays(this.gl.TRIANGLES,0,i)}SetRenderTarget(t){this.gl.viewport(0,0,t.viewport.width,t.viewport.height),this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(t.depthFunc);const e=t.writeBuffer;e?this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e.GetFramebufferId().val):this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}End(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.useProgram(null),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null)}}class ae{constructor(t){u(this,"framebufferInfo");u(this,"renderBufferInfo",null);u(this,"framebufferId");u(this,"renderbufferId");u(this,"gl");this.gl=P.GetInstance().gl;const e=this.gl.createFramebuffer();if(!e)throw new Error("Failed to create framebuffer!");this.framebufferId={val:e},this.renderbufferId={val:null},this.framebufferInfo=t;const i=t.targetTexture.GetTextureInfo();this.gl.bindTexture(i.dimension,t.targetTexture.GetId().val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,t.attachment,t.targetTexture.GetTextureInfo().dimension,t.targetTexture.GetId().val,0),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(i.dimension,null);const n=this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);if(n!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is not complete: "+n.toString(16)),t.renderBufferCreateInfo){this.renderBufferInfo=t.renderBufferCreateInfo;const s=this.gl.createRenderbuffer();if(!s)throw new Error("Failed to create framebuffer!");this.renderbufferId={val:s},this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,t.renderBufferCreateInfo.format,t.renderBufferCreateInfo.width,t.renderBufferCreateInfo.height),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,t.renderBufferCreateInfo.attachmentType,this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}}Resize(t,e){this.renderBufferInfo&&(this.renderBufferInfo.width=t,this.renderBufferInfo.height=e,this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.renderbufferId.val),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.renderBufferInfo.format,this.renderBufferInfo.width,this.renderBufferInfo.height),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.renderBufferInfo.attachmentType,this.gl.RENDERBUFFER,this.renderbufferId.val))}SetColorAttachment(t,e,i=0){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,e,t.GetTextureInfo().dimension,t.GetId().val,i),this.Resize(t.GetTextureInfo().width,t.GetTextureInfo().height)}DrawToAttachment(t){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebufferId.val),this.gl.drawBuffers(t)}Destroy(){this.gl.deleteFramebuffer(this.framebufferId.val),this.gl.deleteRenderbuffer(this.renderbufferId.val),this.framebufferInfo&&this.framebufferInfo.targetTexture.Destroy()}GetFramebufferId(){return this.framebufferId}GetRenderbufferId(){return this.renderbufferId}}class Xe{constructor(t,e){u(this,"writeBuffer");u(this,"viewport");u(this,"depthFunc");u(this,"blendFunc");this.writeBuffer=t,this.viewport=e.viewport,this.depthFunc=e.depthFunc,this.blendFunc=e.blendFunc}Resize(t,e,i){var n;(n=this.writeBuffer)==null||n.Resize(t,e),this.viewport=i.viewport,this.depthFunc=i.depthFunc,this.blendFunc=i.blendFunc}Destroy(){var t;(t=this.writeBuffer)==null||t.Destroy()}}class qe{constructor(){u(this,"id");u(this,"gl");this.gl=P.GetInstance().gl;const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture!");this.id={val:t}}Destroy(){this.gl.deleteTexture(this.id.val)}GetId(){return this.id}}class _t extends qe{constructor(e){super();u(this,"textureInfo");this.textureInfo=e,this.gl.bindTexture(e.samplerInfo.dimension,this.id.val),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MIN_FILTER,e.samplerInfo.minFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MAG_FILTER,e.samplerInfo.magFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_S,e.samplerInfo.sWrap),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_T,e.samplerInfo.tWrap),this.gl.pixelStorei(this.gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,this.gl.NONE),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.texImage2D(e.dimension,0,e.format,e.width,e.height,0,e.nChannels,e.type,e.data),this.gl.getError()!==this.gl.NO_ERROR&&console.error("Error with texture binding or creation"),this.gl.bindTexture(e.dimension,null)}Resize(e){this.textureInfo=e,this.gl.bindTexture(e.samplerInfo.dimension,this.id.val),this.gl.texImage2D(e.dimension,0,e.format,e.width,e.height,0,e.nChannels,e.type,e.data),this.gl.getError()!==this.gl.NO_ERROR&&console.error("Error with texture binding or creation"),this.gl.bindTexture(e.dimension,null)}GetTextureInfo(){return this.textureInfo}}class ie extends qe{constructor(e){super();u(this,"textureInfo");this.textureInfo=e,this.gl.bindTexture(e.samplerInfo.dimension,this.id.val),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MIN_FILTER,e.samplerInfo.minFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MAG_FILTER,e.samplerInfo.magFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_S,e.samplerInfo.sWrap),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_T,e.samplerInfo.tWrap),e.samplerInfo.rWrap&&this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_R,e.samplerInfo.rWrap),this.gl.pixelStorei(this.gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,this.gl.NONE);for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,e.format,e.width,e.height,0,e.nChannels,e.type,e.data),this.gl.getError()!==this.gl.NO_ERROR&&console.error("Error with texture binding or creation");this.gl.bindTexture(e.dimension,null)}GetTextureInfo(){return this.textureInfo}}var Vt=1e-6,k=typeof Float32Array<"u"?Float32Array:Array,ji=Math.PI/180;function mt(r){return r*ji}Math.hypot||(Math.hypot=function(){for(var r=0,t=arguments.length;t--;)r+=arguments[t]*arguments[t];return Math.sqrt(r)});function Wi(){var r=new k(9);return k!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[5]=0,r[6]=0,r[7]=0),r[0]=1,r[4]=1,r[8]=1,r}function A(){var r=new k(16);return k!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0),r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function Xi(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function de(r,t,e){var i=e[0],n=e[1],s=e[2],a,h,o,l,c,d,g,m,f,p,v,x;return t===r?(r[12]=t[0]*i+t[4]*n+t[8]*s+t[12],r[13]=t[1]*i+t[5]*n+t[9]*s+t[13],r[14]=t[2]*i+t[6]*n+t[10]*s+t[14],r[15]=t[3]*i+t[7]*n+t[11]*s+t[15]):(a=t[0],h=t[1],o=t[2],l=t[3],c=t[4],d=t[5],g=t[6],m=t[7],f=t[8],p=t[9],v=t[10],x=t[11],r[0]=a,r[1]=h,r[2]=o,r[3]=l,r[4]=c,r[5]=d,r[6]=g,r[7]=m,r[8]=f,r[9]=p,r[10]=v,r[11]=x,r[12]=a*i+c*n+f*s+t[12],r[13]=h*i+d*n+p*s+t[13],r[14]=o*i+g*n+v*s+t[14],r[15]=l*i+m*n+x*s+t[15]),r}function ue(r,t,e){var i=e[0],n=e[1],s=e[2];return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[3]=t[3]*i,r[4]=t[4]*n,r[5]=t[5]*n,r[6]=t[6]*n,r[7]=t[7]*n,r[8]=t[8]*s,r[9]=t[9]*s,r[10]=t[10]*s,r[11]=t[11]*s,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function me(r,t){var e=t[0],i=t[1],n=t[2],s=t[3],a=e+e,h=i+i,o=n+n,l=e*a,c=i*a,d=i*h,g=n*a,m=n*h,f=n*o,p=s*a,v=s*h,x=s*o;return r[0]=1-d-f,r[1]=c+x,r[2]=g-v,r[3]=0,r[4]=c-x,r[5]=1-l-f,r[6]=m+p,r[7]=0,r[8]=g+v,r[9]=m-p,r[10]=1-l-d,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function qi(r,t,e,i,n){var s=1/Math.tan(t/2),a;return r[0]=s/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,n!=null&&n!==1/0?(a=1/(i-n),r[10]=(n+i)*a,r[14]=2*n*i*a):(r[10]=-1,r[14]=-2*i),r}var ot=qi;function Yi(r,t,e,i,n,s,a){var h=1/(t-e),o=1/(i-n),l=1/(s-a);return r[0]=-2*h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*l,r[11]=0,r[12]=(t+e)*h,r[13]=(n+i)*o,r[14]=(a+s)*l,r[15]=1,r}var Qi=Yi;function j(r,t,e,i){var n,s,a,h,o,l,c,d,g,m,f=t[0],p=t[1],v=t[2],x=i[0],b=i[1],R=i[2],M=e[0],E=e[1],S=e[2];return Math.abs(f-M)<Vt&&Math.abs(p-E)<Vt&&Math.abs(v-S)<Vt?Xi(r):(c=f-M,d=p-E,g=v-S,m=1/Math.hypot(c,d,g),c*=m,d*=m,g*=m,n=b*g-R*d,s=R*c-x*g,a=x*d-b*c,m=Math.hypot(n,s,a),m?(m=1/m,n*=m,s*=m,a*=m):(n=0,s=0,a=0),h=d*a-g*s,o=g*n-c*a,l=c*s-d*n,m=Math.hypot(h,o,l),m?(m=1/m,h*=m,o*=m,l*=m):(h=0,o=0,l=0),r[0]=n,r[1]=h,r[2]=c,r[3]=0,r[4]=s,r[5]=o,r[6]=d,r[7]=0,r[8]=a,r[9]=l,r[10]=g,r[11]=0,r[12]=-(n*f+s*p+a*v),r[13]=-(h*f+o*p+l*v),r[14]=-(c*f+d*p+g*v),r[15]=1,r)}function qt(){var r=new k(3);return k!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function ze(r){var t=new k(3);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t}function Ye(r){var t=r[0],e=r[1],i=r[2];return Math.hypot(t,e,i)}function U(r,t,e){var i=new k(3);return i[0]=r,i[1]=t,i[2]=e,i}function Qe(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r}function $i(r,t){var e=t[0],i=t[1],n=t[2],s=e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s)),r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r}function Zi(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function ne(r,t,e){var i=t[0],n=t[1],s=t[2],a=e[0],h=e[1],o=e[2];return r[0]=n*o-s*h,r[1]=s*a-i*o,r[2]=i*h-n*a,r}var Ki=Ye;(function(){var r=qt();return function(t,e,i,n,s,a){var h,o;for(e||(e=3),i||(i=0),n?o=Math.min(n*e+i,t.length):o=t.length,h=i;h<o;h+=e)r[0]=t[h],r[1]=t[h+1],r[2]=t[h+2],s(r,r,a),t[h]=r[0],t[h+1]=r[1],t[h+2]=r[2];return t}})();function Ji(){var r=new k(4);return k!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r}function tn(r,t,e,i){var n=new k(4);return n[0]=r,n[1]=t,n[2]=e,n[3]=i,n}function en(r,t){var e=t[0],i=t[1],n=t[2],s=t[3],a=e*e+i*i+n*n+s*s;return a>0&&(a=1/Math.sqrt(a)),r[0]=e*a,r[1]=i*a,r[2]=n*a,r[3]=s*a,r}(function(){var r=Ji();return function(t,e,i,n,s,a){var h,o;for(e||(e=4),i||(i=0),n?o=Math.min(n*e+i,t.length):o=t.length,h=i;h<o;h+=e)r[0]=t[h],r[1]=t[h+1],r[2]=t[h+2],r[3]=t[h+3],s(r,r,a),t[h]=r[0],t[h+1]=r[1],t[h+2]=r[2],t[h+3]=r[3];return t}})();function Pe(){var r=new k(4);return k!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r[3]=1,r}function $e(r,t,e){e=e*.5;var i=Math.sin(e);return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=Math.cos(e),r}function se(r,t,e,i){var n=t[0],s=t[1],a=t[2],h=t[3],o=e[0],l=e[1],c=e[2],d=e[3],g,m,f,p,v;return m=n*o+s*l+a*c+h*d,m<0&&(m=-m,o=-o,l=-l,c=-c,d=-d),1-m>Vt?(g=Math.acos(m),f=Math.sin(g),p=Math.sin((1-i)*g)/f,v=Math.sin(i*g)/f):(p=1-i,v=i),r[0]=p*n+v*o,r[1]=p*s+v*l,r[2]=p*a+v*c,r[3]=p*h+v*d,r}function nn(r,t){var e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),r[3]=.5*i,i=.5/i,r[0]=(t[5]-t[7])*i,r[1]=(t[6]-t[2])*i,r[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var s=(n+1)%3,a=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[s*3+s]-t[a*3+a]+1),r[n]=.5*i,i=.5/i,r[3]=(t[s*3+a]-t[a*3+s])*i,r[s]=(t[s*3+n]+t[n*3+s])*i,r[a]=(t[a*3+n]+t[n*3+a])*i}return r}var sn=tn,ge=en;(function(){var r=qt(),t=U(1,0,0),e=U(0,1,0);return function(i,n,s){var a=Zi(n,s);return a<-.999999?(ne(r,t,n),Ki(r)<1e-6&&ne(r,e,n),$i(r,r),$e(i,r,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(ne(r,n,s),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=1+a,ge(i,i))}})();(function(){var r=Pe(),t=Pe();return function(e,i,n,s,a,h){return se(r,i,a,h),se(t,n,s,h),se(e,r,t,2*h*(1-h)),e}})();(function(){var r=Wi();return function(t,e,i,n){return r[0]=i[0],r[3]=i[1],r[6]=i[2],r[1]=n[0],r[4]=n[1],r[7]=n[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],ge(t,nn(t,r))}})();function kt(){var r=new k(2);return k!=Float32Array&&(r[0]=0,r[1]=0),r}function Bt(r,t){var e=new k(2);return e[0]=r,e[1]=t,e}function re(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r}(function(){var r=kt();return function(t,e,i,n,s,a){var h,o;for(e||(e=2),i||(i=0),n?o=Math.min(n*e+i,t.length):o=t.length,h=i;h<o;h+=e)r[0]=t[h],r[1]=t[h+1],s(r,r,a),t[h]=r[0],t[h+1]=r[1];return t}})();var It=(r=>(r[r.Undefined=0]="Undefined",r[r.BloomBlur=1]="BloomBlur",r[r.BloomCombine=2]="BloomCombine",r[r.ToneMapping=3]="ToneMapping",r[r.ColorCorrection=4]="ColorCorrection",r))(It||{});class Yt{constructor(t,e,i){u(this,"renderer");u(this,"gl");u(this,"type");u(this,"dependencies");u(this,"screenQuad");this.renderer=t,this.gl=P.GetInstance().gl,this.type=e,this.dependencies=i}GetType(){return this.type}}var ht;(r=>{class t{constructor(s,a){u(this,"vertexArray");u(this,"shader");this.shader=new Q(s,a);const h=new gt(r.Vertices.squarePNT),o=new Array(new rt(3,12,"aPosition"),new rt(3,12,"aNormal"),new rt(2,8,"aUV")),l=new xe(o);h.SetLayout(l),this.vertexArray=new ve(h)}GetVertexArray(){return this.vertexArray}GetShader(){return this.shader}}r.Square=t;class e{constructor(){}}u(e,"cubePNT",new Float32Array([-1,-1,-1,0,0,-1,0,0,1,-1,-1,0,0,-1,1,0,1,1,-1,0,0,-1,1,1,1,1,-1,0,0,-1,1,1,-1,1,-1,0,0,-1,0,1,-1,-1,-1,0,0,-1,0,0,-1,-1,1,0,0,1,0,0,1,-1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,-1,1,1,0,0,1,0,1,-1,-1,1,0,0,1,0,0,-1,1,1,-1,0,0,1,0,-1,1,-1,-1,0,0,1,1,-1,-1,-1,-1,0,0,0,1,-1,-1,-1,-1,0,0,0,1,-1,-1,1,-1,0,0,0,0,-1,1,1,-1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,-1,1,0,0,1,1,1,-1,-1,1,0,0,0,1,1,-1,-1,1,0,0,0,1,1,-1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,-1,-1,-1,0,-1,0,0,1,1,-1,-1,0,-1,0,1,1,1,-1,1,0,-1,0,1,0,1,-1,1,0,-1,0,1,0,-1,-1,1,0,-1,0,0,0,-1,-1,-1,0,-1,0,0,1,-1,1,-1,0,1,0,0,1,1,1,-1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,-1,1,1,0,1,0,0,0,-1,1,-1,0,1,0,0,1])),u(e,"squarePNT",new Float32Array([1,1,0,0,0,1,1,1,1,-1,0,0,0,1,1,0,-1,-1,0,0,0,1,0,0,-1,-1,0,0,0,1,0,0,-1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1])),r.Vertices=e;class i{constructor(){}}u(i,"square",new Uint16Array([0,1,3,1,2,3])),u(i,"cube",new Uint16Array([0,1,3,1,2,3,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20])),r.Indices=i})(ht||(ht={}));class Q{constructor(t,e){u(this,"ID");this.Compile(t,e)}GetId(){return this.ID}Compile(t,e){if(!t||!e)throw new Error("Failed to get Shader source code from scriptId!");const i=P.GetInstance().gl,n=i.createShader(i.VERTEX_SHADER);if(n==null)throw new Error("Failed to create vertex shader!");i.shaderSource(n,t),i.compileShader(n),i.getShaderInfoLog(n)&&console.log(i.getShaderInfoLog(n));const s=i.createShader(i.FRAGMENT_SHADER);if(s==null)throw new Error("Failed to create fragment shader!");i.shaderSource(s,e),i.compileShader(s),i.getShaderInfoLog(s)&&console.log(i.getShaderInfoLog(s));const a=i.createProgram();if(!a)throw new Error("Failed to create shader program!");this.ID={val:a},i.attachShader(this.ID.val,n),i.attachShader(this.ID.val,s),i.linkProgram(this.ID.val),i.getProgramParameter(this.ID.val,i.LINK_STATUS)||(console.warn("Could not initialise shaders"),console.log(i.getProgramInfoLog(this.ID.val))),i.useProgram(this.ID.val)}}const Mt=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec2 vUV;

void main() {
    vUV = aUV;
    gl_Position = vec4(aPosition, 1.0);
}`,rn=`#version 300 es
precision highp float;


out vec4 FragColor;
in vec2 vUV;

uniform sampler2D sceneTexture;
uniform sampler2D blurredTexture;
uniform float bloomStrength;

vec3 bloom_none()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    return hdrColor;
}

vec3 bloom_old()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    vec3 bloomColor = texture(blurredTexture, vUV).rgb;
    return hdrColor + bloomColor; // additive blending
}

vec3 bloom_new()
{
    vec3 hdrColor = texture(sceneTexture, vUV).rgb;
    vec3 bloomColor = texture(blurredTexture, vUV).rgb;
    return mix(hdrColor, bloomColor, bloomStrength); // linear interpolation
}

void main() {

    vec3 bloomed = bloom_new();

    FragColor = vec4(bloomed, 1.0);
}`,an=`#version 300 es
precision highp float;

// This shader performs upsampling on a texture,
// as taken from Call Of Duty method, presented at ACM Siggraph 2014.

// Remember to add bilinear minification filter for this texture!
// Remember to use a floating-point texture format (for HDR)!
// Remember to use edge clamping for this texture!
uniform sampler2D srcTexture;
uniform float filterRadius;

in vec2 vUV;
out vec3 upsample;

void main()
{
    // The filter kernel is applied with a radius, specified in texture
    // coordinates, so that the radius will vary across mip resolutions.
    float x = filterRadius;
    float y = filterRadius;

    // Take 9 samples around current texel:
    // a - b - c
    // d - e - f
    // g - h - i
    // === ('e' is the current texel) ===
    vec3 a = texture(srcTexture, vec2(vUV.x - x, vUV.y + y)).rgb;
    vec3 b = texture(srcTexture, vec2(vUV.x,     vUV.y + y)).rgb;
    vec3 c = texture(srcTexture, vec2(vUV.x + x, vUV.y + y)).rgb;

    vec3 d = texture(srcTexture, vec2(vUV.x - x, vUV.y)).rgb;
    vec3 e = texture(srcTexture, vec2(vUV.x,     vUV.y)).rgb;
    vec3 f = texture(srcTexture, vec2(vUV.x + x, vUV.y)).rgb;

    vec3 g = texture(srcTexture, vec2(vUV.x - x, vUV.y - y)).rgb;
    vec3 h = texture(srcTexture, vec2(vUV.x,     vUV.y - y)).rgb;
    vec3 i = texture(srcTexture, vec2(vUV.x + x, vUV.y - y)).rgb;

    // Apply weighted distribution, by using a 3x3 tent filter:
    //  1   | 1 2 1 |
    // -- * | 2 4 2 |
    // 16   | 1 2 1 |
    upsample = e*4.0;
    upsample += (b+d+f+h)*2.0;
    upsample += (a+c+g+i);
    upsample *= 1.0 / 16.0;
}`,Ze=`#version 300 es
precision highp float;

// This shader performs downsampling on a texture,
// as taken from Call Of Duty method, presented at ACM Siggraph 2014.
// This particular method was customly designed to eliminate
// "pulsating artifacts and temporal stability issues".

// Remember to add bilinear minification filter for this texture!
// Remember to use a floating-point texture format (for HDR)!
// Remember to use edge clamping for this texture!
uniform sampler2D srcTexture;
uniform vec2 srcResolution;

in vec2 vUV;

out vec3 downsample;

void main()
{
    vec2 srcTexelSize = 1.0 / srcResolution;
    float x = srcTexelSize.x;
    float y = srcTexelSize.y;

    // Take 13 samples around current texel:
    // a - b - c
    // - j - k -
    // d - e - f
    // - l - m -
    // g - h - i
    // === ('e' is the current texel) ===
    vec3 a = texture(srcTexture, vec2(vUV.x - 2.0*x, vUV.y + 2.0*y)).rgb;
    vec3 b = texture(srcTexture, vec2(vUV.x,       vUV.y + 2.0*y)).rgb;
    vec3 c = texture(srcTexture, vec2(vUV.x + 2.0*x, vUV.y + 2.0*y)).rgb;

    vec3 d = texture(srcTexture, vec2(vUV.x - 2.0*x, vUV.y)).rgb;
    vec3 e = texture(srcTexture, vec2(vUV.x,       vUV.y)).rgb;
    vec3 f = texture(srcTexture, vec2(vUV.x + 2.0*x, vUV.y)).rgb;

    vec3 g = texture(srcTexture, vec2(vUV.x - 2.0*x, vUV.y - 2.0*y)).rgb;
    vec3 h = texture(srcTexture, vec2(vUV.x,       vUV.y - 2.0*y)).rgb;
    vec3 i = texture(srcTexture, vec2(vUV.x + 2.0*x, vUV.y - 2.0*y)).rgb;

    vec3 j = texture(srcTexture, vec2(vUV.x - x, vUV.y + y)).rgb;
    vec3 k = texture(srcTexture, vec2(vUV.x + x, vUV.y + y)).rgb;
    vec3 l = texture(srcTexture, vec2(vUV.x - x, vUV.y - y)).rgb;
    vec3 m = texture(srcTexture, vec2(vUV.x + x, vUV.y - y)).rgb;

    // Apply weighted distribution:
    // 0.5 + 0.125 + 0.125 + 0.125 + 0.125 = 1
    // a,b,d,e * 0.125
    // b,c,e,f * 0.125
    // d,e,g,h * 0.125
    // e,f,h,i * 0.125
    // j,k,l,m * 0.5
    // This shows 5 square areas that are being sampled. But some of them overlap,
    // so to have an energy preserving downsample we need to make some adjustments.
    // The weights are the distributed, so that the sum of j,k,l,m (e.g.)
    // contribute 0.5 to the final color output. The code below is written
    // to effectively yield this sum. We get:
    // 0.125*5 + 0.03125*4 + 0.0625*4 = 1
    downsample = e*0.125;
    downsample += (a+c+g+i)*0.03125;
    downsample += (b+d+f+h)*0.0625;
    downsample += (j+k+l+m)*0.125;

}`;class on extends Yt{constructor(e,i){super(e.renderer,It.ToneMapping,[]);u(this,"specialFx");u(this,"bloomInfo");u(this,"mipChain",Array());u(this,"upsampleShader",new Q(Mt,an));u(this,"downsampleShader",new Q(Mt,Ze));this.specialFx=e,this.bloomInfo=i,this.screenQuad=new ht.Square(Mt,rn);var n=Bt(this.gl.canvas.width,this.gl.canvas.height),s=Bt(Math.floor(this.gl.canvas.width),Math.floor(this.gl.canvas.height));for(let h=0;h<this.bloomInfo.levels;h++){n=re(kt(),n,.5),s=re(kt(),s,.5);var a={dimension:this.gl.TEXTURE_2D,nChannels:this.gl.RGBA,width:n[0],height:n[1],format:this.gl.RGBA32F,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE}};this.mipChain.push(new _t(a))}this.gl.useProgram(this.screenQuad.GetShader().GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"sceneTexture"),0),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"blurredTexture"),1),this.gl.useProgram(null),this.gl.useProgram(this.upsampleShader.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.upsampleShader.GetId().val,"srcTexture"),0),this.gl.useProgram(null),this.gl.useProgram(this.downsampleShader.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.downsampleShader.GetId().val,"srcTexture"),0),this.gl.useProgram(null)}Render(e,i){var s;const n=this.specialFx.target;this.renderer.SetRenderTarget(n),this.Blur(n),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),(s=n.writeBuffer)==null||s.SetColorAttachment(i,this.gl.COLOR_ATTACHMENT0),this.gl.useProgram(this.screenQuad.GetShader().GetId().val),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.specialFx.scene.GetId().val),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.mipChain[0].GetId().val),this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"bloomStrength"),this.bloomInfo.strength),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.screenQuad.GetShader(),6),this.renderer.End()}Resize(e,i){var n=Bt(e,i);for(let a=0;a<this.mipChain.length;a++){n=re(kt(),n,.5);var s={dimension:this.gl.TEXTURE_2D,nChannels:this.gl.RGBA,width:n[0],height:n[1],format:this.gl.RGBA32F,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE}};this.mipChain[a].Resize(s)}}Blur(e){const i=e.writeBuffer;this.gl.useProgram(this.downsampleShader.GetId().val),this.gl.bindTexture(this.gl.TEXTURE_2D,this.specialFx.scene.GetId().val);for(let s=0;s<this.mipChain.length;s++){const a=this.mipChain[s];var n=a.GetTextureInfo();this.gl.viewport(0,0,n.width,n.height),i==null||i.SetColorAttachment(a,this.gl.COLOR_ATTACHMENT0),this.gl.uniform2fv(this.gl.getUniformLocation(this.downsampleShader.GetId().val,"srcResolution"),Bt(n.width,n.height)),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.downsampleShader,6),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,a.GetId().val)}this.gl.useProgram(null),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.ONE,this.gl.ONE),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.useProgram(this.upsampleShader.GetId().val),this.gl.uniform1f(this.gl.getUniformLocation(this.upsampleShader.GetId().val,"filterRadius"),this.bloomInfo.filterRadius);for(let s=this.mipChain.length-1;s>0;s--){const a=this.mipChain[s],h=this.mipChain[s-1];this.gl.viewport(0,0,h.GetTextureInfo().width,h.GetTextureInfo().height),this.gl.bindTexture(a.GetTextureInfo().dimension,a.GetId().val),i==null||i.SetColorAttachment(h,this.gl.COLOR_ATTACHMENT0),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.upsampleShader,6)}this.gl.disable(this.gl.BLEND),this.gl.useProgram(null),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}}class hn extends Yt{constructor(e,i){super(e.renderer,It.ToneMapping,[]);u(this,"specialFx");u(this,"blurInfo");this.specialFx=e,this.blurInfo=i,this.screenQuad=new ht.Square(Mt,Ze)}Render(e,i){const n=this.specialFx.target;this.renderer.SetRenderTarget(n),this.gl.useProgram(this.screenQuad.GetShader().GetId().val);const s=e.GetTextureInfo();this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(s.dimension,e.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"readTex"),0),this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"filterRadius"),this.blurInfo.filterRadius),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.screenQuad.GetShader(),6),this.renderer.End()}Resize(e,i){}}const ln=`#version 300 es
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
`;class cn extends Yt{constructor(e,i){super(e.renderer,It.ToneMapping,[]);u(this,"specialFx");u(this,"toneMappingInfo");this.specialFx=e,this.toneMappingInfo=i,this.screenQuad=new ht.Square(Mt,ln)}Render(e,i){const n=this.specialFx.target;n.writeBuffer=null,n.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height},this.renderer.SetRenderTarget(n),this.gl.useProgram(this.screenQuad.GetShader().GetId().val);const s=e.GetTextureInfo();this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(s.dimension,e.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"uToneMappedTexture"),0),this.gl.uniform2fv(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"uResolution"),[this.toneMappingInfo.screenResolution.width,this.toneMappingInfo.screenResolution.height]),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.screenQuad.GetShader(),6),this.renderer.End()}Resize(e,i){}}const dn=`#version 300 es
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
}`;class De extends Yt{constructor(e,i){super(e.renderer,It.ToneMapping,[]);u(this,"specialFx");u(this,"toneMappingInfo");this.specialFx=e,this.toneMappingInfo=i,this.screenQuad=new ht.Square(Mt,dn)}Render(e,i){var a;const n=this.specialFx.target;n.writeBuffer=this.specialFx.target.writeBuffer,n.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height},this.renderer.SetRenderTarget(n),(a=n.writeBuffer)==null||a.SetColorAttachment(i,this.gl.COLOR_ATTACHMENT0),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.useProgram(this.screenQuad.GetShader().GetId().val);const s=e.GetTextureInfo();this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(s.dimension,e.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"hdrTex"),0),this.gl.uniform1f(this.gl.getUniformLocation(this.screenQuad.GetShader().GetId().val,"exposure"),this.toneMappingInfo.exposure),this.renderer.Draw(this.screenQuad.GetVertexArray(),this.screenQuad.GetShader(),6),this.renderer.End()}Resize(e,i){}}let wt,Tt;class un{constructor(t,e){u(this,"renderer");u(this,"scene");u(this,"ping");u(this,"pong");u(this,"target");u(this,"writeBuffer");u(this,"passes",[]);u(this,"gl");this.renderer=t,this.scene=e,this.gl=P.GetInstance().gl;const i=P.GetInstance().canvas,n={dimension:this.gl.TEXTURE_2D,format:this.gl.RGBA32F,width:i.width,height:i.height,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT}};this.ping=new _t(n),this.pong=new _t(n),wt=this.ping,Tt=this.pong;const s={targetTexture:this.pong,attachment:this.gl.COLOR_ATTACHMENT0,renderBufferCreateInfo:null};this.writeBuffer=new ae(s);const a={viewport:{width:i.width,height:i.height},depthFunc:this.gl.LEQUAL,blendFunc:this.gl.ONE};this.target=new Xe(this.writeBuffer,a);const h={exposure:1},o={screenResolution:{width:i.width,height:i.height}};this.passes.push(new De(this,h)),this.passes.push(new cn(this,o))}Render(){this.target.writeBuffer=this.writeBuffer;for(let t=0;t<this.passes.length;t++)t==0?this.passes[t].Render(this.scene,Tt):this.passes[t].Render(wt,Tt),wt==this.ping?(Tt=this.ping,wt=this.pong):(wt=this.ping,Tt=this.pong)}AddBloom(t){this.passes.push(new on(this,t)),this.SortPasses()}AddToneMapping(t){this.passes.push(new De(this,t)),this.SortPasses()}AddBlur(t){this.passes.push(new hn(this,t)),this.SortPasses()}SortPasses(){}Resize(t,e){const i={viewport:{width:t,height:e},depthFunc:this.gl.LEQUAL,blendFunc:this.gl.ONE};this.target.Resize(t,e,i);const n={dimension:this.gl.TEXTURE_2D,format:this.gl.RGBA32F,width:t,height:e,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT}};this.ping.Resize(n),this.pong.Resize(n),wt=this.ping,Tt=this.pong;for(const s of this.passes)s.Resize(t,e)}}class Ke{constructor(){u(this,"specialFx");u(this,"renderer",new Hi);u(this,"gl");u(this,"width",0);u(this,"height",0);const t=P.GetInstance();this.gl=t.gl}Update(t,e,i){t.Render(e,i),this.specialFx||(this.specialFx=new un(this.renderer,t.writeTexture)),this.specialFx.Render()}SetSizes(t,e){(this.width!=t||this.height!=e)&&this.Resize(t,e)}Resize(t,e){this.width=t,this.height=e,this.gl.canvas.width=this.width,this.gl.canvas.height=this.height,this.specialFx&&this.specialFx.Resize(t,e)}GetRenderer(){return this.renderer}}class mn{constructor(t){u(this,"toggleView",!0);u(this,"modifySceneProps",!1);u(this,"sceneViewSlider");u(this,"cameraIcon");u(this,"satelliteIcon");u(this,"dragon");this.dragon=t,this.sceneViewSlider=document.querySelector(".scene-view-slider"),this.cameraIcon={element:document.querySelector(".camera-view"),selected:!1},this.satelliteIcon={element:document.querySelector(".satellite-view"),selected:!1},this.cameraIcon.element.addEventListener("click",()=>{this.cameraIcon.selected||this.ToggleView(!0)}),this.satelliteIcon.element.addEventListener("click",()=>{this.satelliteIcon.selected||this.ToggleView(!1)}),this.ToggleView(!0)}ToggleView(t){t?(this.dragon.scene.camera.SetController(he.FPS),this.sceneViewSlider.classList.remove("viewing-satellite"),this.sceneViewSlider.classList.add("viewing-camera"),this.cameraIcon.element.classList.remove("unselected-scene-view"),this.cameraIcon.element.classList.add("selected-scene-view"),this.satelliteIcon.element.classList.add("unselected-scene-view"),this.cameraIcon.selected=!0,this.satelliteIcon.selected=!1):(this.dragon.scene.camera.SetController(he.TurnTable),this.sceneViewSlider.classList.remove("viewing-camera"),this.sceneViewSlider.classList.add("viewing-satellite"),this.satelliteIcon.element.classList.remove("unselected-scene-view"),this.satelliteIcon.element.classList.add("selected-scene-view"),this.cameraIcon.element.classList.add("unselected-scene-view"),this.satelliteIcon.selected=!0,this.cameraIcon.selected=!1)}}class gn{constructor(){u(this,"isDestroyed",!1);u(this,"loadingDiv");u(this,"cube");u(this,"gl");u(this,"projectionMatrix");u(this,"viewMatrix");const t=new Ne,e=new st;this.cube=new et(e,t),this.cube.scale=[1,1,1],this.gl=P.GetInstance().gl;const i=P.GetInstance().canvas;let n=document.querySelector("#app");this.loadingDiv=document.createElement("div"),this.loadingDiv.innerHTML=`
            <div class="preloader-header"> loading... </div>
        `,n.appendChild(this.loadingDiv),this.projectionMatrix=ot(A(),45,i.width/i.height,.1,100),this.viewMatrix=j(A(),[0,0,10],[0,0,0],[0,1,0]),this.gl.viewport(0,0,i.width,i.height)}Rotate(t,e){const i=U(1,-1,0),n=t*45*5e-4,s=$e(this.cube.rotation,i,mt(n));this.cube.rotation=ge(s,s)}Resize(t,e){this.projectionMatrix=ot(A(),45,t/e,.1,100)}Update(t,e){if(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.clearColor(.9,.9,.9,.9),this.Rotate(t,e),this.cube.material instanceof Ne&&this.cube.geometry instanceof st){const i=this.cube.material.GetShader().GetId().val,n=this.cube.geometry.GetVertexArray().GetId().val;let s=A();s=me(s,this.cube.rotation),s=ue(A(),s,this.cube.scale),s=de(A(),s,this.cube.position),this.gl.useProgram(i),this.gl.bindVertexArray(n),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(i,"projection"),!1,this.projectionMatrix),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(i,"view"),!1,this.viewMatrix),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(i,"model"),!1,s),this.gl.drawArrays(this.gl.TRIANGLES,0,36)}}Destroy(){this.isDestroyed=!0,this.loadingDiv.remove(),this.gl.bindVertexArray(null),this.gl.useProgram(null)}}class Je{constructor(){}}class st extends Je{constructor(){super();u(this,"vertexArray");const e=new gt(ht.Vertices.cubePNT),i=new Array(new rt(3,12,"aPosition"),new rt(3,12,"aNormal"),new rt(2,8,"aUV")),n=new xe(i);e.SetLayout(n),this.vertexArray=new ve(e)}GetVertexArray(){return this.vertexArray}}class St extends Je{constructor(e,i,n){super();u(this,"verticesCount");u(this,"vertexArray");const s=fn(e,i,n);this.verticesCount=s.vertices.length/8;const a=new gt(s.vertices),h=new Array(new rt(3,12,"aPosition"),new rt(3,12,"aNormal"),new rt(2,8,"aUV")),o=new xe(h);a.SetLayout(o);var l=new jt(s.indices);this.vertexArray=new ve(a,l)}GetVertexArray(){return this.vertexArray}}function fn(r,t,e){const i=[],n=[];let s,a,h,o,l,c,d,g,m,f,p,v,x,b=0;const R=1/r,M=2*Math.PI/e,E=Math.PI/t;for(f=0;f<=t;++f){const y=Math.PI/2-f*E;for(o=r*Math.cos(y),h=r*Math.sin(y),p=0;p<=e;++p){const _=p*M;s=o*Math.cos(_),a=o*Math.sin(_),i.push(s),i.push(a),i.push(h),l=s*R,c=a*R,d=h*R,i.push(l),i.push(c),i.push(d),g=p/e,m=f/t,i.push(g),i.push(m)}}for(f=0;f<t;++f)for(v=f*(e+1),x=v+e+1,p=0;p<e;++p,++v,++x)f!=0&&(n[b]=v,n[b+1]=x,n[b+2]=v+1,b+=3),f!=t-1&&(n[b]=v+1,n[b+1]=x,n[b+2]=x+1,b+=3);const S=new Float32Array(i),w=new Uint16Array(n);return{vertices:S,indices:w}}class ti{constructor(){}}class ei extends ti{constructor(e,i,n){super();u(this,"position");u(this,"color");u(this,"intensity");this.position=e,this.color=i,this.intensity=n}}const Be=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vModelPosition;
out vec3 vNormal;
out vec2 vUV;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {

    vModelPosition = vec3(model * vec4(aPosition, 1.0));
    vNormal = mat3(transpose(inverse(model))) * aNormal;  
    vUV = aUV;

    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}`,pn=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

uniform mat4 projection;
uniform mat4 view;

out vec3 vLocalPos;
out vec3 vNormal;
out vec2 vUV;

void main()
{
    vLocalPos = aPosition;
    vNormal = aNormal;
    vUV = aUV;

    mat4 rotView = mat4(mat3(view)); // remove translation from the view matrix
    vec4 clipPos = projection * rotView * vec4(vLocalPos, 1.0);

    gl_Position = clipPos.xyww;
}`,xn=`#version 300 es
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
}`,vn=`#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vNormal;

void main() 
{
    FragColor = vec4(vNormal, 1.0);
}`,yn=`#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 vUV;

uniform sampler2D tex;

void main() 
{
    FragColor = texture(tex, vUV);
}`,wn=`#version 300 es
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

in vec3 vModelPosition;
in vec3 vNormal;
in vec2 vUV;
in vec4 vLightSpaceFragPosition; 


uniform vec4 uColor;
uniform Light uLight;
uniform Material uMaterial;
uniform vec3 uCameraPosition;
uniform vec2 uShadowMapResolution;
uniform sampler2D uShadowMap;
uniform sampler2D uBRDF;
uniform samplerCube uConvolutedMap;
uniform samplerCube uPrefilteredMap;

const float PI = 3.14159265359;
float ShadowCalculation(vec4 lightSpaceFragPosition, vec3 lightDir, vec3 normal);
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

    // Radiance
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
    //================================================================
    
    // Reflection
    //================================================================
    const float MAX_REFLECTION_LOD = 4.0;
    vec3 prefilteredColor = textureLod(uPrefilteredMap, R, 0.0).rgb;   
    vec2 envBRDF  = texture(uBRDF, vec2(max(dot(N, V), 0.0), uMaterial.Roughness)).rg;
    // vec3 finalSpecular = prefilteredColor * (FR * envBRDF.x + envBRDF.y);
    vec3 finalSpecular = prefilteredColor * (FR);

    vec3 ambient = (kD * diffuse + finalSpecular) * uMaterial.AO; 
    vec3 color = ambient + Lo; 
    //================================================================

    float shadow = ShadowCalculation(vLightSpaceFragPosition, L, N);

    color -= vec3(shadow);  

    FragColor = vec4(color, 1.0);

}


float ShadowCalculation(vec4 lightSpaceFragPosition, vec3 lightDir, vec3 normal) 
{
    // perform perspective divide
    vec3 projCoords = lightSpaceFragPosition.xyz / lightSpaceFragPosition.w;
    // transform to [0,1] range
    projCoords = projCoords * 0.5 + 0.5;
    // get closest depth value from light's perspective (using [0,1] range fragPosLight as coords)
    float closestDepth = texture(uShadowMap, projCoords.xy).r; 
    // get depth of current fragment from light's perspective
    float currentDepth = projCoords.z;

    float bias = max(0.005 * (1.0 - dot(normal, lightDir)), 0.005);  
    vec2 texelSize = 1.0 / uShadowMapResolution;
    float shadow = 0.0;
    for(int i = -1; i <= 1; i++) 
    {
        for(int j = -1; j <= 1; j++) 
        {
            float pcfDepth = texture(uShadowMap, projCoords.xy + vec2(i, j) * texelSize).r;
            shadow += currentDepth - bias > pcfDepth ? 0.02 : 0.0;
        }
    }

    shadow /= 9.0;

    // keep the shadow at 0.0 when outside the far_plane region of the light's frustum.
    if(projCoords.z > 1.0)
        shadow = 0.0;

    if(normal.y <= -1.0) 
    {
        shadow = 0.0;
    }

    return shadow;
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
}`,Tn=`#version 300 es

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
}`;class fe{constructor(){}}class Ne extends fe{constructor(){super();u(this,"texture",null);u(this,"shader");this.shader=new Q(Be,vn)}AddTexture(e){this.texture=e,this.shader.Compile(Be,yn)}GetShader(){return this.shader}}class pe extends fe{constructor(e){super();u(this,"cubeTexture");u(this,"shader");this.shader=new Q(pn,xn),this.cubeTexture=e}GetShader(){return this.shader}}class tt extends fe{constructor(e){super();u(this,"shader");u(this,"albedo",U(1,1,1));u(this,"metallic",.3);u(this,"roughenss",.8);u(this,"ao",.5);u(this,"emission",0);this.shader=new Q(Tn,wn),e.albedo&&(this.albedo=e.albedo),e.metallic&&(this.metallic=e.metallic),e.roughenss&&(this.roughenss=e.roughenss),e.ao&&(this.ao=e.ao),e.emission&&(this.emission=e.emission)}GetShader(){return this.shader}}class bn{constructor(){u(this,"position",U(0,0,0));u(this,"scale",U(1,1,1));u(this,"rotation",sn(0,0,0,0))}}class et{constructor(t,e,i=new bn){u(this,"position");u(this,"scale");u(this,"rotation");u(this,"geometry");u(this,"material");u(this,"userUpdateCallback");this.geometry=t,this.material=e,this.position=i.position,this.scale=i.scale,this.rotation=i.rotation}SetTransforms(t){this.position=t.position,this.scale=t.scale,this.rotation=t.rotation}SetUpdateCallback(t){this.userUpdateCallback=t}UpdateUniforms(t){const e=t.gl,i=t.lights,n=t.skybox,s=t.camera;let a=A();if(a=me(a,this.rotation),a=ue(A(),a,this.scale),a=de(A(),a,this.position),this.material instanceof tt){const h=this.material,o=h.GetShader();n&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,t.depthTexture.GetId().val),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,n.GetBRDF().GetId().val),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_CUBE_MAP,n.GetConvolutedMap().GetId().val),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_CUBE_MAP,n.GetPrefilteredMap().GetId().val)),e.useProgram(o.GetId().val),e.uniform1i(e.getUniformLocation(o.GetId().val,"uShadowMap"),1),e.uniform1i(e.getUniformLocation(o.GetId().val,"uBRDF"),2),e.uniform1i(e.getUniformLocation(o.GetId().val,"uConvolutedMap"),3),e.uniform1i(e.getUniformLocation(o.GetId().val,"uPrefilteredMap"),4),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"model"),!1,a),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"view"),!1,s.GetViewMatrix()),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"projection"),!1,s.GetProjectionMatrix()),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"lightSpaceProjection"),!1,t.depthProjectionMatrix),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"lightSpaceView"),!1,t.depthViewMatrix),e.uniform3fv(e.getUniformLocation(o.GetId().val,"uCameraPosition"),s.position),e.uniform2fv(e.getUniformLocation(o.GetId().val,"uShadowMapResolution"),[e.canvas.width,e.canvas.height]),e.uniform3fv(e.getUniformLocation(o.GetId().val,"uMaterial.Albedo"),h.albedo),e.uniform1f(e.getUniformLocation(o.GetId().val,"uMaterial.Metallic"),h.metallic),e.uniform1f(e.getUniformLocation(o.GetId().val,"uMaterial.Roughness"),h.roughenss),e.uniform1f(e.getUniformLocation(o.GetId().val,"uMaterial.AO"),h.ao),e.uniform1f(e.getUniformLocation(o.GetId().val,"uMaterial.Emission"),h.emission);for(const l of i)l instanceof ei&&(e.uniform3fv(e.getUniformLocation(o.GetId().val,"uLight.Position"),l.position),e.uniform3fv(e.getUniformLocation(o.GetId().val,"uLight.AmbientColor"),l.color),e.uniform1f(e.getUniformLocation(o.GetId().val,"uLight.Intensity"),l.intensity),e.useProgram(null));e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)}else if(this.material instanceof pe){const h=this.material,o=h.GetShader();e.useProgram(o.GetId().val),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"projection"),!1,s.GetProjectionMatrix()),e.uniformMatrix4fv(e.getUniformLocation(o.GetId().val,"view"),!1,s.GetViewMatrix()),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_CUBE_MAP,h.cubeTexture.GetId().val),e.uniform1i(e.getUniformLocation(o.GetId().val,"environmentMap"),0)}}}let En=class{constructor(){u(this,"id");u(this,"gl");this.gl=P.GetInstance().gl,this.gl=P.GetInstance().gl;const t=this.gl.createTexture();if(!t)throw new Error("Failed to create texture!");this.id={val:t}}Destroy(){this.gl.deleteTexture(this.id.val)}GetId(){return this.id}};class Mn extends En{constructor(e){super();u(this,"imageInfo");this.imageInfo=e,this.gl.bindTexture(e.samplerInfo.dimension,this.id.val),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MIN_FILTER,e.samplerInfo.magFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_MAG_FILTER,e.samplerInfo.minFilter),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_S,e.samplerInfo.sWrap),this.gl.texParameteri(e.samplerInfo.dimension,this.gl.TEXTURE_WRAP_T,e.samplerInfo.tWrap),this.gl.pixelStorei(this.gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,this.gl.NONE),this.gl.texImage2D(e.dimension,0,e.format,e.threeData.width,e.threeData.height,0,e.nChannels,e.type,new Float32Array(e.threeData.data)),this.gl.bindTexture(e.dimension,null)}GetImageInfo(){return this.imageInfo}}const _n=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vLocalPos;

uniform mat4 projection;
uniform mat4 view;

void main() 
{
    vLocalPos = aPosition;
    gl_Position = projection * view * vec4(aPosition, 1.0);
}`,Rn=`#version 300 es
precision highp float;

out vec4 FragColor;
 
in vec3 vLocalPos;
uniform sampler2D hdrTex;

const vec2 invAtan = vec2(0.1591, 0.3183);

vec2 SampleSphericalMap(vec3 v)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= invAtan;
    uv += 0.5;
    return uv;
}

void main() 
{
    vec2 uv = SampleSphericalMap(normalize(vLocalPos)); // make sure to normalize localPos.
    vec3 color = texture(hdrTex, uv).rgb * 0.00005;
    
    FragColor = vec4(color, 1.0);
}

`,An=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vWorldPos;

uniform mat4 projection;
uniform mat4 view;

void main()
{
    vWorldPos = aPosition;  
    gl_Position =  projection * view * vec4(vWorldPos, 1.0);
}`,Sn=`#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vWorldPos;

uniform samplerCube environmentMap;

const float PI = 3.14159265359;

void main()
{		
	// The world vector acts as the normal of a tangent surface
    // from the origin, aligned to vWorldPos. Given this normal, calculate all
    // incoming radiance of the environment. The result of this radiance
    // is the radiance of light coming from -Normal direction, which is what
    // we use in the PBR shader to sample irradiance.
    vec3 N = normalize(vWorldPos);

    vec3 irradiance = vec3(0.0);   
    
    // tangent space calculation from origin point
    vec3 up    = vec3(0.0, 1.0, 0.0);
    vec3 right = normalize(cross(up, N));
    up         = normalize(cross(N, right));
       
    float sampleDelta = 0.025;
    float nrSamples = 0.0;
    for(float phi = 0.0; phi < 2.0 * PI; phi += sampleDelta)
    {
        for(float theta = 0.0; theta < 0.5 * PI; theta += sampleDelta)
        {
            // spherical to cartesian (in tangent space)
            vec3 tangentSample = vec3(sin(theta) * cos(phi),  sin(theta) * sin(phi), cos(theta));
            // tangent space to world
            vec3 sampleVec = tangentSample.x * right + tangentSample.y * up + tangentSample.z * N; 

            irradiance += texture(environmentMap, sampleVec).rgb * cos(theta) * sin(theta);
            nrSamples++;
        }
    }
    irradiance = PI * irradiance * (1.0 / float(nrSamples));
    
    FragColor = vec4(irradiance, 1.0);
}`,Fn=`#version 300 es


in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec3 vWorldPos;

uniform mat4 projection;
uniform mat4 view;

void main()
{
    vWorldPos = aPosition;  
    gl_Position =  projection * view * vec4(vWorldPos, 1.0);
}`,Cn=`#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 vWorldPos;

uniform samplerCube environmentMap;
uniform float roughness;

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
// http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
// efficient VanDerCorpus calculation.
float RadicalInverse_VdC(uint bits) 
{
     bits = (bits << 16u) | (bits >> 16u);
     bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
     bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
     bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
     bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
     return float(bits) * 2.3283064365386963e-10; // / 0x100000000
}
// ----------------------------------------------------------------------------
vec2 Hammersley(uint i, uint N)
{
	return vec2(float(i)/float(N), RadicalInverse_VdC(i));
}
// ----------------------------------------------------------------------------
vec3 ImportanceSampleGGX(vec2 Xi, vec3 N, float roughness)
{
	float a = roughness*roughness;
	
	float phi = 2.0 * PI * Xi.x;
	float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
	float sinTheta = sqrt(1.0 - cosTheta*cosTheta);
	
	// from spherical coordinates to cartesian coordinates - halfway vector
	vec3 H;
	H.x = cos(phi) * sinTheta;
	H.y = sin(phi) * sinTheta;
	H.z = cosTheta;
	
	// from tangent-space H vector to world-space sample vector
	vec3 up          = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
	vec3 tangent   = normalize(cross(up, N));
	vec3 bitangent = cross(N, tangent);
	
	vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
	return normalize(sampleVec);
}
// ----------------------------------------------------------------------------
void main()
{		
    vec3 N = normalize(vWorldPos);
    
    // make the simplifying assumption that V equals R equals the normal 
    vec3 R = N;
    vec3 V = R;

    const uint SAMPLE_COUNT = 1024u;
    vec3 prefilteredColor = vec3(0.0);
    float totalWeight = 0.0;
    
    for(uint i = 0u; i < SAMPLE_COUNT; ++i)
    {
        // generates a sample vector that's biased towards the preferred alignment direction (importance sampling).
        vec2 Xi = Hammersley(i, SAMPLE_COUNT);
        vec3 H = ImportanceSampleGGX(Xi, N, roughness);
        vec3 L  = normalize(2.0 * dot(V, H) * H - V);

        float NdotL = max(dot(N, L), 0.0);
        if(NdotL > 0.0)
        {
            // sample from the environment's mip level based on roughness/pdf
            float D   = DistributionGGX(N, H, roughness);
            float NdotH = max(dot(N, H), 0.0);
            float HdotV = max(dot(H, V), 0.0);
            float pdf = D * NdotH / (4.0 * HdotV) + 0.0001; 

            float resolution = 512.0; // resolution of source cubemap (per face)
            float saTexel  = 4.0 * PI / (6.0 * resolution * resolution);
            float saSample = 1.0 / (float(SAMPLE_COUNT) * pdf + 0.0001);

            float mipLevel = roughness == 0.0 ? 0.0 : 0.5 * log2(saSample / saTexel); 
            
            prefilteredColor += textureLod(environmentMap, L, mipLevel).rgb * NdotL;
            totalWeight      += NdotL;
        }
    }

    prefilteredColor = (prefilteredColor / totalWeight);

    FragColor = vec4(prefilteredColor, 1.0);
}`,Un=`#version 300 es

in vec3 aPosition;
in vec3 aNormal;
in vec2 aUV;

out vec2 vUV;

void main()
{
    vUV = aUV;
	gl_Position = vec4(aPosition, 1.0);
}`,In=`#version 300 es
precision highp float;

out vec2 FragColor;
in vec2 vUV;

const float PI = 3.14159265359;
// ----------------------------------------------------------------------------
// http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
// efficient VanDerCorpus calculation.
float VanDerCorput(uint n, uint base)
{
    float invBase = 1.0 / float(base);
    float denom   = 1.0;
    float result  = 0.0;

    for(uint i = 0u; i < 32u; ++i)
    {
        if(n > 0u)
        {
            denom   = mod(float(n), 2.0);
            result += denom * invBase;
            invBase = invBase / 2.0;
            n       = uint(float(n) / 2.0);
        }
    }

    return result;
}
// ----------------------------------------------------------------------------
vec2 HammersleyNoBitOps(uint i, uint N)
{
    return vec2(float(i)/float(N), VanDerCorput(i, 2u));
}
// ----------------------------------------------------------------------------
vec3 ImportanceSampleGGX(vec2 Xi, vec3 N, float roughness)
{
	float a = roughness*roughness;
	
	float phi = 2.0 * PI * Xi.x;
	float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
	float sinTheta = sqrt(1.0 - cosTheta*cosTheta);
	
	// from spherical coordinates to cartesian coordinates - halfway vector
	vec3 H;
	H.x = cos(phi) * sinTheta;
	H.y = sin(phi) * sinTheta;
	H.z = cosTheta;
	
	// from tangent-space H vector to world-space sample vector
	vec3 up          = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
	vec3 tangent   = normalize(cross(up, N));
	vec3 bitangent = cross(N, tangent);
	
	vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
	return normalize(sampleVec);
}
// ----------------------------------------------------------------------------
float GeometrySchlickGGX(float NdotV, float roughness)
{
    // note that we use a different k for IBL
    float a = roughness;
    float k = (a * a) / 2.0;

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
vec2 IntegrateBRDF(float NdotV, float roughness)
{
    vec3 V;
    V.x = sqrt(1.0 - NdotV*NdotV);
    V.y = 0.0;
    V.z = NdotV;

    float A = 0.0;
    float B = 0.0; 

    vec3 N = vec3(0.0, 0.0, 1.0);
    
    const uint SAMPLE_COUNT = 1024u;
    for(uint i = 0u; i < SAMPLE_COUNT; ++i)
    {
        // generates a sample vector that's biased towards the
        // preferred alignment direction (importance sampling).
        vec2 Xi = HammersleyNoBitOps(i, SAMPLE_COUNT);
        vec3 H = ImportanceSampleGGX(Xi, N, roughness);
        vec3 L = normalize(2.0 * dot(V, H) * H - V);

        float NdotL = max(L.z, 0.0);
        float NdotH = max(H.z, 0.0);
        float VdotH = max(dot(V, H), 0.0);

        if(NdotL > 0.0)
        {
            float G = GeometrySmith(N, V, L, roughness);
            float G_Vis = (G * VdotH) / (NdotH * NdotV);
            float Fc = pow(1.0 - VdotH, 5.0);

            A += (1.0 - Fc) * G_Vis;
            B += Fc * G_Vis;
        }
    }
    A /= float(SAMPLE_COUNT);
    B /= float(SAMPLE_COUNT);
    return vec2(A, B);
}
// ----------------------------------------------------------------------------
void main() 
{
    vec2 integratedBRDF = IntegrateBRDF(vUV.x, vUV.y);
    FragColor = integratedBRDF;
}`;class Ln{constructor(t,e){u(this,"cube");u(this,"hdrImage");u(this,"cubeMap");u(this,"prefilteredMap");u(this,"convolutedMap");u(this,"brdf");u(this,"eqToCubShader",new Q(_n,Rn));u(this,"convoluteShader",new Q(An,Sn));u(this,"prefilterShader",new Q(Fn,Cn));u(this,"brdfQuad",new ht.Square(Un,In));u(this,"scene");u(this,"gl");this.scene=t,this.gl=P.GetInstance().gl;const i={dimension:this.gl.TEXTURE_CUBE_MAP,format:this.gl.RGBA32F,width:512,height:512,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_CUBE_MAP,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE,rWrap:this.gl.CLAMP_TO_EDGE}},n={dimension:this.gl.TEXTURE_CUBE_MAP,format:this.gl.RGBA32F,width:64,height:64,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_CUBE_MAP,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE,rWrap:this.gl.CLAMP_TO_EDGE}},s={dimension:this.gl.TEXTURE_CUBE_MAP,format:this.gl.RGBA32F,width:256,height:256,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_CUBE_MAP,minFilter:this.gl.LINEAR_MIPMAP_LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE,rWrap:this.gl.CLAMP_TO_EDGE}},a={dimension:this.gl.TEXTURE_2D,format:this.gl.RG16F,width:512,height:512,nChannels:this.gl.RG,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE}};this.cubeMap=new ie(i),this.convolutedMap=new ie(n),this.prefilteredMap=new ie(s),this.brdf=new _t(a),this.hdrImage=new Mn(e);const h=new pe(this.cubeMap),o=new st;this.cube=new et(o,h),this.GenerateIrradianceMaps(),this.GenreateBRDF()}GenerateIrradianceMaps(){var h,o,l;let t=ot(A(),mt(90),1,.1,10),e=[j(A(),U(0,0,0),U(1,0,0),U(0,-1,0)),j(A(),U(0,0,0),U(-1,0,0),U(0,-1,0)),j(A(),U(0,0,0),U(0,1,0),U(0,0,1)),j(A(),U(0,0,0),U(0,-1,0),U(0,0,-1)),j(A(),U(0,0,0),U(0,0,1),U(0,-1,0)),j(A(),U(0,0,0),U(0,0,-1),U(0,-1,0))];const i=this.scene.renderTarget;let n=this.cubeMap.GetTextureInfo();i.viewport={width:n.width,height:n.height},this.scene.renderer.SetRenderTarget(this.scene.renderTarget);const s=this.cube.geometry;this.gl.useProgram(this.eqToCubShader.GetId().val),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.hdrImage.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.eqToCubShader.GetId().val,"hdrTex"),0),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.eqToCubShader.GetId().val,"projection"),!1,t);for(let c=0;c<6;c++)n.dimension=this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+c,i.writeBuffer&&(i.writeBuffer.SetColorAttachment(this.cubeMap,this.gl.COLOR_ATTACHMENT0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer not complete")),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.eqToCubShader.GetId().val,"view"),!1,e[c]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.renderer.Draw(s.GetVertexArray(),this.eqToCubShader,36);(h=i.writeBuffer)==null||h.SetColorAttachment(this.scene.writeTexture,this.gl.COLOR_ATTACHMENT0),i.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height},n=this.convolutedMap.GetTextureInfo(),i.viewport={width:n.width,height:n.height},this.scene.renderer.SetRenderTarget(this.scene.renderTarget),this.gl.useProgram(this.convoluteShader.GetId().val),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.cubeMap.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.convoluteShader.GetId().val,"environmetMap"),0),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.convoluteShader.GetId().val,"projection"),!1,t);for(let c=0;c<6;c++)n.dimension=this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+c,i.writeBuffer&&(i.writeBuffer.SetColorAttachment(this.convolutedMap,this.gl.COLOR_ATTACHMENT0),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer not complete")),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.convoluteShader.GetId().val,"view"),!1,e[c]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.renderer.Draw(s.GetVertexArray(),this.convoluteShader,36);this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),(o=i.writeBuffer)==null||o.SetColorAttachment(this.scene.writeTexture,this.gl.COLOR_ATTACHMENT0),i.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height},this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilteredMap.GetId().val),this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.useProgram(this.prefilterShader.GetId().val),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.cubeMap.GetId().val),this.gl.uniform1i(this.gl.getUniformLocation(this.prefilterShader.GetId().val,"environmetMap"),0),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.prefilterShader.GetId().val,"projection"),!1,t);let a=5;if(i.writeBuffer){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,i.writeBuffer.GetFramebufferId().val);for(let c=0;c<a;c++){let d=256*Math.pow(.5,c),g=256*Math.pow(.5,c);i.viewport={width:d,height:g},this.gl.viewport(0,0,d,g);let m=c/(a-1);this.gl.uniform1f(this.gl.getUniformLocation(this.prefilterShader.GetId().val,"roughness"),m);for(let f=0;f<6;f++)n.dimension=this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+f,this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,n.dimension,this.prefilteredMap.GetId().val,c),i.writeBuffer.Resize(d,g),this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)!=this.gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer not complete"),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.prefilterShader.GetId().val,"view"),!1,e[f]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.renderer.Draw(s.GetVertexArray(),this.prefilterShader,36)}}this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),(l=i.writeBuffer)==null||l.SetColorAttachment(this.scene.writeTexture,this.gl.COLOR_ATTACHMENT0),i.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height}}GenreateBRDF(){const t=this.scene.renderTarget;let e=this.brdf.GetTextureInfo();t.viewport={width:e.width,height:e.height},this.scene.renderer.SetRenderTarget(this.scene.renderTarget);const i=this.brdfQuad.GetShader();this.gl.useProgram(i.GetId().val),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.hdrImage.GetId().val),t.writeBuffer&&(t.writeBuffer.SetColorAttachment(this.brdf,this.gl.COLOR_ATTACHMENT0),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.renderer.Draw(this.brdfQuad.GetVertexArray(),i,6),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),t.writeBuffer.SetColorAttachment(this.scene.writeTexture,this.gl.COLOR_ATTACHMENT0),t.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height})}GetHDRImage(){return this.hdrImage}GetCube(){return this.cube}GetCubeMap(){return this.cubeMap}GetConvolutedMap(){return this.convolutedMap}GetPrefilteredMap(){return this.prefilteredMap}GetBRDF(){return this.brdf}}const Gn=`#version 300 es

in vec3 aPosition;

uniform mat4 projection;
uniform mat4 view;
uniform mat4 model;

void main() 
{
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}`,zn=`#version 300 es
precision highp float;

out vec4 FragColor;

void main() 
{
    // Only rendering depth info, so no color output is required.
}   `;class Pn{constructor(t){u(this,"renderer");u(this,"renderTarget");u(this,"writeTexture");u(this,"lights",new Array);u(this,"camera");u(this,"skybox",null);u(this,"gl");u(this,"depthTexture");u(this,"depthViewMatrix");u(this,"depthProjectionMatrix");u(this,"depthShader",new Q(Gn,zn));u(this,"sceneBuffer");u(this,"depthBuffer");u(this,"meshes",new Array);this.renderer=t.GetRenderer(),this.gl=P.GetInstance().gl;const e=P.GetInstance().canvas,i={dimension:this.gl.TEXTURE_2D,format:this.gl.RGBA32F,width:e.width,height:e.height,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT}};this.writeTexture=new _t(i);const n={targetTexture:this.writeTexture,attachment:this.gl.COLOR_ATTACHMENT0,renderBufferCreateInfo:{width:e.width,height:e.height,format:this.gl.DEPTH24_STENCIL8,attachmentType:this.gl.DEPTH_STENCIL_ATTACHMENT}},s={viewport:{width:e.width,height:e.height},depthFunc:this.gl.LEQUAL,blendFunc:this.gl.ONE};this.sceneBuffer=new ae(n),this.renderTarget=new Xe(this.sceneBuffer,s);const a={dimension:this.gl.TEXTURE_2D,format:this.gl.DEPTH_COMPONENT32F,width:2048,height:2048,nChannels:this.gl.DEPTH_COMPONENT,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE}};this.depthTexture=new _t(a);const h={targetTexture:this.writeTexture,attachment:this.gl.DEPTH_ATTACHMENT,renderBufferCreateInfo:null};this.depthBuffer=new ae(h),this.depthViewMatrix=j(A(),[3,1.25,1.5],[0,0,0],[0,1,0]),this.depthProjectionMatrix=Qi(A(),-10,10,-10,10,1,100)}Render(t,e){this.camera.Update(t,e),this.renderTarget.viewport={width:2048,height:2048},this.renderTarget.writeBuffer=this.depthBuffer,this.renderTarget.depthFunc=this.gl.LEQUAL,this.depthBuffer.SetColorAttachment(this.depthTexture,this.gl.DEPTH_ATTACHMENT),this.gl.drawBuffers([this.gl.NONE]),this.gl.readBuffer(this.gl.NONE),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.renderer.SetRenderTarget(this.renderTarget),this.gl.clear(this.gl.DEPTH_BUFFER_BIT),this.DrawSceneToDepthBuffer(),this.renderer.End(),this.gl.disable(this.gl.CULL_FACE),this.renderTarget.viewport={width:this.gl.canvas.width,height:this.gl.canvas.height},this.renderTarget.writeBuffer=this.sceneBuffer,this.renderTarget.depthFunc=this.gl.LEQUAL,this.sceneBuffer.SetColorAttachment(this.writeTexture,this.gl.COLOR_ATTACHMENT0),this.renderer.SetRenderTarget(this.renderTarget);const i=this.GetAllChildren();for(const n of i.meshes)n.UpdateUniforms(this),n.userUpdateCallback&&n.userUpdateCallback(n,t,e);this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.DrawSceneToWriteBuffer(),this.renderer.End()}DrawSceneToDepthBuffer(){const t=this.GetAllChildren();this.gl.useProgram(this.depthShader.GetId().val),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.depthShader.GetId().val,"projection"),!1,this.depthProjectionMatrix),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.depthShader.GetId().val,"view"),!1,this.depthViewMatrix);for(const e of t.meshes){let i=A();if(i=me(i,e.rotation),i=ue(A(),i,e.scale),i=de(A(),i,e.position),this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.depthShader.GetId().val,"model"),!1,i),e.material instanceof tt){if(e.geometry instanceof st)this.renderer.Draw(e.geometry.GetVertexArray(),this.depthShader,36);else if(e.geometry instanceof St){const n=e.geometry.GetVertexArray(),s=n.GetIndexBuffer();this.gl.bindVertexArray(n.GetId().val),this.gl.useProgram(this.depthShader.GetId().val),s&&this.gl.drawElements(this.gl.TRIANGLES,s.GetUniqueSize()/s.GetUniqueIndices().BYTES_PER_ELEMENT,this.gl.UNSIGNED_SHORT,s.GetUniqueOffset())}}}}DrawSceneToWriteBuffer(){const t=this.GetAllChildren();if(this.skybox){this.skybox.GetCube().UpdateUniforms(this);const e=this.skybox.GetCube().geometry,i=this.skybox.GetCube().material;e instanceof st&&i instanceof pe&&this.renderer.Draw(e.GetVertexArray(),i.GetShader(),36)}for(const e of t.meshes)if(e.material instanceof tt){if(e.geometry instanceof st)this.renderer.Draw(e.geometry.GetVertexArray(),e.material.GetShader(),36);else if(e.geometry instanceof St){const i=e.geometry.GetVertexArray(),n=i.GetIndexBuffer(),s=e.material.GetShader();this.gl.bindVertexArray(i.GetId().val),this.gl.useProgram(s.GetId().val),n&&this.gl.drawElements(this.gl.TRIANGLES,n.GetUniqueSize()/n.GetUniqueIndices().BYTES_PER_ELEMENT,this.gl.UNSIGNED_SHORT,n.GetUniqueOffset())}}}Add(t){t instanceof et?this.meshes.push(t):t instanceof ti&&this.lights.push(t)}AddBackground(t){const i=Ht.GetInstance().GetTexture(t),n={dimension:this.gl.TEXTURE_2D,type:this.gl.FLOAT,format:this.gl.RGBA32F,nChannels:this.gl.RGBA,threeData:i,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.CLAMP_TO_EDGE,tWrap:this.gl.CLAMP_TO_EDGE}};this.skybox=new Ln(this,n)}SetCamera(t){this.camera=t}GetAllChildren(){return{meshes:this.meshes,lights:this.lights}}Resize(t,e){this.camera.Resize(t,e);const i={dimension:this.gl.TEXTURE_2D,format:this.gl.RGBA32F,width:t,height:e,nChannels:this.gl.RGBA,type:this.gl.FLOAT,data:null,samplerInfo:{dimension:this.gl.TEXTURE_2D,minFilter:this.gl.LINEAR,magFilter:this.gl.LINEAR,sWrap:this.gl.REPEAT,tWrap:this.gl.REPEAT}};this.writeTexture.Resize(i);const n={viewport:{width:t,height:e},depthFunc:this.gl.LEQUAL,blendFunc:this.gl.ONE};this.renderTarget.Resize(t,e,n)}}class Dn{constructor(t){u(this,"scene");u(this,"graphics");u(this,"script");u(this,"assets");u(this,"preloader");u(this,"interface");u(this,"frontend");u(this,"isReady",!1);u(this,"animationCallback");u(this,"animationFrameId",0);u(this,"lastFrame",0);u(this,"elapsedTime",0);u(this,"timeStep",0);this.script=t,this.graphics=new Ke,this.preloader=new gn,this.assets=Ht.GetInstance(),this.scene=new Pn(this.graphics),this.assets.LoadAllAssets(()=>{t.Initialize(),this.frontend=new ui,this.interface=new mn(this),this.isReady=!0}),window.addEventListener("resize",()=>this.OnResize()),this.isReady||this.DrawPreloader()}DrawPreloader(){this.animationFrameId=requestAnimationFrame(t=>this.AnimationLoop(t))}SetAnimationLoop(t){this.animationCallback=t,this.animationFrameId=requestAnimationFrame(e=>this.AnimationLoop(e))}AnimationLoop(t){this.elapsedTime=t,this.timeStep=t-this.lastFrame,this.lastFrame=t,this.animationCallback&&this.isReady?(this.preloader.isDestroyed||this.preloader.Destroy(),this.animationCallback(t,this.timeStep)):this.preloader.Update(this.elapsedTime,this.timeStep),this.animationFrameId=requestAnimationFrame(e=>this.AnimationLoop(e))}Update(){this.graphics!=null&&this.graphics.Update(this.scene,this.elapsedTime,this.timeStep)}OnResize(){let t=window.innerWidth,e=window.innerHeight,i=P.GetInstance().canvas;(i.width!=t||i.height!=e)&&(i.width=t,i.height=e,this.scene.Resize(i.width,i.height),this.graphics.Resize(i.width,i.height))}Stop(){cancelAnimationFrame(this.animationFrameId),this.animationCallback=void 0}}const dt=class dt{constructor(){u(this,"mouseMoveCallbacks",[]);u(this,"mouseDownCallbacks",[]);u(this,"mouseUpCallbacks",[]);u(this,"scrollCallbacks",[]);u(this,"keyDownCallbacks",[]);window.addEventListener("mousemove",t=>this.OnMouseMove(t)),window.addEventListener("mouseup",t=>this.OnMouseUp(t)),window.addEventListener("mousedown",t=>this.OnMouseDown(t)),window.addEventListener("wheel",t=>this.OnScroll(t),{passive:!1}),window.addEventListener("keydown",t=>this.OnKeyDown(t))}AddMouseMoveCallback(t){this.mouseMoveCallbacks.push(t)}AddMouseUpCallback(t){this.mouseUpCallbacks.push(t)}AddMouseDownCallback(t){this.mouseDownCallbacks.push(t)}AddScrollCallback(t){this.scrollCallbacks.push(t)}AddKeyDownCallback(t){this.keyDownCallbacks.push(t)}OnMouseMove(t){for(const e of this.mouseMoveCallbacks)e(t)}OnMouseUp(t){for(const e of this.mouseUpCallbacks)e(t)}OnMouseDown(t){for(const e of this.mouseDownCallbacks)e(t)}OnScroll(t){for(const e of this.scrollCallbacks)e(t)}OnKeyDown(t){for(const e of this.keyDownCallbacks)e(t)}static GetInstance(){return dt.instance||(dt.instance=new dt),new dt}};u(dt,"instance",null);let oe=dt;class Bn{constructor(t=1,e=0,i=0){u(this,"radius");u(this,"theta");u(this,"phi");this.radius=t,this.theta=e,this.phi=i}setFromVector3(t){this.radius=Ye(t),this.theta=Math.atan2(t[0],t[2]),this.phi=Math.acos(t[1]/this.radius)}setFromSpherical(t){this.radius=t.radius,this.theta=t.theta,this.phi=t.phi}}function Ve(r,t,e){return Math.max(t,Math.min(e,r))}function Nn(r,t,e){return U(r*Math.sin(e)*Math.sin(t),r*Math.cos(e),r*Math.sin(e)*Math.cos(t))}class ii{constructor(t){u(this,"camera");u(this,"input");u(this,"canvas");this.camera=t,this.input=oe.GetInstance(),this.canvas=document.querySelector("#canvas")}}class ke extends ii{constructor(e){super(e);u(this,"spherical",new Bn);u(this,"isDragging",!1);u(this,"previousMousePosition",[0,0]);u(this,"zoomFactor",46);u(this,"zoomSensitivity",.01);u(this,"mouseSensitivity",.005);u(this,"cameraStartPosition",[0,0,0]);u(this,"cameraTargetPosition",[0,0,0]);u(this,"lerpTime",0);u(this,"lerpDuration",1);this.input.AddMouseMoveCallback(s=>this.OnMouseMove(s)),this.input.AddMouseDownCallback(s=>this.OnMouseDown(s)),this.input.AddMouseUpCallback(s=>this.OnMouseUp(s)),this.camera.position=U(0,5,10),this.spherical.setFromVector3(this.camera.position);const i=j(A(),this.camera.position,this.camera.target,this.camera.up);this.camera.SetViewMatrix(i);const n=ot(A(),mt(this.camera.fov),this.canvas.width/this.canvas.height,.1,100);this.camera.SetProjectionMatrix(n)}Update(e){}SetCameraPosition(e){this.cameraStartPosition=ze(this.camera.position),this.cameraTargetPosition=ze(e),this.lerpTime=0}OnMouseMove(e){if(this.camera.controllable){if(!this.isDragging)return;const i={x:e.clientX-this.previousMousePosition[0],y:e.clientY-this.previousMousePosition[1]};this.spherical.setFromVector3(this.camera.position),this.spherical.theta-=i.x*this.mouseSensitivity,this.spherical.phi=Ve(this.spherical.phi-i.y*this.mouseSensitivity,.1,Math.PI-.1);const n=Nn(this.spherical.radius,this.spherical.theta,this.spherical.phi),s=Qe(qt(),n,[0,0,0]);this.camera.position=s;const a=j(A(),this.camera.position,this.camera.target,this.camera.up);this.camera.SetViewMatrix(a),this.previousMousePosition=[e.clientX,e.clientY]}}OnMouseDown(e){e.target.classList.contains("landing")&&(e.preventDefault(),this.isDragging=!0,this.previousMousePosition=[e.clientX,e.clientY])}OnMouseUp(e){this.isDragging=!1}UpdateCameraViewMatrix(){this.spherical.setFromVector3(this.camera.position);const e=j(A(),this.camera.position,this.camera.target,this.camera.up);this.camera.SetViewMatrix(e)}UpdateCameraProjectionMatrix(){const e=ot(A(),mt(this.camera.fov),this.canvas.width/this.canvas.height,.1,100);this.camera.SetProjectionMatrix(e)}OnScroll(e){e.preventDefault();let i=e.deltaY;this.camera.fov>=100?i=Math.min(i,0):this.camera.fov<=5&&(i=Math.max(0,i)),this.zoomFactor+=i*this.zoomSensitivity,this.camera.fov=Ve(this.zoomFactor,5,100),console.log(this.zoomFactor,this.camera.fov);const n=ot(A(),mt(this.camera.fov),this.canvas.width/this.canvas.height,.1,100);this.camera.SetProjectionMatrix(n)}}class Vn extends ii{constructor(e){super(e);u(this,"timeStep",.016);window.addEventListener("keydown",i=>this.OnKeyDown(i)),this.camera.position=U(-3,0,-1),this.camera.front=[1,0,0],this.UpdateCameraViewMatrix(),this.UpdateCameraProjectionMatrix()}Update(e){this.timeStep=e}OnKeyDown(e){this.UpdateCameraDirections()}UpdateCameraDirections(){}UpdateCameraViewMatrix(){const e=j(A(),this.camera.position,Qe(qt(),this.camera.position,this.camera.front),this.camera.up);this.camera.SetViewMatrix(e)}UpdateCameraProjectionMatrix(){const e=ot(A(),mt(this.camera.fov),this.canvas.width/this.canvas.height,.1,100);this.camera.SetProjectionMatrix(e)}}var he=(r=>(r[r.TurnTable=0]="TurnTable",r[r.FPS=1]="FPS",r))(he||{});class kn{constructor(t){u(this,"position");u(this,"target",[0,0,0]);u(this,"front",[0,0,-1]);u(this,"up",[0,1,0]);u(this,"right",[1,0,0]);u(this,"fov",45);u(this,"controllable",!1);u(this,"projectionMatrix",A());u(this,"viewMatrix",A());u(this,"controller");u(this,"fpsController");u(this,"turnTableController");u(this,"controllerType");this.position=t,this.fpsController=new Vn(this),this.turnTableController=new ke(this),this.controllerType=1,this.controller=this.fpsController}Update(t,e){this.controller instanceof ke&&this.controller.Update(e)}SetController(t){t==1?(this.controllable=!1,this.controller=this.fpsController,this.position=[-3,0,-1],this.fpsController.UpdateCameraViewMatrix(),this.fpsController.UpdateCameraProjectionMatrix()):(this.controllable=!0,this.controller=this.turnTableController,this.position=[0,5,10],this.turnTableController.UpdateCameraViewMatrix(),this.turnTableController.UpdateCameraProjectionMatrix())}SetViewMatrix(t){this.viewMatrix=t}SetProjectionMatrix(t){this.projectionMatrix=t}Resize(t,e){this.projectionMatrix=ot(A(),mt(this.fov),t/e,.1,100)}GetProjectionMatrix(){return this.projectionMatrix}GetViewMatrix(){return this.viewMatrix}}class On{constructor(){u(this,"isReady",!1);this.Loop=this.Loop.bind(this)}}class rt{constructor(t,e,i){u(this,"name");u(this,"offset");u(this,"size");u(this,"count");this.count=t,this.size=e,this.name=i}}class xe{constructor(t){u(this,"attributes",[]);u(this,"size",0);u(this,"stride",0);this.attributes=this.attributes.concat(t),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElement(t){this.attributes.push(t),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}PushElementArray(t){this.attributes=this.attributes.concat(t),this.CalculateStrideAndOffsets(),this.CaclulateAttributesSize()}CalculateStrideAndOffsets(){var t=0;for(const e of this.attributes)e.offset=t,t+=e.size,this.stride+=e.size}CaclulateAttributesSize(){for(const t of this.attributes)this.size+=t.size}GetAttributes(){return this.attributes}}const B=class B{constructor(t){u(this,"nUniqueVertices");u(this,"uniqueLayout");u(this,"uniqueVertexData");u(this,"uniqueSize",0);u(this,"uniqueOffset",0);this.uniqueVertexData=t;var e=new Float32Array(B.cachedVertexData.length+this.uniqueVertexData.length);e.set(B.cachedVertexData,0),e.set(this.uniqueVertexData,B.cachedVertexData.length),B.cachedVertexData=e}GetUniqueLayout(){return this.uniqueLayout}GetUniqueVertexData(){return this.uniqueVertexData}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}GetVerticesCount(){return this.nUniqueVertices}SetLayout(t){this.uniqueLayout=t,this.uniqueSize=this.uniqueVertexData.length*this.uniqueVertexData.BYTES_PER_ELEMENT,this.uniqueOffset=B.cachedSize,this.nUniqueVertices=this.uniqueSize/this.uniqueLayout.size,B.cachedSize+=this.uniqueSize,this.PushLayoutToBuffer();var e=P.GetInstance();const i=e.gl;B.Id.val||(B.Id.val=i.createBuffer()),i.bindBuffer(i.ARRAY_BUFFER,B.Id.val),i.bufferData(i.ARRAY_BUFFER,B.cachedVertexData,i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null)}PushLayoutToBuffer(){B.cachedLayout.concat(this.uniqueLayout)}};u(B,"Id",{val:null}),u(B,"cachedVertexData",new Float32Array),u(B,"cachedLayout",new Array),u(B,"cachedSize",0);let gt=B;const V=class V{constructor(t){u(this,"uniqueIndices");u(this,"uniqueOffset");u(this,"uniqueSize");this.uniqueIndices=t,this.uniqueOffset=V.cachedSize,this.uniqueSize=this.uniqueIndices.length*2;var e=new Uint16Array(V.cachedIndices.length+this.uniqueIndices.length);e.set(V.cachedIndices,0),e.set(this.uniqueIndices,V.cachedIndices.length),V.cachedIndices=e,V.cachedSize=V.cachedIndices.length*2;var i=P.GetInstance();const n=i.gl;V.Id.val||(V.Id.val=n.createBuffer()),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,V.Id.val),n.bufferData(n.ELEMENT_ARRAY_BUFFER,V.cachedIndices,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}GetUniqueIndices(){return this.uniqueIndices}GetUniqueOffset(){return this.uniqueOffset}GetUniqueSize(){return this.uniqueSize}};u(V,"cachedIndices",new Uint16Array),u(V,"cachedSize",0),u(V,"Id",{val:null});let jt=V;class ve{constructor(t,e=null){u(this,"id",{val:null});u(this,"vertexBuffer");u(this,"indexBuffer",null);this.vertexBuffer=t,this.indexBuffer=e;const n=P.GetInstance().gl;this.id={val:n.createVertexArray()},n.bindVertexArray(this.id.val),n.bindBuffer(n.ARRAY_BUFFER,gt.Id.val),this.indexBuffer&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,jt.Id.val);var s=0;for(const o of this.vertexBuffer.GetUniqueLayout().GetAttributes()){var a=this.vertexBuffer.GetUniqueLayout(),h=gt.cachedSize-this.vertexBuffer.GetUniqueVertexData().length*this.vertexBuffer.GetUniqueVertexData().BYTES_PER_ELEMENT;n.vertexAttribPointer(s,o.count,n.FLOAT,!1,a.stride,h+o.offset),n.enableVertexAttribArray(s),s++}n.bindVertexArray(null),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}GetId(){return this.id}GetVertexBuffer(){return this.vertexBuffer}GetIndexBuffer(){return this.indexBuffer}}class Hn extends On{constructor(){super();u(this,"dragon");this.dragon=new Dn(this)}Initialize(){const e=new kn(U(0,5,10));this.dragon.scene.SetCamera(e),this.dragon.scene.AddBackground("ocean");let i=new tt({albedo:[1.2,1.2,1.2],ao:1,roughenss:.1,metallic:.9}),n=new St(.2,50,50),s=new et(n,i);s.position=[0,-.2,-2];let a=new tt({albedo:[1,0,0],ao:1,roughenss:.1,metallic:.9}),h=new St(.2,50,50),o=new et(h,a);o.position=[0,-.2,-1.5];let l=new tt({albedo:[1.5,1.5,1.5],ao:1,roughenss:.9,metallic:.1}),c=new St(.2,50,50),d=new et(c,l);d.position=[0,-.2,-1];let g=new tt({albedo:[1.5,1.5,1.5],ao:1,roughenss:.8,metallic:.2}),m=new st,f=new et(m,g);f.position=[0,-5,0],f.scale=[5,.1,5];let p=new tt({albedo:[1.5,1.5,1.5],ao:1,roughenss:.8,metallic:.2}),v=new st,x=new et(v,p);x.position=[-50,.8,0],x.scale=[.1,2,5];let b=new tt({albedo:[1.5,1.5,1.5],ao:1,roughenss:.8,metallic:.2}),R=new st,M=new et(R,b);M.position=[0,.8,-50],M.scale=[5,2,.1],this.dragon.scene.Add(s),this.dragon.scene.Add(o),this.dragon.scene.Add(d),this.dragon.scene.Add(f),this.dragon.scene.Add(M),this.dragon.scene.Add(x);const E=new ei([3,1,1],[1,1,1],0);this.dragon.scene.Add(E),this.dragon.graphics=new Ke,this.dragon.graphics.SetSizes(window.innerWidth,window.innerHeight),this.dragon.SetAnimationLoop(this.Loop)}Loop(e,i){this.dragon.Update()}}class jn{constructor(){u(this,"script");this.script=new Hn}}new jn;
