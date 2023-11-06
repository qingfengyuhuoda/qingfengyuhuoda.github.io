<script setup lang="ts">
const props = defineProps<{
    hp: number,
    max: number,
    side: 'left' | 'right',
    enemy: boolean,
}>()
</script>

<template>
    <div class="container-hp">
        <div :style="{
            'background-color': `${(hp / max) > 0.2 ? (enemy?'#2690c5':'#1aa170') : '#dc3023'}`,
            'width': `${(hp < max ? (hp / max) : 1) * 560}px`,
            'height': '32px',
            'float': `${props.side}`,
        }"></div>
        <div class="hp-text">{{ hp.toFixed(0) }} / {{ max }}</div>

        <div class="border"></div>
    </div>
</template>

<style lang="scss" scoped>
.container-hp {
    width: 560px;
    height: 32px;
    position: relative;
    margin: 16px;
    display: flex;
    border-radius: 8px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.border {
    width: 560px;
    height: 32px;
    border-radius: 8px;
    border-radius: 8px;
    border: 6px solid rgb(189, 165, 187);
    position: absolute;
    top: -6px;
    left: -6px;
}
.hp-text {
    text-align: center; /* 文字居中显示 */ 
    top:1px;
    position: absolute;
    font-weight: bold;
    font-family: consolas;
    font-size:x-large;
}

</style>