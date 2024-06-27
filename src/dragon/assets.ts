import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { TextureImageData } from 'three/src/textures/types.js';

export default class Assets 
{
    private constructor() 
    {
    }

    public LoadAllAssets(callback: () => void) : void 
    {
        const loader = new RGBELoader();
        for(const r of sources) 
        {
            if(r.type == "LDR") 
            {
                const IMG = new Image();
                IMG.src = r.path;  
                IMG.style.transform = `'rotateY(180deg)'`;
                
                IMG.addEventListener("load", () => {
                    this.textures.set(r.name, IMG);
                    this.UpdateStatus(callback);
                })
            } else if(r.type == "HDR") 
            {   
                loader.load(r.path, (tex) => 
                {                                                                                 
                    this.textures.set(r.name, tex.image);                    
                    this.UpdateStatus(callback);
                })
            }
        }
    }

    private UpdateStatus(callback: () => void) : void 
    {
        this.status += 1;
        if(this.status == sources.length) 
        {
            callback();
        }
    }

    public GetTexture(name : string) : HTMLImageElement | TextureImageData | undefined 
    {         
        return this.textures.get(name); 
    }

    public static GetInstance() : Assets 
    {
        if(!this.instance) 
        {
            this.instance = new Assets();
        }

        return this.instance;
    }

    private static instance : Assets;
    private textures : Map<string, HTMLImageElement | TextureImageData> = new Map<string, HTMLImageElement | TextureImageData>();
    private status : number = 0;
}

const sources : {name: string, type: string, path: string}[] = 
[
    {
        name: "ocean",
        type: "HDR",
        path: "./ocean.hdr"
    },
]