import mammothHTML from "./html/mammoth2d.html?raw";
import silverbackHTML from "./html/silverback.html?raw";
import dragonHTML from "./html/dragon.html?raw";
import reactionHTML from "./html/reaction.html?raw";

export class Projects 
{
    constructor() 
    {
        this.mammoth = mammothHTML;
        this.silverback = silverbackHTML;
        this.dragon = dragonHTML;
        this.reaction = reactionHTML;
    }   

    public mammoth : string;
    public silverback : string;
    public dragon : string;
    public reaction : string;

}