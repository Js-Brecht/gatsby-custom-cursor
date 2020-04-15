import { initCanvas } from './canvas';

export const initCursor = (cursorEl, canvasEl) => {

    const state = {
        // set the starting position of the cursor outside of the screen
        client: {
            X: -100,
            Y: -100,
        },
        isStuck: false,
        stuck: {
            X: 0,
            Y: 0,
        },
    };

    const getState = () => ({
        ...state,
        client: {
            ...state.client,
        },
        stuck: {
            ...state.stuck,
        },
    });

    const setStuck = (el) => {
        const clientRect = el.getBoundingClientRect();
        state.stuck.X = Math.round(clientRect.left + clientRect.width / 2);
        state.stuck.Y = Math.round(clientRect.top + clientRect.height / 2);
        state.isStuck = true;
    };

    const handleMouseMove = (e) => {
        state.client.X = e.clientX;
        state.client.Y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const render = () => {
        cursorEl.style.transform = `translate(${state.client.X}px, ${state.client.Y}px)`;
    
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return {
        canvas: initCanvas(canvasEl, getState),
        stick: (el) => {
            if (el) return setStuck(el);
            state.isStuck = false;
        },
    };
};