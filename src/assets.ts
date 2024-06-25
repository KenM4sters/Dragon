import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { TextureImageData } from 'three/src/textures/types.js';

export default class Assets 
{
    constructor() 
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
                    Assets.textures.set(r.name, IMG);
                    this.UpdateStatus(callback);
                })
            } else if(r.type == "HDR") 
            {   
                loader.load(r.path, (tex) => 
                {
                    Assets.textures.set(r.name, tex.image);
                    this.UpdateStatus(callback);
                })
            }
        }
    }

    private UpdateStatus(callback: () => void) : void 
    {
        Assets.status += 1;
        if(Assets.status == sources.length) 
        {
            callback();
        }
    }

    public static GetTexture(name : string) : HTMLImageElement | TextureImageData | undefined 
    { 
        return this.textures.get(name); 
    }

    private static textures : Map<string, HTMLImageElement | TextureImageData> = new Map<string, HTMLImageElement | TextureImageData>();
    private static status : number = 0;
}

const sources : {name: string, type: string, path: string}[] = 
[
    {
        name: "ocean",
        type: "HDR",
        path: "./ocean.hdr"
    },
]