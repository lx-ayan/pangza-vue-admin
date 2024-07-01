<script setup lang='ts'>
import { ref } from 'vue';
import Layouts from './components/Layouts/index.vue';
import Colors from './components/Colors/index.vue';
import themeStore from '@/store/theme';
import { MENU_EXPAND_TYPE_LABEL_LIST, MENU_TYPE_LABEL_LIST, ROUTER_TRANSITION_LABEL_LIST } from '@/common/const';
import SystemColor from './components/SystemColor/index.vue';
const visible = ref(false);

const useThemeStore = themeStore();

</script>

<template>
    <div>

        <t-button v-if="useThemeStore.header" @click="visible = true" variant="text">
            <template #icon>
                <t-icon name="palette"></t-icon>
            </template>
        </t-button>
        <t-button :style="{ position: 'fixed', top: '50%', right: '8px', zIndex: 3 }" v-else @click="visible = true">
            <template #icon>
                <t-icon name="setting-1"></t-icon>
            </template>
        </t-button>
        <t-drawer :closeBtn="true" :footer="false" size="22%" v-model:visible="visible" header="主题定义">
            <div v-if="visible">
                <t-divider>系统颜色</t-divider>
                <SystemColor></SystemColor> 
                <div class="mb-2">
                    <t-divider>布局设置</t-divider>
                </div>
                <div>
                    <Layouts />
                </div>
                <div class="mt-5 mb-2">
                    <t-divider>主题颜色</t-divider>
                </div>
                <div>
                    <Colors />
                </div>
                <div class="mt-5 mb-2">
                    <t-divider>界面功能</t-divider>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span>展开菜单</span>
                        <t-switch v-model="useThemeStore.collapsed" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>面包屑</span>
                        <t-switch v-model="useThemeStore.breads" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>导航栏</span>
                        <t-switch v-model="useThemeStore.tagView" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>菜单搜索</span>
                        <t-switch v-model="useThemeStore.menu" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>全屏</span>
                        <t-switch v-model="useThemeStore.screen" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>灰色模式</span>
                        <t-switch v-model="useThemeStore.gray" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>顶栏</span>
                        <t-switch v-model="useThemeStore.header" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>Logo</span>
                        <t-switch v-model="useThemeStore.logo" />
                    </div>
                </div>

                <div class="mt-5 mb-2">
                    <t-divider>菜单设置</t-divider>
                </div>

                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span>手风琴效果</span>
                        <t-switch v-model="useThemeStore.expandMutex" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>弹出样式</span>
                        <t-select :disabled="useThemeStore.menuType == 'group'" v-model="useThemeStore.menuExpandType"
                            style="width: 30%;" size="small" :options="MENU_EXPAND_TYPE_LABEL_LIST" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>菜单样式</span>
                        <t-select :disabled="useThemeStore.layout === 'three'" v-model="useThemeStore.menuType"
                            style="width: 30%;" size="small" :options="MENU_TYPE_LABEL_LIST" />
                    </div>
                </div>

                <div class="mt-5 mb-2">
                    <t-divider>面包屑设置</t-divider>
                </div>

                <div>

                    <div class="flex justify-between items-center mb-3">
                        <span>跳转</span>
                        <t-switch v-model="useThemeStore.breadsTo" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>展示下级</span>
                        <t-switch v-model="useThemeStore.breadsChildren" />
                    </div>
                </div>

                <div class="mt-5 mb-2">
                    <t-divider>动画设置</t-divider>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <span>切换 loading</span>
                        <t-switch v-model="useThemeStore.loading" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>顶部进度条</span>
                        <t-switch v-model="useThemeStore.nprogress" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>切换动画</span>
                        <t-switch v-model="useThemeStore.animate" />
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <span>动画样式</span>
                        <t-select v-model="useThemeStore.animateName" :disabled="useThemeStore.animate === false"
                            :options="ROUTER_TRANSITION_LABEL_LIST" style="width: 30%;" size="small" />
                    </div>
                </div>
            </div>
        </t-drawer>
    </div>
</template>

<style lang='scss'></style>