import { onUnmounted, ref } from "vue";

export function useDefer(max: number) {

    const frameCount = ref(1);

    let rafId: number | null = null;

    function updateFrameCount() {
        rafId = requestAnimationFrame(() => {
            frameCount.value+= 1;
            if (frameCount.value >= max) return;
            updateFrameCount();
        });
    }

    updateFrameCount();

    onUnmounted(() => {
        cancelAnimationFrame(rafId!);
        rafId = null;
    })

    return function (n: number): boolean {
        return frameCount.value >= n
    }
}