<script setup lang="ts">
import { CSSProperties, computed } from 'vue';
import useTheme from './hooks/useTheme';
import useColor from './hooks/useColor';
import { testDemo } from './api/user';
// import monitor from '@/utils/monitor';

const [initTheme] = useTheme();
const { useThemeStore, PRO_TABLE_HEADER_COLOR, TEXT_COLOR } = useColor();

const style = computed<CSSProperties>(() => {
  return useThemeStore.gray ? {
    filter: 'grayscale(100%)'
  } : {}
});

initTheme();

testDemo().then(res => {
  console.log(res);
})

// monitor.onPaint(data => {
//   console.log('paint', data)
// })

// monitor.onLCP(data => {
//   console.log('LCP', data);
// })

// monitor.onFCP(data => {
//   console.log('FCP', data);
// })

// monitor.onResources(data => {
//   console.log('Resources', data);
// })

// monitor.onError(data => {
//   console.log('error', data);
// });




</script>

<template>
  <router-view :style class=" min-w-[1040px]"></router-view>
</template>

<style lang="scss">
.v-contextmenu-inner .v-contextmenu-item {
  color: var(--td-text-color-primary);
  text-align: left;
  padding: 0;
  border-radius: 2px;
  transition: all .3s;
}

.v-contextmenu-item--hover {
  color: #fff !important;
  background-color: var(--td-brand-color) !important;
}

.v-contextmenu {
  background-color: var(--td-bg-color-container) !important;
  border: none !important;
  box-shadow: none !important;
}

.t-menu__item.t-is-active {
  background-color: v-bind('PRO_TABLE_HEADER_COLOR') !important;
}

::v-deep .t-table__header {
  th {
    background-color: v-bind('PRO_TABLE_HEADER_COLOR') !important;
    color: v-bind('TEXT_COLOR');
    padding: 10px 8px !important;
    box-sizing: border-box;
  }
}

.t-table thead tr {
  background-color: v-bind('PRO_TABLE_HEADER_COLOR') !important;
  padding: 10px 8px !important;
  box-sizing: border-box;
}

.t-table thead tr div {
  color: v-bind('TEXT_COLOR') !important;
}

.t-dialog--default {
  padding: 15px 25px !important;
  border-radius: 2px !important;
}

.t-button {
  border-radius: 1px !important;
}
</style>
