import { Dragon } from "./dragon";


export abstract class IScript 
{
    constructor() 
    {
        this.Loop = this.Loop.bind(this);
    }

    protected abstract Loop(elapsedTime : number, timeStep : number) : void;
    
    protected dragon : Dragon = new Dragon();
};