import Assets from "./assets";
import { Frontend } from "./frontend";
import { Script } from "./script";


class App
{
    constructor() 
    {
        this.frontend = new Frontend();
        this.assets = new Assets();
        this.assets.LoadAllAssets(() => this.RunScript());
    }

    private RunScript() : void 
    {
        this.script = new Script();
    }

    private frontend : Frontend;
    private assets : Assets;
    private script !: Script;
};

const app = new App();