<script setup lang='tsx'>
import { getUserRouter } from '@/api/menu';
import type { MenuResult } from '@/types/api/menu';
import ArrayUtil from '@/utils/clz/ArrayUtil';
import { onMounted, ref } from 'vue';
import { MessagePlugin, type DialogInstance, type TreeNodeModel } from 'tdesign-vue-next';
import MyIcon from '@/components/public/MyIcon/index.vue';
import { YES_OR_NO_BOOL } from '@/utils/data/constant';
import type { ProFormOption } from '@/components/ProComponents/ProForm/types';


const emits = defineEmits<{
    (e: 'click', data: MenuResult)
}>();

const menuList = ref<LabelOptionList>([]);

const visible = ref(false);

const options = ref<ProFormOption[]>([
    {
        name: 'title',
        label: '菜单名称',
        type: 'input',
        rules: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
        ],
        props: {
            formProps: {

            },
            disabled: true,
            readonly: true
        },
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'type',
        label: '类型',
        defaultValue: 'menu',
        type: 'select',
        data: [
            { label: '菜单', value: 'menu' },
            { label: '按钮', value: 'button' }
        ],
        props: {

        },
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'name',
        label: '路由名称',
        rules: [
            { required: true, message: '请输入路由名称' }
        ],
        props: {
            formProps: {
                tips: '前端路由名称，可让前端跳转'
            }
        },
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'path',
        label: '路由路径',
        rules: [
            { required: true, message: '请输入路由名称' }
        ],
        props: {
            formProps: {
                tips: '匹配前端的路由地址，保持自动映射'
            },
        },
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'permission',
        label: '权限标识'
    },
    {
        name: 'auth',
        label: '是否认证',
        type: 'radio',
        defaultValue: true,
        data: YES_OR_NO_BOOL,
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'hidden',
        label: '是否隐藏',
        type: 'radio',
        defaultValue: false,
        data: YES_OR_NO_BOOL,
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'link',
        label: '是否外联',
        type: 'radio',
        defaultValue: false,
        data: YES_OR_NO_BOOL,
        gridProps: {
            colSpan: 12
        }
    },
    {
        name: 'frame',
        label: '是否内嵌',
        type: 'radio',
        defaultValue: false,
        data: YES_OR_NO_BOOL,
        gridProps: {
            colSpan: 12
        }
    },

    {
        name: 'href',
        label: '地址',
        hidden: (formModel) => {
            return (formModel['frame'] === false && formModel['link'] === false)
        }
    },

]);

onMounted(() => {
    init();
});

function init() {
    getUserRouter().then(res => {
        menuList.value = buildTreeData(res);
    });
}

function buildTreeData(list: MenuResult[]) {

    const result: LabelOptionList = [];

    list.forEach(item => {
        const current: LabelOption = {
            ...item,
            children: [],
            label: item.meta.title,
            value: item.path
        }

        if (!ArrayUtil.isEmpty(item.children)) {
            current.children = buildTreeData(item.children);
        }

        result.push(current);
    })

    return result;
}

function handleClick({ node }: { node: TreeNodeModel<MenuResult> }) {
    emits('click', node.data);
}

function handleDelete(instance: DialogInstance, node: TreeNodeModel<MenuResult>) {
    MessagePlugin.success('删除成功' + JSON.stringify(node.data)).finally(() => {
        instance.destroy();
    })
}

defineOptions({
    inheritAttrs: false
})

</script>
<template>
    <div>
        <ModalForm :formProps="{ formProps: { gap: { x: 4 }, labelAlign: 'top' } }" width="600" header="创建菜单" :options
            v-model:visible="visible" />
        <div>

            <div class="flex items-center mb-5">
                <t-input placeholder="输入关键词搜索"></t-input>
                <t-button class="ml-5 mr-3" variant="base">
                    <MyIcon :size="16" name="search"></MyIcon>
                </t-button>
                <t-tooltip content="新增">
                    <t-button variant="base" theme="base">
                        <MyIcon :size="16" name="plus"></MyIcon>
                    </t-button>
                </t-tooltip>
            </div>
        </div>

        <div class="h-[720px] overflow-y-auto">
            <t-tree @click="handleClick" :data="menuList">
                <template #operations="{ node }">
                    <Grid :cols="3" :gap="2">
                        <t-tooltip content="新增">
                            <t-button @click.stop="visible = true" size="small" variant="base" theme="base">
                                <MyIcon :size="12" name="plus"></MyIcon>
                            </t-button>
                        </t-tooltip>

                        <t-tooltip content="编辑">
                            <t-button @click.stop="visible = true" size="small" variant="base" theme="base">
                                <MyIcon :size="12" name="edit"></MyIcon>
                            </t-button>
                        </t-tooltip>
                        <t-tooltip content="删除">
                            <DialogButton @confirm="(instance) => handleDelete(instance, node)" content="是否删除当前数据"
                                header="系统提示" size="small" :buttonProps="{ variant: 'base', theme: 'base' }">
                                <MyIcon :size="12" name="trash"></MyIcon>
                            </DialogButton>
                        </t-tooltip>
                    </Grid>
                </template>
            </t-tree>
        </div>

    </div>
</template>