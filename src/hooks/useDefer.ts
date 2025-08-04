import { onUnmounted, ref } from 'vue';

export function useDefer(max: number = 3): (n: number) => boolean {
    const frameCount = ref(1);

    let rafId: number | null = null;

    //@ts-ignore
    function updateFrameCount() {
        rafId = requestAnimationFrame(() => {
            frameCount.value++;
            if(frameCount.value >= max) return;
            updateFrameCount();
        });
    }

    onUnmounted(() => {
        cancelAnimationFrame(rafId!);
        rafId = null;
    })

    return function (n: number): boolean {
        return frameCount.value >= n
    }
}

export default useDefer;