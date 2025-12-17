<script setup lang='ts'>
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';

const props = defineProps<{
    data: any;
}>();

function handleClick() {
    const instance = DialogPlugin.confirm({
        header: '系统提示',
        body: '是否解除当前角色绑定',
        onConfirm: () => {
            MessagePlugin.success('解绑成功',);
            instance.destroy();
        }
    })
}

</script>
<template>
    <GrayCard>
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <MyIcon color="var(--td-brand-color)" :size="16" name="user" />
                <span class="ml-2">{{ props.data.nameZh }}</span>
                <span>（{{ props.data.name }}）</span>
            </div>

            <div>
                <t-link @click="handleClick" hover="color" theme="danger">解绑</t-link>
            </div>
        </div>
    </GrayCard>
</template>