<script setup lang="ts">
import { computed } from 'vue';
import { Status } from '../utils/2048duel';
import PropOnTile from './PropOnTile.vue';

const props = defineProps<{
    status: Status,
    num:number,
    index:number
}>()
const top = computed(() => {
    return `${15+144 * props.index}px`
})
const prop_colors = {
        0:'#ff3584',
        1:'#b035ff',
        2:'#ff0210',
        3:'#128200',
        4:'#35e9ff',
    }


</script>

<template>
    <div class="tile" :style="{'background-color':prop_colors[index], 'color':'black', 'z-index': 100, 'top':top}">
        <PropOnTile :status="props.status"></PropOnTile>
        <p class="tile-number"
            :style="{
                'text-shadow': `
                    1px 1px 4px 'black',
                    -1px 1px 4px 'black',
                    -1px -1px 4px 'black',
                    1px -1px 4px 'black'
                `
            }">
            <slot></slot>
        </p>
    </div>
</template>


<style lang="scss" scoped>
.tile {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    position: absolute;
    left:8px;
    display: flex;
    align-items: center;
    justify-content: center;

    .tile-number {
        font-family: consolas;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        z-index: 100;
        user-select: none;
    }
}
</style>