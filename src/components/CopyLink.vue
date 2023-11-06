<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { useGameStore } from '../stores/game'
import { ref } from 'vue';

const { copy } = useClipboard()

const didCopy = ref(false)

const game = useGameStore()
const copyLink = () => {
    copy(game.link)
        .then(() => {
            didCopy.value = true
            setTimeout(() => {
                didCopy.value = false
            }, 1500)
        })
}
</script>

<template>
    <div>
        <button @click="copyLink" class="custom-button">
            {{ didCopy ? '复制成功' : '复制' }}
        </button>
    </div>
</template>
<style>
.custom-button {
    background-color: #4CAF50; /* 设置背景颜色 */
    color: white; /* 设置文本颜色 */
    border: none; /* 移除边框 */
    padding: 10px 20px; /* 设置内边距 */
    text-align: center; /* 文本居中 */
    text-decoration: none; /* 移除下划线 */
    display: inline-block; /* 设置为行内块元素 */
    font-size: 16px; /* 设置字体大小 */
    cursor: pointer; /* 鼠标悬停时显示手型 */
    border-radius: 5px; /* 设置边框圆角 */
}
</style>