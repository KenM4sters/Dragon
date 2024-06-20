import { Entity } from "./entity.ts";


export class Registry 
{
    constructor() {}

    public CreateEntity() : Entity 
    {
        let entity : Entity = new Entity();
        this.entities.push(entity);
        return entity;
    }

    public GetAllEntities() : Array<Entity> { return this.entities; }
    
    private entities : Array<Entity> = new Array<Entity>();
};