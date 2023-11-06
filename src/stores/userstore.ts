import { defineStore } from 'pinia'
import { ref } from "vue"
// import { CountdownTimer } from "../utils/CountdownTimer"
import { useLocalStorage } from '@vueuse/core';
export const useuserStore = defineStore('userstore', () => {

    const info =useLocalStorage('info',{
        username:'',
        password:'',
        touxiang:'',
        achieve1:'',
        achieve2:'',
        achieve3:'',
        achieve4:'',
        score:0,

    }) 
    const isAuthenticated = ref(false)

    const setInfo = (newInfo) => {
        info.value = newInfo
    }


    const removeInfo = () => {
        info.value = {
            username:'',
            password:'',
            touxiang:'',
            achieve1:'',
            achieve2:'',
            achieve3:'',
            achieve4:'',
            score:0,
        }
    }

    const setIsAuthenticated = (value) => {
        isAuthenticated.value = value
    }
    return {
        info, setInfo, removeInfo,
        isAuthenticated,
        setIsAuthenticated
    }
})