<script setup lang='tsx'>
import type { MenuResult } from '@/types/api/menu';
import MenuList from './components/MenuList/index.vue';
import { ref } from 'vue';
import MenuInfo from './components/MenuInfo/index.vue';

const currentMenu = ref<Nullable<MenuResult>>(null);

function handleMenuClick(data: MenuResult) {
    if (data.path != currentMenu.value?.path) {
        currentMenu.value = data;
    }
}

</script>
<template>
    <div class="h-full">
        <Grid class="h-full" :gap="6">

            <GridItem :colSpan="7">
                <t-card :bordered="false" class="h-full">
                    <MenuList @click="handleMenuClick" />
                </t-card>
            </GridItem>

            <GridItem class="h-full " :colSpan="17">
                <div class="h-full py-4 px-8 bg-white rounded-lg dark:bg-[#242424]">
                    <EmptyData v-if="!currentMenu">
                    </EmptyData>
                    <MenuInfo v-else :data="currentMenu" />
                </div>
            </GridItem>

        </Grid>
    </div>
</template>