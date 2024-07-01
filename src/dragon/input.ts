

type MouseCallback = (event : MouseEvent) => void;
type ScrollCallback = (event : WheelEvent) => void;
type KeyCallback = (event : KeyboardEvent) => void;

export class Input 
{
    private constructor() 
    {
        window.addEventListener("mousemove", (e: MouseEvent) => this.OnMouseMove(e));
        window.addEventListener("mouseup", (e: MouseEvent) => this.OnMouseUp(e));
        window.addEventListener("mousedown", (e: MouseEvent) => this.OnMouseDown(e));
        window.addEventListener("wheel", (e: WheelEvent) => this.OnScroll(e), {passive: false});
        window.addEventListener("keydown", (e: KeyboardEvent) => this.OnKeyDown(e));
    }

    public AddMouseMoveCallback(callback : MouseCallback) : void 
    {
        this.mouseMoveCallbacks.push(callback);
    } 

    public AddMouseUpCallback(callback : MouseCallback) : void 
    {
        this.mouseUpCallbacks.push(callback);
    }

    public AddMouseDownCallback(callback : MouseCallback) : void 
    {
        this.mouseDownCallbacks.push(callback);
    }

    public AddScrollCallback(callback : ScrollCallback) : void 
    {
        this.scrollCallbacks.push(callback);
    }

    public AddKeyDownCallback(callback : KeyCallback) : void 
    {
        this.keyDownCallbacks.push(callback);
    }
    
    private OnMouseMove(e : MouseEvent) : void 
    {        
        for(const mouseMoveCallback of this.mouseMoveCallbacks) 
        {   
            mouseMoveCallback(e);
        }
    }

    private OnMouseUp(e : MouseEvent) : void 
    {
        for(const mouseUpCallback of this.mouseUpCallbacks) 
        {
            mouseUpCallback(e);
        }
    }

    private OnMouseDown(e : MouseEvent) : void 
    {
        
        for(const mouseDownCallback of this.mouseDownCallbacks) 
        {        
            mouseDownCallback(e);
        }
    }

    private OnScroll(e : WheelEvent) : void 
    {
        for(const scrollCallback of this.scrollCallbacks) 
        {
            scrollCallback(e);
        }
    }

    private OnKeyDown(e : KeyboardEvent) : void 
    {
        for(const keyDownCallback of this.keyDownCallbacks) 
        {
            keyDownCallback(e);
        }
    }


    public static GetInstance() : Input 
    {
        if(!Input.instance) 
        {
            Input.instance = new Input();
        }
        
        return new Input();
    }

    private static instance : Input | null = null;
    private mouseMoveCallbacks : MouseCallback[] = [];
    private mouseDownCallbacks : MouseCallback[] = [];
    private mouseUpCallbacks : MouseCallback[] = [];
    private scrollCallbacks : ScrollCallback[] = [];
    private keyDownCallbacks : KeyCallback[] = [];

}