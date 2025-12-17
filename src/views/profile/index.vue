<script setup lang='tsx'>
import { computed, ref } from 'vue';
import Actions from './components/Actions/index.vue';
import UserInfo from './components/UserInfo/index.vue';
import Notification from './components/Notification/index.vue';
import Security from './components/Security/index.vue';
import System from './components/System/index.vue';

const componentsHandler = {
    personal: UserInfo,
    notification: Notification,
    security: Security,
    system: System
}

const actions = ref('personal');

const component = computed(() => componentsHandler[actions.value]);

</script>
<template>
    <div>
        <Actions v-model="actions" />

        <div class="mt-4">
            <component :is="component" />
        </div>
    </div>
</template>
