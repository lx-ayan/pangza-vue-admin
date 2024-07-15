<script setup lang='ts'>
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';
import _props from './props';
import Editor from '@hufe921/canvas-editor';
import ToolBar from './components/ToolBar/index.vue';
import { ChangeData } from '@t/canvas-editor';

const props = defineProps(_props);

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:headerValue', value: string): void
    (e: 'update:footerValue', value: string): void,
}>()

const canvasRef = shallowRef();

const editorInstance = ref<Editor | null>(null);


onMounted(() => {
    init();
    initListener();
});

function init() {
    if (canvasRef.value) {
        editorInstance.value = new Editor(
            canvasRef.value!,
            {
                header: [
                    {
                        value: props.headerValue
                    }
                ],
                main: [
                    {
                        value: props.modelValue || ''
                    }
                ],
                footer: [
                    {
                        value: props.footerValue,
                    }
                ]
            },
            {

            }
        )

        editorInstance.value.command.executeRowFlex

    }
}

function initListener() {
    editorInstance.value!.listener.contentChange = () => {
        const { main, header, footer } = editorInstance.value!.command.getValue().data;
        if (main.length) {
            emits('update:modelValue', main[0].value);
        } else {
            emits('update:modelValue', '');
        }

        if (header) {
            emits('update:headerValue', header[0].value);
        } else {
            emits('update:headerValue', '');
        }

        if (footer) {
            emits('update:footerValue', footer[0].value);
        } else {
            emits('update:footerValue', '');
        }
        return null;
    }
}

function handleToolBarChange({ key, value }: ChangeData) {
    if (key == 'executeInsertTable') {
        const { row, col } = value;
        editorInstance.value!.command[key](row, col);
    } else {
        //@ts-ignore
        editorInstance.value!.command[key](value);
    }
}

onUnmounted(() => {
    editorInstance.value?.destroy();
    editorInstance.value = null;
})

</script>

<template>
    <div>
        <ToolBar :tool-bar-config="props.toolBarConfig" @change="handleToolBarChange" />
        <div ref="canvasRef"></div>
    </div>
</template>

<style lang='scss'></style>