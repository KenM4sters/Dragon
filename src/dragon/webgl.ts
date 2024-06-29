
/**
 * @brief Simple interface to force clases to handle window resizing.
 */
export interface Layer 
{
    Resize(width : number, height : number) : void;
};

/**
 * @brief Wrapper around any variable to ensure that it's passed by reference and not value.
 */
export class Ref<T> {
    constructor(public val : T) {};
};


/**
 * @brief Singleton class that merely provies easier access to the canvas and WebGl context
 * instances that are needed throughout the application. 
 */
export class WebGL 
{
    private constructor() 
    {        
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.gl = this.canvas.getContext('webgl2', {antialias: false}) as WebGL2RenderingContext;
        if (!this.gl) throw new Error("webgl context is not available!");

        var ext1 = this.gl.getExtension('EXT_color_buffer_float');
        if (!ext1) 
        {
            throw new Error('EXT_color_buffer_float is not supported')
        };

        var ext2 = this.gl.getExtension('OES_texture_float_linear');
        if (!ext2) 
        {
            throw new Error('OES_texture_float_linear is not supported')
        };
    }
                
    // Public static method to get the instance of the class
    public static GetInstance() : WebGL 
    {
        if(!WebGL.instance) 
        {
            WebGL.instance = new WebGL();
        }

        return WebGL.instance;
    }
                
                
    public canvas !: HTMLCanvasElement;
    public gl !: WebGL2RenderingContext;
    
    private static instance : WebGL | null = null;
};