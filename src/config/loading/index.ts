import { LoadingInstance, LoadingPlugin } from "tdesign-vue-next";

let loadingInstance: NullAble<LoadingInstance> = null;

export function showFullScreenLoading(loadingText?: string) {
    if (loadingInstance) return;
    loadingInstance = LoadingPlugin({
        text: loadingText,
        fullscreen: true
    });
}

export function hideFullScreenLoading() {
    if (loadingInstance) {
        loadingInstance?.hide();
        loadingInstance = null;
    }
}