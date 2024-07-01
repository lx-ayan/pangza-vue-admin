<script setup lang='ts'>
import { DATE_FORMAT_STR } from '@/config/date';
import userStore from '@/store/user';
import moment from 'moment';
import { onUnmounted, ref } from 'vue';

const useUserStore = userStore();

const dateStr = ref('');

function setDateStr() {
    dateStr.value = moment().format(DATE_FORMAT_STR);
}

let timer = setInterval(setDateStr, 1000);

onUnmounted(() => {
    clearInterval(timer);
})

</script>

<template>
    <t-card :bordered="false" class="mb-4">
        <div class="flex items-center ">
            <div>
                <t-avatar :image="useUserStore.getUser?.header" size="80px"> W </t-avatar>
            </div>
            <div class="ml-4 flex-1">
                <div class="mb-2 text-lg font-bold">
                    {{ useUserStore.getUser?.name }}
                </div>
                <div class="text-gray-400">
                    宝剑锋从磨砺出，梅花香自苦寒来。祝在座各位早日上岸。
                </div>
            </div>

            <div>
                {{ dateStr }}
            </div>
        </div>
    </t-card>
</template>

<style lang='scss'></style>