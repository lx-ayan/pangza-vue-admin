<script setup lang='ts'>
import { ref } from 'vue';

function num() {
    let num = 1;
    num ++;
    return num;
}

function getRandom() {
    console.log(2);
    return num();
}
const buttonState = ref(false);
</script>
<template>
    <div>
        <div class=" state-container" @click="buttonState = !buttonState">
            {{ buttonState ? '1' : '2' }}
        </div>

        <div class="random-container">
            {{ getRandom() }}
        </div>
    </div>
</template>

<style lang='scss'></style>