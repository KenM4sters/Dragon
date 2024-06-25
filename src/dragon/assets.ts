import { Image } from "./graphics/image";
import { Shader, Texture } from "./export";


export class Assets 
{
    private constructor() {}

    public SaveAsset(name : string, asset : Texture | Image | Shader) : void 
    {
        if(asset instanceof Texture) 
        {
            this.textures.set(name, asset);
        }
        else if(asset instanceof Image) 
        {
            this.images.set(name, asset);
        }
        else if(asset instanceof Shader) 
        {
            this.shaders.set(name, asset);
        }
    }

    public GetTexture(name : string) : Texture | null 
    {
        const asset = this.textures.get(name);
        
        if(asset instanceof Texture) 
        {
            return asset;
        }
    
        return null;
    }

    public GetImage(name : string) : Image | null 
    {
        const asset = this.images.get(name);

        if(asset instanceof Image) 
        {
            return asset;
        }
        
        return null;
    }

    public GetShader(name : string) : Shader | null 
    {
        const asset = this.shaders.get(name);

        if(asset instanceof Shader) 
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

    private textures : Map<string, Texture> = new Map<string, Texture>();
    private images : Map<string, Image> = new Map<string, Image>();
    private shaders : Map<string, Shader> = new Map<string, Shader>();

    private static instance : Assets;
}