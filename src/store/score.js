import {writable} from 'svelte/store'

const createScoreStore = () =>{
    const {subscribe,set,update} = writable(0);

    return{
        subscribe,
        increment: () => update(n => n + 1),
        reset:() => set(0)
    }
}

export const Score = createScoreStore();