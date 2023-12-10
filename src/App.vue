<script setup lang="ts">
// import Timer from './components/Timer.vue';
// import { ref } from 'vue';

// const stop = ref(true)
// const timeIsUp = ref(false)

// function timeUp(childrenMessage: boolean) {
//     timeIsUp.value = childrenMessage
// }import Timer from './components/Timer.vue';
// import { ref } from 'vue';

// const stop = ref(true)
// const timeIsUp = ref(false)

// function timeUp(childrenMessage: boolean) {
//     timeIsUp.value = childrenMessage
// }
// import wcregister from './components-view/wcregister.vue';
// import index from './components-view/index.vue';
</script>

<template>
    <!-- <Timer :seconds="5" :stop="stop" @time-up="timeUp"></Timer>
    <button @click="stop = !stop" style="margin: 16px;">
        {{ stop ? 'start' : 'stop' }}
    </button>
    <div v-if="timeIsUp">Time is up!</div> -->
    <RouterView></RouterView>
    <!-- <wcregister></wcregister> -->
    <!-- <DuelGame></DuelGame> -->
    <!-- <index></index> -->
    <!-- <ClassicGame></ClassicGame> -->
    <!-- <PlayerChart></PlayerChart> -->
</template>


<style lang="scss" scoped>

</style>