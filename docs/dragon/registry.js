import { Entity } from "./entity";
export class Registry {
    constructor() {
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array()
        });
    }
    CreateEntity() {
        let entity = new Entity();
        this.entities.push(entity);
        return entity;
    }
    GetAllEntities() { return this.entities; }
}
;
