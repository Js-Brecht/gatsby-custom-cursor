import { initCursor } from './cursor';

class CustomCursor {
    init() {
        const innerCursor = document.querySelector(".cursor--small");
        const canvasEl = document.querySelector(".cursor--canvas");
        this.cursor = initCursor(innerCursor, canvasEl);
    }

    stickTo(el) {
        this.cursor.stick(el);
    }
    unStick() {
        this.cursor.stick();
    }
}

export default new CustomCursor();