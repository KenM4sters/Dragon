import { Script } from "./script";


class App
{
    constructor() 
    {
        this.script = new Script();
        
        // Might move some other modules here...
    }

    private script : Script;
};

const app = new App();