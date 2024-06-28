import { Dragon } from "./dragon";


/**
 * @brief The way the engine works is by taking in a derived instance of this IScript class
 * and calling it's intialize method. The user needs to setup their own class that inherits
 * from this and defines an appropriate instantiation and render loop methods.
 */
export abstract class IScript 
{
    constructor() 
    {
        this.Loop = this.Loop.bind(this); 
    }

    public abstract Initialize() : void;
    public abstract Loop(elapsedTime : number, timeStep : number) : void;

};