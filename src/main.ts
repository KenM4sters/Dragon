import { Frontend } from "./frontend";
import { Script } from "./script";


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