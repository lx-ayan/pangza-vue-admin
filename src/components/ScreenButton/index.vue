<script setup lang='ts'>
import { ref } from 'vue';


const props = defineProps({
    el: String
});

const fullScreen = ref(document.fullscreenElement !== null);

function toggleFullScreen() {
    if (props.el) {
        elementFullScreen(props.el);
    } else {
        documentFullScreen();
    }
}

function documentFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullScreen.value = true;
    } else {
        exitFullScreen();
    }
}

function elementFullScreen(el: string) {
    const element = document.getElementById(el)!;
    if (!document.fullscreenElement) {
        element.requestFullscreen();
        fullScreen.value = true;
    } else {
        exitFullScreen();
    }
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        fullScreen.value = false;
    }
}


</script>

<template>
    <t-button v-bind="$attrs"@click="toggleFullScreen" variant="text">
        <template v-if="!$slots.default">
            <t-icon :name="fullScreen? 'fullscreen-exit-1' : 'fullscreen-1'"></t-icon>
        </template>
        <slot :state="fullScreen" v-else>

        </slot>
    </t-button>
</template>

<style lang='scss'></style>