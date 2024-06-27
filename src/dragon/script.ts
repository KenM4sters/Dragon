import { Dragon } from "./dragon";


export abstract class IScript 
{
    constructor() 
    {
        this.Loop = this.Loop.bind(this); 
    }

    public abstract Initialize() : void;
    public abstract Loop(elapsedTime : number, timeStep : number) : void;

};