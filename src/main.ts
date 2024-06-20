import { Frontend } from "./frontend.ts";
import { Script } from "./script.ts";


class App
{
    constructor() 
    {
        this.frontend = new Frontend();
        this.script = new Script();
    }

    private frontend : Frontend;
    private script : Script;
};

const app = new App();