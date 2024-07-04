<script setup lang='ts'>
import tagStore from '@/store/tag';
import themeStore from '@/store/theme';
import { DropdownOption } from 'tdesign-vue-next';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useThemeStore = themeStore();

const useTagStore = tagStore();

const router = useRouter();

const r = useRoute();

const route = ref(r);


function handleDropdownClick(data: DropdownOption) {
    if (useThemeStore.breadsTo) {
        router.push(data.value as string);
        useTagStore.addTag({
            path: data.value as string,
            title: data.content as string,
            close: true
        })
    }
}

watch(() => r.path, () => {
    route.value = r;
})

</script>

<template>
    <div v-if="useThemeStore.breads">
        <t-breadcrumb>
            <template #default>
                <t-breadcrumb-item :to="useThemeStore.breadsTo ? '/home' : ''">控制台</t-breadcrumb-item>
                <t-breadcrumb-item v-if="route.meta.parentMeta">
                    <div v-if="useThemeStore.breadsChildren">
                        <t-dropdown @click="handleDropdownClick"
                            :options="route.meta.parentMeta.children?.map(item => ({ content: (item.meta?.title || item.name), value: item.path })) as DropdownOption[] || []">
                            {{ route.meta.parentMeta.meta?.title || route.meta.parentMeta.name }}
                        </t-dropdown>
                    </div>
                    <div v-else>
                        {{ route.meta.parentMeta.meta?.title || route.meta.parentMeta.name }}
                    </div>
                </t-breadcrumb-item>
                <t-breadcrumb-item v-if="route.meta.parentMeta"> {{ route.meta.title || route.name
                    }}
                </t-breadcrumb-item>
            </template>
        </t-breadcrumb>
    </div>
</template>

<style lang='scss'></style>