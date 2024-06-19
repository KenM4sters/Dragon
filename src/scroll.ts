


export class Scroll 
{
    constructor() 
    {
      this.OnScroll();
    }
    
    OnScroll() : void 
    {
      window.addEventListener('wheel', (event: WheelEvent) => 
      {
        event.preventDefault();
        const pageWrapper = document.querySelector("#webpage-wrapper") as HTMLElement;
        this.targetScroll += event.deltaY;
        this.targetScroll = Math.max(0, Math.min(this.targetScroll, pageWrapper.scrollHeight - window.innerHeight)); // Clamp to bounds
        this.HandleScroll();
      }, {passive: false});
    }

    HandleScroll() : void 
    {
      const pageWrapper = document.querySelector("#webpage-wrapper") as HTMLElement;
       // Ease towards the target scroll position
       this.currentScroll += (this.targetScroll - this.currentScroll) * this.scrollSpeed;
       pageWrapper.style.transform = `translateY(${-this.currentScroll}px)`;
       
       // Check if the animation should continue
       if (Math.abs(this.targetScroll - this.currentScroll) > this.epsilon) {
           this.animationFrameId = requestAnimationFrame(this.HandleScroll.bind(this));
       } else {
           // Stop the animation
           this.currentScroll = this.targetScroll;
           pageWrapper.style.transform = `translateY(${-this.currentScroll}px)`;
           this.animationFrameId = null;
       }
    }

    private targetScroll : number = 0;
    private currentScroll : number = 0;
    private scrollSpeed : number = 0.001;
    private bounds : {top: number; bottom: number} = {top : 0, bottom : 400};
    private animationFrameId: number | null = null;
    private epsilon: number = 0.5; // Adjust threshold for stopping animation
};