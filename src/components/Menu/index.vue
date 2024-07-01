<template>
    <t-menu :expandMutex="useThemeStore.expandMutex" :expandType="useThemeStore.menuExpandType"
        :collapsed="useThemeStore.isCollapsed" v-if="useThemeStore.layout !== 'three'" :value="route.path"
        :defaultExpanded="[route.path]">
        <template v-if="useThemeStore.logo && useThemeStore.layout !== 'two'" #logo>
            <div>
                Logo
            </div>
        </template>
        <ChildrenMenu v-if="getToken()" :list="useRouterStore.getRouteList" />
    </t-menu>
    <t-head-menu v-else :value="route.path" :defaultExpanded="[route.path]" expand-type="popup">
        <template v-if="useThemeStore.logo" #logo>
            <div>
                Logo
            </div>
        </template>
        <ChildrenMenu v-if="getToken()" :list="useRouterStore.getRouteList" />
    </t-head-menu>
</template>

<script lang="ts" setup>
import ChildrenMenu from './ChildrenMenu/index.vue';
import { useRoute, useRouter } from 'vue-router';
import themeStore from '@/store/theme';
import routerStore from '@/store/router';
import { onMounted } from 'vue';
import { getToken } from '@/utils/security';

const useRouterStore = routerStore();

const route = useRoute();

const useThemeStore = themeStore();

onMounted(() => {
    useRouter()
})

</script>