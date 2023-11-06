import { defineStore } from 'pinia'
import { use2048 } from '../utils/2048'
import { useLocalStorage } from '@vueuse/core';
import { watch } from 'vue';


export const useClassicalGameStore=defineStore('classic',()=>{
    const local=use2048();
    const highScore=useLocalStorage('highScore',0);
    const removehighScore = () => {
        highScore.value=0
    }


    watch(local.score, () => {
        if (local.score.value > highScore.value)
          highScore.value = local.score.value
      })


    return{
        local,
        highScore,
        removehighScore
    }
})