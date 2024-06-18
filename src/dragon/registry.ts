import { Entity } from "./entity";


export class Registry 
{
    constructor() {}

    public CreateEntity() : Entity 
    {
        let entity : Entity = new Entity();
        this.entities.push(entity);
        return entity;
    }
    
    private entities : Array<Entity> = new Array<Entity>();
};