<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFireworks } from '../composables/useConfetti';
// import CopyLink from './CopyLink.vue'
import Button from './Button.vue'
import Board from './Board.vue';
import Mask from './Mask.vue'
// import Scrim from './Scrim.vue'
import HealthPointBar from './HealthPointBar.vue';
import { useGameStore } from '../stores/game'
// import { useTransition } from '@vueuse/core';
import { MAX_HP } from '../utils/2048duel';
// import clipboard from "clipboard";
import { useClipboard } from '@vueuse/core';

const { play } = useFireworks()
const { copy } = useClipboard()

const game = useGameStore()
const showWonState = ref(false)
const didCopy=ref(false)
game.localGame.onWon(() => {
    play()
    showWonState.value = true
})

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
    
    <div class="container-game">
        <HealthPointBar :hp="game.remoteGame.hp" :max="MAX_HP" :side="'left'" :enemy="true" style="margin-bottom: 5;"></HealthPointBar>


        <Mask v-if="game.isWaitingForOtherPlayer" :color="'#ccc'" class="Mask" style="position: absolute; bottom: 0px; ">
            <div>
                <div class="loader"></div>
                <span>
                    Waiting for other player to connect...
                </span>
            </div>
            
            <span style="z-index: 10; ">
                {{ game.link }}
            </span>
            <button class="custom-button" @click="copyLink" style="z-index: 10;">复制</button>
            
        </Mask>

        <Board :board="game.remoteGame.board" :score="game.remoteGame.score" style=" bottom: 0px;" />
        

    </div>
</template>

<style scoped>
.container-game {
    width: 592px;
    height: 650px;
    position: relative;
}

.Mask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 可根据需要调整高度 */
    pointer-events: auto;
}

.loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.mask-text {
    text-align: center;
    /* 文本水平居中 */
    line-height: 100px;
    /* 垂直居中，假设蒙版的高度为100px */
    margin: 0;
    /* 可以去掉默认的外边距，确保文本紧密贴近蒙版 */
}

.custom-button {
  
  font-size: 14px;
  color: #ec6090;
  background-color: transparent;
  border: 1px solid #ec6090;
  padding: 12px 30px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  width: 180px;
}
.custom-button:hover {
  border-color: #fff;
  background-color: #fff;
  color: #e75e8d;
}
</style>
