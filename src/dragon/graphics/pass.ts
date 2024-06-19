import { Primitives } from "../primitives";


export class Pass 
{
    constructor(vertSrc : string, fragSrc : string) 
    {
        this.quad = new Primitives.Square(vertSrc, fragSrc);
    }

    public quad : Primitives.Square;
}