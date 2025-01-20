<script setup lang='tsx'>
import { tagStore, themeStore, userStore } from '@/store';
import { ProLayout } from 'tdesign-pro-component';
import { useRoute, useRouter } from 'vue-router';
import TagView from '@/components/TagView/index.vue';
import Actions from '@/components/Actions/index.vue';
import { IProLayoutRoute } from '@t/common/procomponent';
import { computed } from 'vue';
import CollapsedButton from '@/components/CollapsedButton/index.vue';

const useTagStore = tagStore();

defineOptions({
    route: {
        meta: {
            auth: true,
            perimission: ['role_ADMIN']
        }
    }
});

const useThemeStore = themeStore();

const HeaderRender = () => <div class="px-6 flex items-center">
    {
        useThemeStore.logo && <div class="mr-4">
            <span class="font-bold mr-3 text-2xl text-[--td-brand-color]">P</span>Pangza Vue Admin
        </div>
    }
    {
        useThemeStore.collapsedBtn && <CollapsedButton />
    }
</div>;

const route = useRoute();

const router = useRouter();



const useUserSotre = userStore();

const routes = computed<IProLayoutRoute[]>(() => [
    {
        path: '/home',
        title: '首页',
        icon: 'home',
    },
    {
        path: '/components',
        title: '组件预览',
        icon: 'logo-windows',
        children: [
            {
                path: '/components/docs',
                title: '组件文档',
            },
            {
                path: '/components/proform',
                title: '高级表单',
            },
            {
                path: '/components/protable',
                title: '高级表格',
            },
            {
                path: '/components/probutton',
                title: '操作按钮',
            },
            {
                path: '/components/rowcontainer',
                title: '行容器',
            },
            {
                path: '/components/pagecontainer',
                title: '页容器',
            }
        ]
    },
    {
        path: '/result',
        title: '响应结果',
        icon: 'system-interface',
        children: [
            {
                path: '/result/success',
                title: '成功结果',
            },
            {
                path: '/result/error',
                title: '错误结果',
            },
            {
                path: '/result/notfound',
                title: '404 结果',
            },
            {
                path: '/result/nopermission',
                title: '无权限结果',
            }
        ]
    },
    {
        path: '/role',
        title: '权限预览',
        icon: 'assignment-checked',
        children: [
            {
                path: '/role/page',
                title: '页面权限',
            },
            {
                path: '/role/button',
                title: '组件权限',
            }
        ]
    },
    {
        path: '/system',
        title: '系统管理',
        icon: 'setting-1',
        children: [
            {
                path: '/system/log',
                title: '日志管理',
            }
        ]
    }
]);

const asideRender = () => <div></div>
function handleMenuClick(path: string, route: any) {
    useTagStore.addTag({
        close: true,
        path,
        title: route.title as any,
        icon: route.icon as string,
    });
    router.push(path);
}
</script>

<template>
    <ProLayout @menuClick="handleMenuClick" :collapsed="useThemeStore.collapsed"
        :menuProps="{ value: route.path, expandType: useThemeStore.menuExpandType, expandMutex: useThemeStore.expandMutex }"
        :routes :asideRender :headerRender="HeaderRender">
        <TagView></TagView>
        <t-watermark :watermark-content="{ text: useUserSotre.user.username }" :y="80" :x="80" :width="120" :height="0">
            <div class="pangza-vue-admin-body px-3 pt-3">
                <router-view class="h-full" #default="{ Component }">
                    <Transition v-if="useThemeStore.animate" :name="useThemeStore.animateName" mode="out-in">
                        <component :is="Component"></component>
                    </Transition>
                    <component v-else :is="Component"></component>
                </router-view>
            </div>
        </t-watermark>


        <template #actions>
            <Actions />
        </template>
    </ProLayout>
</template>

<style lang='scss'>
.pangza-vue-admin-body {
    overflow-y: auto;
    overflow-x: hidden;
    flex: auto;
    height: calc(100vh - var(--td-comp-size-xxxl) - 40px);
}
</style>