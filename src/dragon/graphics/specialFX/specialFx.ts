import { SpecialFXPass } from "../renderer/pass";
import { Renderer } from "../renderer/renderer";
import { RenderTarget } from "../renderer/target";
import { RawTexture2D } from "../texture";
import { BloomPass, BloomPassCreateInfo } from "./bloom";
import { HDRPass } from "./hdr";


export class SpecialFx 
{
    constructor(renderer : Renderer) 
    {
        this.renderer = renderer;

        this.passes.set("HDR", new HDRPass(this.renderer, {}));
    }

    public AddBloom(createInfo : BloomPassCreateInfo) : void 
    {
        this.passes.push(new BloomPass(renderer, createInfo));
    }

    private target : RenderTarget;
    private read: RawTexture2D;
    private write: RawTexture2D;

    private passes : Map<String, SpecialFXPass> = new Map<String, SpecialFXPass>();
    private renderer : Renderer;
}