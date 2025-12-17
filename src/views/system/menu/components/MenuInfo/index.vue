<script setup lang='ts'>
import type { MenuResult } from '@/types/api/menu';
import ArrayUtil from '@/utils/clz/ArrayUtil';
import { computed, onMounted, ref } from 'vue';
import RoleData from './components/RoleData/index.vue';
import { getRoleList } from '@/api/user';
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';

const props = withDefaults(defineProps<{
    data: MenuResult;
    showChild?: boolean;
}>(), {
    showChild: true
});

const roleList = ref([]);

onMounted(() => {
    getRoleList({ pageNum: 1, pageSize: 10, form: {} }).then(res => {
        roleList.value = res.list;
    })
})

function handleClick() {
    const instance = DialogPlugin.confirm({
        header: '系统提示',
        body: '是否解除所有角色绑定？',
        onConfirm: () => {
            MessagePlugin.success('解绑成功');
            instance.destroy();
        }
    })
}

const permissionStr = computed(() => {
    //@ts-ignore
    return props.data.path.substring(props.data.path.length, 1).replaceAll('/', ':');
});

const showRoles = computed(() => (props.showChild && !ArrayUtil.isEmpty(roleList.value)));

defineOptions({
    name: 'MenuInfo'
});
</script>
<template>
    <div>
        <div class="mb-2 text-base">
            菜单详情
        </div>
        <GrayCard>
            <div>
                <t-descriptions :column="4">
                    <template #title>
                        <div class="flex items-center justify-between">
                            <span>
                                {{ props.data.meta.title }}
                            </span>

                            <t-tag theme="primary ml-6" variant="outline">菜单</t-tag>
                        </div>
                    </template>
                    <t-descriptions-item :span="2" label="路径">{{ props.data.path }}</t-descriptions-item>
                    <t-descriptions-item :span="2" label="权限标识">{{ permissionStr }}</t-descriptions-item>
                    <t-descriptions-item label="外部链接">{{ props.data.meta.link ? '是' : '否'
                    }}</t-descriptions-item>
                    <t-descriptions-item label="按钮">{{ props.data.meta.button ? '是' : '否'
                    }}</t-descriptions-item>
                    <t-descriptions-item label="展示">{{ props.data.meta.hidden ? '隐藏' : '展示'
                    }}</t-descriptions-item>
                </t-descriptions>
            </div>
        </GrayCard>

        <div v-if="showRoles" class="mt-6">
            <div class="mb-2 text-base flex items-center justify-between">
                <span>绑定角色</span>

                <t-link @click="handleClick" theme="danger" hover="color">一键解绑</t-link>
            </div>

            <Grid :gap="4" :cols="2">
                <GridItem v-for="data in roleList">
                    <RoleData :data="data" />
                </GridItem>
            </Grid>
        </div>
    </div>
</template>