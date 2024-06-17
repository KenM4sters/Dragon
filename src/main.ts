import { WebGL } from "./webgl/webgl";
import { Frontend } from "./frontend";


class App
{
    constructor() 
    {
        this.frontend = new Frontend();
        this.webgl = new WebGL();
    }

    public Run() : void 
    {
        this.webgl.Run();
    }

    private frontend : Frontend;
    private webgl : WebGL; 
};


var app = new App();
app.Run();