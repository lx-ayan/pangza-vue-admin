<script setup lang='ts'>

</script>

<template>
    <div>
        <RowContainer imageWidth="280" imageAlign="left">
            <template #image>
                <img style="width: 280px"
                    src="https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </template>

            <template #title>
                <div>
                    <span>安高城市天地</span>
                    <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                </div>
            </template>

            <template #actions>
                <div style="text-align: right">
                    <t-button variant="text">
                        <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                    <t-button variant="text">
                        <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                    <t-button variant="text">
                        <template #icon><t-icon name="edit"></t-icon></template>
                        编辑
                    </t-button>
                    <t-button variant="text">
                        <template #icon><t-icon name="more"></t-icon></template>
                    </t-button>
                </div>
            </template>

            <template #description>
                <div>
                    <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                        <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                        高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                    </div>
                    <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                        <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                        蜀山区--南七 | 望江西路199号
                    </div>
                    <div>
                        <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                        10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                    </div>
                </div>
            </template>

            <template #footer>
                <div>
                    <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                    <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                    <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                    <t-tag size="large">满二</t-tag>
                </div>
            </template>
        </RowContainer>

        <div style="margin-top: 12px;">
            <RowContainer
                image="https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageView imageWidth="280px" imageAlign="left">

                <template #title>
                    <div>
                        <span>安高城市天地</span>
                        <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                    </div>
                </template>

                <template #actions>
                    <div style="text-align: right">
                        <t-button variant="text">
                            <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="edit"></t-icon></template>
                            编辑
                        </t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="more"></t-icon></template>
                        </t-button>
                    </div>
                </template>

                <template #description>
                    <div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                            高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                        </div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                            蜀山区--南七 | 望江西路199号
                        </div>
                        <div>
                            <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                            10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                        </div>
                    </div>
                </template>

                <template #footer>
                    <div>
                        <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                        <t-tag size="large">满二</t-tag>
                    </div>
                </template>
            </RowContainer>
        </div>

        <div style="margin-top: 12px;">
            <RowContainer
                image="https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageView imageWidth="280px" imageAlign="right">

                <template #title>
                    <div>
                        <span>安高城市天地</span>
                        <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                    </div>
                </template>

                <template #actions>
                    <div style="text-align: right">
                        <t-button variant="text">
                            <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="edit"></t-icon></template>
                            编辑
                        </t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="more"></t-icon></template>
                        </t-button>
                    </div>
                </template>

                <template #description>
                    <div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                            高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                        </div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                            蜀山区--南七 | 望江西路199号
                        </div>
                        <div>
                            <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                            10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                        </div>
                    </div>
                </template>

                <template #footer>
                    <div>
                        <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                        <t-tag size="large">满二</t-tag>
                    </div>
                </template>
            </RowContainer>
        </div>
    </div>
</template>

<style lang='scss'></style>