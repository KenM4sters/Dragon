

export class Assets 
{
    private constructor() {}

    public SaveAsset(name : string, asset : any) : void 
    {
        if(asset instanceof WebGLTexture) 
        {
            this.textures.set(name, asset);
        }
    }

    public GetTexture(name : string) : WebGLTexture | null 
    {
        const asset = this.textures.get(name);
        
        if(asset instanceof WebGLTexture) 
        {
            return asset;
        }
    
        return null;
    }

    // Public static method to get the instance of the class
    public static GetInstance() : Assets 
    {
        if(!Assets.instance) 
        {
            Assets.instance = new Assets();
        }

        return Assets.instance;
    }

    private textures : Map<string, WebGLTexture> = new Map<string, WebGLTexture>();

    private static instance : Assets;
}