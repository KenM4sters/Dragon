/**
 * @brief WIP
 */
export class Scroll {
    constructor() {
        Object.defineProperty(this, "targetScroll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "currentScroll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "scrollSpeed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0.001
        });
        Object.defineProperty(this, "bounds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { top: 0, bottom: 400 }
        });
        Object.defineProperty(this, "animationFrameId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "epsilon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0.5
        }); // Adjust threshold for stopping animation
        this.OnScroll();
    }
    OnScroll() {
        window.addEventListener('wheel', (event) => {
            event.preventDefault();
            const pageWrapper = document.querySelector("#webpage-wrapper");
            this.targetScroll += event.deltaY;
            this.targetScroll = Math.max(0, Math.min(this.targetScroll, pageWrapper.scrollHeight - window.innerHeight)); // Clamp to bounds
            this.HandleScroll();
        }, { passive: false });
    }
    HandleScroll() {
        const pageWrapper = document.querySelector("#webpage-wrapper");
        // Ease towards the target scroll position
        this.currentScroll += (this.targetScroll - this.currentScroll) * this.scrollSpeed;
        pageWrapper.style.transform = `translateY(${-this.currentScroll}px)`;
        // Check if the animation should continue
        if (Math.abs(this.targetScroll - this.currentScroll) > this.epsilon) {
            this.animationFrameId = requestAnimationFrame(this.HandleScroll.bind(this));
        }
        else {
            // Stop the animation
            this.currentScroll = this.targetScroll;
            pageWrapper.style.transform = `translateY(${-this.currentScroll}px)`;
            this.animationFrameId = null;
        }
    }
}
;
