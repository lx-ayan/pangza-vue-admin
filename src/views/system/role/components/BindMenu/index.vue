<script setup lang='ts'>
import { getUserRouter } from '@/api/menu';
import type { MenuResult } from '@/types/api/menu';
import ArrayUtil from '@/utils/clz/ArrayUtil';
import { onMounted, ref } from 'vue';

const menuList = ref<LabelOptionList>([]);

const selectValues = ref<string[]>([]);

const expandAll = ref(false);

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
    });

    return result;
}

function handleCheckAll() {
    selectValues.value = selectAll(menuList.value);
}

function handleCancelCheck() {
    selectValues.value = [];
}

function selectAll(array: LabelOptionList) {
    const values: string[] = [];

    array.forEach(item => {
        values.push(item.value);
        if (ArrayUtil.isNotEmpty(item.children)) {
            values.push(...selectAll(item.children))
        }
    })

    return values.flat();
}

</script>
<template>
    <DialogLink :dialogProps="{ width: '800px' }" header="菜单权限" hover="color">
        绑定权限
        <template #content>
            <div class="flex items-center mb-6">
                <div class="flex items-center">
                    <t-input></t-input>
                    <t-button class="ml-3">
                        <MyIcon :size="16" name="search"></MyIcon>
                    </t-button>
                </div>
                <div class="flex-1 flex items-center justify-end">
                    <t-button variant="outline" class="mr-3" @click="expandAll = !expandAll">{{
                        !expandAll ? '展开' :
                            '收起' }}全部</t-button>
                    <t-button class="mr-3" @click="handleCheckAll" variant="outline">选中全部</t-button>
                    <t-button @click="handleCancelCheck" variant="outline">取消选中</t-button>
                </div>
            </div>
            <t-tree v-model="selectValues" valueMode="all" :expandAll="expandAll" :checkable="true"
                :check-strictly="false" :data="menuList">
                <template #operations>
                    <t-tag theme="primary" variant="outline">菜单</t-tag>
                </template>
            </t-tree>
        </template>
    </DialogLink>
</template>