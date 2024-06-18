

export class Sizes 
{
    constructor() 
    {
        this.Resize();

        window.addEventListener("resize", () => this.Resize);
    }

    public Resize() : void 
    {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;

        var canvas  = document.querySelector('#canvas') as HTMLCanvasElement;

        if(canvas.width != newWidth || canvas.height != newHeight) 
        {
            canvas.width = newWidth;
            canvas.height = newHeight;
        }

        this.width = canvas.width;
        this.height = canvas.height;
    } 
    
    public GetWidth() : number { return this.width;}
    public GetHeight() : number { return this.height;}

    private width : number = 0;
    private height : number = 0;
};