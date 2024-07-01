import { LoadingInstance, LoadingPlugin } from "tdesign-vue-next";

let loadingInstance: LoadingInstance | null = null;

export const showFullLoading = (text?: string) => {
    if (!loadingInstance) {
        loadingInstance = LoadingPlugin({
            loading: true,
            text
        });
    }
}

export const hideFullLoading = () => {
    if (loadingInstance) {
        loadingInstance?.hide();
        loadingInstance = null;
    }
}