
/**
 * @brief Simple interface to force clases to handle window resizing.
 */
export interface Layer 
{
    OnResize() : void;
};

/**
 * @brief Wrapper around any variable to ensure that it's passed by reference and not value.
 */
export class Ref<T> {
    constructor(public val : T) {};
};


/**
 * @brief Singleton class to act as our entry point.
 */
export class WebGL implements Layer 
{
    private constructor() 
    {        
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        
        this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;
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
    
    public OnResize() : void 
    {

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