<script setup lang="ts">
import { useGameStore } from '../stores/game'
// import { useTransition } from '@vueuse/core';
import prop from './prop.vue'
// import clipboard from "clipboard";
const game = useGameStore()
const props = {
        0:'row',
        1:'column',
        2:'bomb',
        3:'heal',
        4:'frozen'
    }
</script>

<template >
    <div class="container-col"  style="position: absolute; left: 0; top:100px">
        <prop v-for="(num,index) in game.localGame.prop_num" :num="num" :status="props[index]" :index="index">{{ num }}</prop>
    </div>
</template>


<style lang="scss" scoped>

.container-col {
    width: 128px;
    height: 700px;
    z-index: 100;
    border-radius: 8px;
    background-color:rgb(58, 55, 50) ;
}
</style>