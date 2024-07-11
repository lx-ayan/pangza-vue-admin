<script setup lang='ts'>
import { PropType, nextTick, onMounted, onUnmounted, ref, shallowRef } from 'vue';
import Editor, { RowFlex } from '@hufe921/canvas-editor';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    headerValue: {
        type: String,
        default: ''
    },
    footerValue: {
        type: String,
        default: ''
    },
    showTar: {
        type: Boolean,
        default: true
    },
    align: {
        type: String as PropType<RowFlex>,
        default: 'left'
    }
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:headerValue', value: string): void
    (e: 'update:footerValue', value: string): void,
}>()

const canvasRef = shallowRef();

const editorInstance = ref<Editor | null>(null);

const contentsList = [{ content: '楷体', value: '楷体' }, { content: '宋体', value: '宋体' }]

onMounted(() => {
    if (canvasRef.value) {
      console.log('123 ', 123)
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
                        size: 12
                    }
                ]
            },
            {

            }
        )
        editorInstance.value.command.executeRowFlex(RowFlex.CENTER);
        editorInstance.value.listener.contentChange = () => {
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


});

onUnmounted(() => {
    editorInstance.value?.destroy();
    editorInstance.value = null;
})

function handleClick(data: { value: string }) {
    editorInstance.value!.command.executeFont(data.value);
}

</script>

<template>
    <div>
        <t-card size="small" class="mb-5" :bordered="false">
            <t-dropdown @click="handleClick" :options="contentsList">
                <t-icon size="21" name="letters-a"></t-icon>
            </t-dropdown>
        </t-card>
        <div ref="canvasRef"></div>
    </div>
</template>

<style lang='scss'></style>