import type { Direction } from "../utils/2048"
import { use2048Duel, type Status, MAX_HP } from "../utils/2048duel"
import { defineStore } from 'pinia'
import { usePeerStore } from './peer'
import { computed, readonly, ref } from "vue"
import { createEventHook } from "@vueuse/core"
// import { CountdownTimer } from "../utils/CountdownTimer"

export interface GameMessage {
    message: string
    payload?: Record<string, string | number>
}


export const useGameStore = defineStore('game', () => {
    const peer = usePeerStore()
    const localGame = use2048Duel()
    const remoteGame = use2048Duel()

    const onRemotePlayerJoined = createEventHook()
    const onRemotePlayerLeft = createEventHook()

    const isRemotePlayerConnected = ref(false)
    const isMultiplayerGameOpen =ref(false)

    // const initialSeconds = 180; // 初始倒计时时间为180秒
    // const countdownTimer = new CountdownTimer(initialSeconds)

    const openMultiplayerGame = () => {
        peer.createPeer()

        isMultiplayerGameOpen.value = true
    }

    const closeMultiplayerGame = () => {
        peer.destroyPeer()
        isMultiplayerGameOpen.value = false
        const params = new URLSearchParams(window.location.search)
        params.delete('game')
        window.history.pushState({}, '', window.location.pathname)
        localGame.initialize()
        remoteGame.initialize()
    }

    const joinMultiplayerGame = (id: string) => {
        openMultiplayerGame()
        peer.connect(id)
    }

    const leaveMultiplayerGame = () => {
        peer.disconnect()
        closeMultiplayerGame()
        startNewGame()
    }

    const startNewGame = (silent = false) => {
        const seed=Math.random()
        localGame.initialize(seed)
        remoteGame.hp.value=MAX_HP

        if (isRemotePlayerConnected.value)
            peer.sendMessage('new-game', { seed,silent })
    }

    peer.onConnected(() => {
        isRemotePlayerConnected.value = true
        startNewGame()
    })

    peer.onDisconnected(() => {
        isRemotePlayerConnected.value = false
    })



    localGame.onMove((direction: Direction) => peer.sendMessage('move', { direction }))
    localGame.onSetprop(([i,j,status])=>peer.sendMessage('setStatus',{i,j,status}))
    localGame.onAttack((damage:number)=>peer.sendMessage('attack',{damage}))
    localGame.onHPchange((hp:number)=>peer.sendMessage('HPchange',{hp}))
    localGame.onDefeat(()=>peer.sendMessage('win'))
    localGame.onDelete(([i,j])=>peer.sendMessage('delete',{i,j}))
    remoteGame.onFrozen((status:Status)=>peer.sendMessage("Frozen",{status}))

//对手move，对手强化，对手攻击你，对手输了,
    peer.onMessage('move', ({ direction }: { direction: Direction }) => remoteGame.move(direction))
    peer.onMessage('setStatus',({i,j,status}:{i:number,j:number,status:Status})=>remoteGame.setTileProp(i,j,status))
    peer.onMessage('attack',({damage}:{damage:number})=> localGame.striked(damage))
    peer.onMessage('HPchange',({hp}:{hp:number})=>remoteGame.setHP(hp))
    peer.onMessage('win',()=>localGame.hasWon.value=true)
    peer.onMessage('new-game', ({seed, silent }: { seed:number, silent: boolean }) => {
        remoteGame.initialize(seed)
        if (!silent) startNewGame(true)
    })
    peer.onMessage('delete',({i,j}:{i:number,j:number})=>remoteGame.deleteTile(i,j))
    peer.onMessage('Frozen',({status}:{status:Status})=>localGame.setRandomTile(localGame.board.value,status))
    const isWaitingForOtherPlayer = computed(() =>  !isRemotePlayerConnected.value)

    startNewGame()

    return {
        openMultiplayerGame,
        closeMultiplayerGame,
    
        localGame,
        remoteGame,
        isMultiplayerGameOpen,
    
        startNewGame,
    
        isRemotePlayerConnected: readonly(isRemotePlayerConnected),
        isWaitingForOtherPlayer: readonly(isWaitingForOtherPlayer),
    
        joinMultiplayerGame,
        leaveMultiplayerGame,
    
        link: computed(() => `${window.location.origin}\/battle?game=${peer.id}`),
    
        onRemotePlayerJoined: onRemotePlayerJoined.on,
        onRemotePlayerLeft: onRemotePlayerLeft.on,
    }
})