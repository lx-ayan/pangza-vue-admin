<script setup lang='tsx'>
import { ROUTER_COMPONENTDOCS, ROUTER_COMPONENTPERMISSIONS, ROUTER_COMPONENTS, ROUTER_COMPONENTS_PAGECONTAINER, ROUTER_COMPONENTS_PROBUTTON, ROUTER_COMPONENTS_PROFORM, ROUTER_COMPONENTS_PROTABLE, ROUTER_COMPONENTS_ROWCONTAINER, ROUTER_HOME, ROUTER_PAGEPERMISSIONS, ROUTER_PERMISSIONPREVIEW, ROUTER_RESULTERROR, ROUTER_RESULTNOPERMISSION, ROUTER_RESULTNOTFOUND, ROUTER_RESULTPAGE, ROUTER_RESULTSUCCESS, ROUTER_SYSTEM, ROUTER_SYSTEM_LOG } from '@/common/lang';
import { t } from '@/plugins';
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
        title: t(ROUTER_HOME),
        icon: 'home',
        tagTitle: ROUTER_HOME,
    },
    {
        path: '/components',
        title: t(ROUTER_COMPONENTS),
        tagTitle: ROUTER_COMPONENTS,
        icon: 'logo-windows',
        children: [
            {
                path: '/components/docs',
                title: t(ROUTER_COMPONENTDOCS),
                tagTitle: ROUTER_COMPONENTDOCS
            },
            {
                path: '/components/proform',
                title: t(ROUTER_COMPONENTS_PROFORM),
                tagTitle: ROUTER_COMPONENTS_PROFORM,
            },
            {
                path: '/components/protable',
                title: t(ROUTER_COMPONENTS_PROTABLE),
                tagTitle: ROUTER_COMPONENTS_PROTABLE,
            },
            {
                path: '/components/probutton',
                title: t(ROUTER_COMPONENTS_PROBUTTON),
                tagTitle: ROUTER_COMPONENTS_PROBUTTON,
            },
            {
                path: '/components/rowcontainer',
                title: t(ROUTER_COMPONENTS_ROWCONTAINER),
                tagTitle: ROUTER_COMPONENTS_ROWCONTAINER,
            },
            {
                path: '/components/pagecontainer',
                title: t(ROUTER_COMPONENTS_PAGECONTAINER),
                tagTitle: ROUTER_COMPONENTS_PAGECONTAINER,
            }
        ]
    },
    {
        path: '/result',
        title: t(ROUTER_RESULTPAGE),
        icon: 'system-interface',
        children: [
            {
                path: '/result/success',
                title: t(ROUTER_RESULTSUCCESS),
                tagTitle: ROUTER_RESULTSUCCESS
            },
            {
                path: '/result/error',
                title: t(ROUTER_RESULTERROR),
                tagTitle: ROUTER_RESULTERROR
            },
            {
                path: '/result/notfound',
                title: t(ROUTER_RESULTNOTFOUND),
                tagTitle: ROUTER_RESULTNOTFOUND
            },
            {
                path: '/result/nopermission',
                title: t(ROUTER_RESULTNOPERMISSION),
                tagTitle: ROUTER_RESULTNOPERMISSION
            }
        ]
    },
    {
        path: '/role',
        title: t(ROUTER_PERMISSIONPREVIEW),
        tagTitle: ROUTER_PERMISSIONPREVIEW,
        icon: 'assignment-checked',
        children: [
            {
                path: '/role/page',
                title: t(ROUTER_PAGEPERMISSIONS),
                tagTitle: ROUTER_PAGEPERMISSIONS,
            },
            {
                path: '/role/button',
                title: t(ROUTER_COMPONENTPERMISSIONS),
                tagTitle: ROUTER_COMPONENTPERMISSIONS,
            }
        ]
    },
    {
        path: '/system',
        title: t(ROUTER_SYSTEM),
        tagTitle: ROUTER_SYSTEM,
        icon: 'setting-1',
        children: [
            {
                path: '/system/log',
                title: t(ROUTER_SYSTEM_LOG),
                tagTitle: ROUTER_SYSTEM_LOG,
            }
        ]
    }
]);

const asideRender = () => <div></div>
function handleMenuClick(path: string, route: any) {
    useTagStore.addTag({
        close: true,
        path,
        title: route.tagTitle as any,
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