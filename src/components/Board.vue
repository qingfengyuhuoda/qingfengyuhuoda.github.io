<script setup lang="ts">
import { computed } from 'vue';
import Tile from './Tile.vue';
import { Status } from '../utils/2048duel';

const props = defineProps<{
    board: ([number, number] | [number, number, Status] | null)[][],
    score: number,
}>()

const flatBoard = computed(() => {
    return props.board.flat()
})
</script>

<template>
    <div class="container-board">
        <div class="background">
            <div v-for="i of 16" :key="i" class="grid-cell"></div>
        </div>
        
        <div v-auto-animate="{ duration: 100 }" style="position: absolute;">
            <Tile v-for="(item, index) in flatBoard" :key="item ? item[1] : `null-${index}`"
                :value="item ? item[0] : 0"
                :status="item && item.length === 3 ? item[2] : 'normal'"
                :row="(index - index % 4) / 4"
                :col="index % 4"
            >
                {{ item ? item[0] : 0 }}
            </Tile>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background {
    width: 35rem;
    height: 35rem;
    padding: 1rem;
    background-color: #bbada0;
    border-radius: 8px;
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    grid-template-rows: repeat(4, 8rem);
    grid-template-columns: repeat(4, 8rem);
    position: absolute;

    .grid-cell {
        width: 8rem;
        height: 8rem;
        border-radius: 0.5rem;
        background-color: #ccc0b3;
    }
}

.container-board {
    width: 37rem;
    height: 37rem;
    position: absolute;
}
</style>