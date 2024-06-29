import * as glm from "gl-matrix";

export class Spherical {
    public radius: number;
    public theta: number;
    public phi: number;

    constructor(radius: number = 1, theta: number = 0, phi: number = 0) {
        this.radius = radius;
        this.theta = theta;
        this.phi = phi;
    }

    setFromVector3(vec: glm.vec3) {
        this.radius = glm.vec3.length(vec);
        this.theta = Math.atan2(vec[0], vec[2]);
        this.phi = Math.acos(vec[1] / this.radius);
    }  

    setFromSpherical(spherical: Spherical) {
        this.radius = spherical.radius;
        this.theta = spherical.theta;
        this.phi = spherical.phi;
    }
}

// Utility function to clamp values
export function Clamp(value: number, min: number, max: number): number 
{
    return Math.max(min, Math.min(max, value));
}

export function SphericalToCartesian(radius: number, theta: number, phi: number): glm.vec3 
{
    return glm.vec3.fromValues(
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.cos(theta)
    );
}


export function Lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

export function EaseInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
