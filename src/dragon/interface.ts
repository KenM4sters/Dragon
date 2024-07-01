import { FPSController, TurnTableController } from "./controller";
import { Dragon } from "./dragon";
import { CameraControllerTypes } from "./export";

/**
 * @brief Small abstraction to handle the various different GUI options for Dragon.
 * This will probably grow larger over time.
 */
export class Interface 
{
    constructor(dragon : Dragon) 
    {
        this.dragon = dragon;

        this.sceneViewSlider = document.querySelector(".scene-view-slider") as HTMLElement;
        this.cameraIcon = {element: document.querySelector(".camera-view") as HTMLElement, selected: false};
        this.satelliteIcon = {element: document.querySelector(".satellite-view") as HTMLElement, selected: false};

        this.cameraIcon.element.addEventListener("click", () => 
        {
            if(this.cameraIcon.selected) 
            {   
                return;
            }

            this.ToggleView(true);
        })

        this.satelliteIcon.element.addEventListener("click", () => 
        {
            if(this.satelliteIcon.selected) 
            {   
                return;
            }

            this.ToggleView(false);
        })


        this.ToggleView(true);
    }

    private ToggleView(state : boolean) : void 
    {
        if(state) 
        {
            this.dragon.scene.camera.SetController(CameraControllerTypes.FPS);
            
            this.sceneViewSlider.classList.remove("viewing-satellite");

            this.sceneViewSlider.classList.add("viewing-camera");
            this.cameraIcon.element.classList.remove("unselected-scene-view");
            this.cameraIcon.element.classList.add("selected-scene-view");
            this.satelliteIcon.element.classList.add("unselected-scene-view");

            this.cameraIcon.selected = true;
            this.satelliteIcon.selected = false;
        }
        else 
        {
            this.dragon.scene.camera.SetController(CameraControllerTypes.TurnTable);
            
            this.sceneViewSlider.classList.remove("viewing-camera");

            this.sceneViewSlider.classList.add("viewing-satellite");
            this.satelliteIcon.element.classList.remove("unselected-scene-view");
            this.satelliteIcon.element.classList.add("selected-scene-view");
            this.cameraIcon.element.classList.add("unselected-scene-view");


            this.satelliteIcon.selected = true;
            this.cameraIcon.selected = false;
        }
    }

    private toggleView : boolean = true;
    private modifySceneProps : boolean = false;
    private sceneViewSlider : HTMLElement;
    private cameraIcon: {element : HTMLElement, selected : boolean};
    private satelliteIcon: {element : HTMLElement, selected : boolean};
    private dragon : Dragon;
}