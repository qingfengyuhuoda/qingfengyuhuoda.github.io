<script setup lang="ts">
import { onKeyStroke,  useTransition } from '@vueuse/core'
// import Scrim from './Scrim.vue'
import Board from './Board.vue';
import HealthPointBar from './HealthPointBar.vue';
import { useGameStore } from '../stores/game'
import { useFireworks } from '../composables/useConfetti'
import { computed, ref, watch } from 'vue';
import { Status ,MAX_HP} from '../utils/2048duel';
import Mask from './Mask.vue'

const emit = defineEmits<{
  (e: 'up'): void
  (e: 'down'): void
  (e: 'left'): void
  (e: 'right'): void
  (e: 'update:seed'): string
}>()

// const board = ref<HTMLElement>()

const { play } = useFireworks()

// const { direction } = useSwipe(board, {
//   threshold: 10,
// })

const game = useGameStore()
const showWonState = ref(false)

// watch(direction, () => {
//   if (direction.value === SwipeDirection.UP)
//     game.localGame.up()

//   if (direction.value === SwipeDirection.DOWN)
//     game.localGame.down()

//   if (direction.value === SwipeDirection.LEFT)
//     game.localGame.left()

//   if (direction.value === SwipeDirection.RIGHT)
//     game.localGame.right()
// })

game.localGame.onWon(() => {
  play()
  showWonState.value = true
})

watch(() => game.localGame.hasWon, () => {
  if (!game.localGame.hasWon)
    showWonState.value = false
})


const canMove = computed(() => {
    if (game.localGame.isStuck) {
        return false
    }

    if (willTriggerProp.value) {
        return false
    }

    if(game.localGame.isGameOver || game.remoteGame.hasWon || showWonState.value) return false

    return true
})

const willTriggerProp = computed(() => {
    if (game.localGame.trigger_pos[0] !== -1 && game.localGame.trigger_pos[1] !== -1) {
        return true
    }

    return false
})

watch(willTriggerProp, () => {
    if (willTriggerProp.value === true) {
        setTimeout(() => {
            game.localGame.triggerTileProp(game.localGame.trigger_pos)
            game.localGame.trigger_pos = [-1, -1]
        }, 300)
    }
})

onKeyStroke(['ArrowUp', 'w'], () => {
    if (!canMove.value) {
        return
    }

    game.localGame.up()
    emit('up')
})

onKeyStroke(['ArrowDown', 's'], () => {
    if (!canMove.value) {
        return
    }

    game.localGame.down()
    emit('down')
})

onKeyStroke(['ArrowLeft', 'a'], () => {
    if (!canMove.value) {
        return
    }

    game.localGame.left()
    emit('left')
})

onKeyStroke(['ArrowRight', 'd'], () => {
    if (!canMove.value) {
        return
    }

    game.localGame.right()
    emit('right')
})

onKeyStroke('Enter', () => {
    const num = game.localGame.biggestTile[0]
    const i = game.localGame.biggestTile[1]
    const j = game.localGame.biggestTile[2]

    if (num < 64 || num > game.localGame.hp) {
        return
    }

    game.localGame.deleteTile(i, j)

    if (game.localGame.isStuck === true) {
        game.localGame.isStuck = false
    }
})
onKeyStroke('1', () => {
    const num = game.localGame.biggestTile[0]
    const i = game.localGame.biggestTile[1]
    const j = game.localGame.biggestTile[2]

    if (num < 64) {
        return
    }
    if(game.localGame.prop_num[0]<=0) return
    game.localGame.prop_num[0]--
    game.localGame.setTileProp(i, j, 'row' as Status)
})

onKeyStroke('2', () => {
    const num = game.localGame.biggestTile[0]
    const i = game.localGame.biggestTile[1]
    const j = game.localGame.biggestTile[2]

    if (num < 64) {
        return
    }
    if(game.localGame.prop_num[1]<=0) return
    game.localGame.prop_num[1]--
    game.localGame.setTileProp(i, j, 'column' as Status)
})

onKeyStroke('3', () => {
    const num = game.localGame.biggestTile[0]
    const i = game.localGame.biggestTile[1]
    const j = game.localGame.biggestTile[2]

    if (num < 64) {
        return
    }
    if(game.localGame.prop_num[2]<=0) return
    game.localGame.prop_num[2]--
    game.localGame.setTileProp(i, j, 'bomb' as Status)
})

onKeyStroke('4', () => {
    const num = game.localGame.biggestTile[0]
    const i = game.localGame.biggestTile[1]
    const j = game.localGame.biggestTile[2]

    if (num < 64) {
        return
    }
    if(game.localGame.prop_num[3]<=0) return
    game.localGame.prop_num[3]--
    game.localGame.setTileProp(i, j, 'heal' as Status)
})



onKeyStroke('f', () => {

    game.remoteGame.board = game.remoteGame.setRandomTile(game.remoteGame.board, 'frozen')

})


</script>

<template>
    <div class="container-game">
        <transition>
            <Mask v-if="showWonState" :color="'gold'" style="position: absolute; bottom: 0px;">
                <p class="mask-text" style="position: relative; top: 140px;">你赢了</p>
                <button class="custom-button" @click="game.leaveMultiplayerGame" style="position: absolute; bottom: 200px;right:215px; z-index: 120;">{{ '离开' }}</button>
            </Mask>
        </transition>

        <transition>
            <Mask v-if="game.localGame.isGameOver  || game.localGame.isStuck" :color="'white'" style="position: absolute; bottom: 0px;">
                <p class="mask-text" style="position: relative; top: 180px;">你输了</p>
                <button class="custom-button" @click="game.leaveMultiplayerGame"  style="position: absolute; bottom: 200px;right:215px; z-index: 120;">{{ '离开' }}</button>
            </Mask>
        </transition>

        <HealthPointBar :hp="game.localGame.hp" :max="MAX_HP" :side="'left'" :enemy="false" style="margin-bottom: 5;"></HealthPointBar>
        <Board :board="game.localGame.board" :score="game.localGame.score" style="position: absolute; bottom: 0px;"></Board>
    </div>
</template>

<style lang="scss" scoped>
.container-game {
    width: 560px;
    height: 650px;
    position: relative;
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
    top: 180px;
    right: 280px;
}
.mask-text {
    font-family: 'Microsoft Yahei';
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    user-select: none;
    
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