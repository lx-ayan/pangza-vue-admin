<script setup lang='ts'>
import { RowContainer } from 'tdesign-pro-component';
import { DATA_ADDRESS, DATA_DESCRIPTION, DATA_EDIT, DATA_FULLTWO, DATA_LIKE, DATA_SALE, DATA_SUBWAY, DATA_TALK, DATA_TITLE, DATA_VIEWS } from '@/common/lang';
import { t } from '@/plugins';
import {computed} from 'vue';

const data = computed(() => ({
    dataTitle: t(DATA_TITLE),
    dataDescription: t(DATA_DESCRIPTION),
    dataViews: t(DATA_VIEWS),
    dataLike: t(DATA_LIKE),
    dataTalk: t(DATA_TALK),
    dataEdit: t(DATA_EDIT),
    dataSale: t(DATA_SALE),
    dataSubway: t(DATA_SUBWAY),
    dataFullTwo: t(DATA_FULLTWO),
    dataAddress: t(DATA_ADDRESS),
}))
</script>

<template>
    <div>
        <div class="mb-2">
            <RowContainer imageWidth="280" imageAlign="left">
                <template #image>
                    <img style="width: 280px"
                        src="https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </template>

                <template #title>
                    <div>
                        <t-space>{{ data.dataTitle }}</t-space>
                        <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                    </div>
                </template>

                <template #actions>
                    <div style="text-align: right">
                        <t-button variant="text">
                            <template #icon><t-icon name="heart"></t-icon></template>{{ data.dataLike }}</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="user"></t-icon></template>{{ data.dataTalk }}</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="edit"></t-icon></template>
                            {{ data.dataEdit }}
                        </t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="more"></t-icon></template>
                        </t-button>
                    </div>
                </template>

                <template #description>
                    <t-row>
                        <t-col :span="12" :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                            {{ data.dataDescription }}
                        </t-col>
                        <t-col :span="12" :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                            {{ data.dataAddress }}
                        </t-col>
                        <t-col :span="12">
                            <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                            {{ data.dataViews }}
                        </t-col>
                    </t-row>
                </template>

                <template #footer>
                    <div>
                        <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">{{ data.dataSale }}</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">{{ data.dataSubway }}</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">{{ data.dataFullTwo }}</t-tag>
                    </div>
                </template>
            </RowContainer>
        </div>


        <div>
            <RowContainer imageWidth="280" imageAlign="left">
                <template #image>
                    <img style="width: 280px"
                        src="https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </template>

                <template #title>
                    <div>
                        <t-space>{{ data.dataTitle }}</t-space>
                        <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                    </div>
                </template>

                <template #actions>
                    <div style="text-align: right">
                        <t-button variant="text">
                            <template #icon><t-icon name="heart"></t-icon></template>{{ data.dataLike }}</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="user"></t-icon></template>{{ data.dataTalk }}</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="edit"></t-icon></template>
                            {{ data.dataEdit }}
                        </t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="more"></t-icon></template>
                        </t-button>
                    </div>
                </template>

                <template #description>
                    <t-row>
                        <t-col :span="12" :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                            {{ data.dataDescription }}
                        </t-col>
                        <t-col :span="12" :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                            {{ data.dataAddress }}
                        </t-col>
                        <t-col :span="12">
                            <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                            {{ data.dataViews }}
                        </t-col>
                    </t-row>
                </template>

                <template #footer>
                    <div>
                        <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">{{ data.dataSale }}</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">{{ data.dataSubway }}</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">{{ data.dataFullTwo }}</t-tag>
                    </div>
                </template>
            </RowContainer>
        </div>

    </div>
</template>

<style lang='scss'></style>