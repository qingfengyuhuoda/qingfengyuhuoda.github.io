import { defineStore } from 'pinia'
import { computed, readonly, ref } from "vue"
// import { CountdownTimer } from "../utils/CountdownTimer"
import { useLocalStorage } from '@vueuse/core';
export const useuserStore = defineStore('userstore', () => {

    const info =useLocalStorage('info',{}) 
    const isAuthenticated = ref(false)

    const setInfo = (newInfo) => {
        info.value = newInfo
    }


    const removeInfo = () => {
        info.value = {}
    }

    const setIsAuthenticated = (value) => {
        isAuthenticated.value = value
    }
    return {
        info, setInfo, removeInfo,
        isAuthenticated,
        setIsAuthenticated
    }
}, { persist: true })