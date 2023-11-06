<script setup lang="ts">
import Board from './Board.vue';
import Mask from './Mask.vue';
import { blur } from '../utils/button';
import { ElMessage } from 'element-plus'
import axios from 'axios';
import { useuserStore } from '../stores/userstore'
import { useClassicalGameStore } from '../stores/classicGame';
import { computed } from 'vue';
import { onKeyStroke, useTransition } from '@vueuse/core';
import navigation from '../components-view/Navigation.vue';
import end from '../components-view/end.vue'
const emit = defineEmits<{
    (e: 'up'): void
    (e: 'down'): void
    (e: 'left'): void
    (e: 'right'): void
    // (e: 'update:seed'): string
}>()

const game=useClassicalGameStore()
game.local.initialize()
// game.test()
const authStore = useuserStore()
const submit = () => {
    const userData = {
        username: authStore.info.username,
        password: authStore.info.password,
        achieve1:authStore.info.achieve1,
        achieve2:authStore.info.achieve2,
        achieve3:authStore.info.achieve3,
        achieve4:authStore.info.achieve4,
        score:game.highScore
    };
    // $refs.registerRef.value.validate(valid) => {
    //     if (valid) {
    // 验证通过
    axios.put('http://localhost:9090/user/update', userData)
        .then(res => {          
            console.log(userData.score)
            if (res.data.code === '200') {
                // authStore.setInfo(res.data.data)
                // authStore.setIsAuthenticated(true)
                ElMessage({ dangerouslyUseHTMLString: true, message: '<strong style="color: green; font-size: 18px;">成绩上传成功</strong>', type: 'success' })
            } else {
                ElMessage.error({ dangerouslyUseHTMLString: true, message: res.data.msg, type: 'error' })
            }
        })
    //   }
};
const score = useTransition(computed(() => game.local.score), { duration: 100 })
const highScore = useTransition(computed(() => game.highScore), { duration: 100 })

const canMove = computed(() => {
    if (game.local.hasWon && game.local.firstWon) {
        return false
    }

    if (game.local.isGameOver) {
        return false
    }

    if (game.local.reachedLimit) {
        return false
    }

    return true
})

onKeyStroke(['ArrowUp', 'w'], () => {
    if (!canMove.value) {
        return
    }

    game.local.up()
    emit('up')
})

onKeyStroke(['ArrowDown', 's'], () => {
    if (!canMove.value) {
        return
    }

    game.local.down()
    emit('down')
})

onKeyStroke(['ArrowLeft', 'a'], () => {
    if (!canMove.value) {
        return
    }

    game.local.left()
    emit('left')
})

onKeyStroke(['ArrowRight', 'd'], () => {
    if (!canMove.value) {
        return
    }

    game.local.right()
    emit('right')
})
</script>

<template>
    <navigation></navigation>
    <div class="container-game">
        <div class="container-header">
            <div class="text1">成绩</div>
            <div class="text2">最高成绩</div>
            <div class="score1">{{ score.toFixed(0) }}</div>
            <div class="score2">{{ highScore.toFixed(0) }}</div>
            <button primary @click="game.local.initialize(),submit(); blur(`new_game`);" class="new-game" id="new_game">重玩一局</button>
        </div>

        <transition>
            <Mask v-if="game.local.isGameOver" :color="'white'" style="position: absolute; bottom: 0px;">
                <p v-if="game.local.firstWon" class="mask-text" style="position: relative; top: 180px;">你输了</p>
                <p v-else class="mask-text" style="position: relative; top: 180px;">你输了，但你曾经赢过</p>
            </Mask>
        </transition>

        <transition>
            <Mask v-if="game.local.hasWon && game.local.firstWon" :color="'gold'" style="position: absolute; bottom: 0px;">
                <p class="mask-text" style="position: relative; top: 140px;">你赢了</p>
                <button primary @click="game.local.hasWon=false; game.local.firstWon=false" class="continue">继续</button>
            </Mask>
        </transition>

        <transition>
            <Mask v-if="game.local.reachedLimit" :color="'white'" style="position: absolute; bottom: 0px;">
                <p class="mask-text" style="position: relative; top: 180px;">你来到了游戏的尽头</p>
            </Mask>
        </transition>

        <Board :board="game.local.board" :score="game.local.score" style="bottom: 0px;"></Board>
    </div>
    <end></end>
</template>

<style lang="scss" scoped>
.container-game {
    width: 592px;
    height: 708px;
    margin: 140px auto;
    position: relative;
}

.container-header {
    width: 592px;
    height: 100px;
    margin-bottom: 16px;
    position: relative;
}

.score1 {
    font-family: 'consolas';
    font-size: 80px;
    font-weight: bold;
    text-align: left;
    position: absolute;
    bottom: -32px;
    left: 0px;
    user-select: none;
    color: rgba(255, 255, 255, 0.671);
}

.score2 {
    font-family: 'consolas';
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    position: absolute;
    bottom: 50px;
    right: 0px;
    user-select: none;
    color: rgba(255, 255, 255, 0.671);
}

.text1 {
    font-family: 'Microsoft YaHei';
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    position: absolute;
    top: -8px;
    left: 0px;
    user-select: none;
    color: rgba(255, 255, 255, 0.671);
}

.text2 {
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    position: absolute;
    top: -2px;
    right: 0px;
    user-select: none;
    color: rgba(255, 255, 255, 0.671);
}

.new-game {
    width: 144px;
    height: 50px;
    border-radius: 25px;
    font-family: 'Microsoft Yahei';
    font-size: 20px;
    font-weight: bold;
    padding: 4px;
    background-color: white;
    color: black;
    border-color: black;
    position: absolute;
    bottom: 0px;
    right: 0px;
}

.continue {
    width: 144px;
    height: 50px;
    border-radius: 25px;
    font-family: 'Microsoft Yahei';
    font-size: 20px;
    font-weight: bold;
    padding: 4px;
    background-color: white;
    color: black;
    border-color: black;
    position: relative;
    top: 106px;
}

.mask-text {
    font-family: 'Microsoft Yahei';
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    user-select: none;
}

.v-enter-from {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 1s ease-out;
}

.v-enter-to {
    opacity: 1;
}

.v-leave-from {
    opacity: 1;
}

.v-leave-active {
    transition: opacity 0.1s ease-out;
}

.v-leave-to {
    opacity: 0;
}
</style>