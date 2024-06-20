export class Animator {
    constructor() { }
    static LerpDOMElement(element, to, duration) {
        const startTime = performance.now();
        const target = this.ConvertPosToNative(to.x, to.y);
        const transformedPos = { ...Animator.GetElementPosition(element) };
        const rawPos = Animator.GetRawElementPosition(element);
        function Animate() {
            const progress = performance.now() - startTime;
            if (progress <= duration) {
                // const newPosX = Animator.Lerp(transformedPos.left, target.x, duration, progress);
                const newPosY = Animator.Lerp(transformedPos.top, target.y, duration, progress);
                element.style.transform = `translateY(${newPosY - rawPos.top}px)`;
                requestAnimationFrame(() => Animate());
            }
        }
        Animate();
    }
    static LerpVec3(pos, target, duration) {
        const startTime = performance.now();
        let startPos = { ...pos };
        function Animate() {
            const progress = performance.now() - startTime;
            if (progress <= duration) {
                pos.val[0] = Animator.Lerp(startPos.val[0], target[0], duration, progress);
                pos.val[1] = Animator.Lerp(startPos.val[1], target[1], duration, progress);
                pos.val[2] = Animator.Lerp(startPos.val[2], target[2], duration, progress);
                // console.log(pos);
                requestAnimationFrame(() => Animate());
            }
        }
        Animate();
    }
    static LerpFloat(pos, target, duration) {
        const startTime = performance.now();
        let startPos = { ...pos };
        function Animate() {
            const progress = performance.now() - startTime;
            if (progress <= duration) {
                pos.val = Animator.Lerp(startPos.val, target, duration, progress);
                // console.log(pos);
                requestAnimationFrame(() => Animate());
            }
        }
        Animate();
    }
    static Lerp(startPos, targetPos, duration, progress) {
        const t = progress / (duration + 0.00001);
        const easeInEaseOut = t < 0.5 ? 0.5 * Math.pow(2 * t, 2) : -0.5 * ((2 * t - 2) * (2 * t - 2) - 2);
        const newPos = startPos + (targetPos - startPos) * easeInEaseOut;
        return newPos;
    }
    static GetElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left
        };
    }
    static ConvertPosToNative(posX, posY) {
        let newPos = {
            x: posX + (window.innerWidth / 2),
            y: posY + (window.innerHeight / 2)
        };
        return newPos;
    }
    // Takes a posX and posY in window coordinates (top-left = 0,0) and converts them
    // to sclip space coordinates in WebGL (-1.0 <-> 1.0)
    static ConvertPosToWebGL(posX, posY) {
        let newPos = {
            x: (posX / window.innerWidth) * 2 - 1,
            y: -((posY / window.innerHeight) * 2 - 1)
        };
        return newPos;
    }
    static GetRawElementPosition(element) {
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        const transform = style.transform;
        // If there is no transform, return the original position
        if (transform === 'none') {
            return {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX
            };
        }
        // Parse transform matrix
        const matrix = new DOMMatrixReadOnly(transform);
        // Calculate position without transforms
        const positionWithoutTransforms = {
            top: rect.top - matrix.m42 + window.scrollY,
            left: rect.left - matrix.m41 + window.scrollX
        };
        return positionWithoutTransforms;
    }
}
;
