import { writable } from 'svelte/store';

const createGameplayStore= () =>{
    const {subscribe,update,set} = writable(false)

    return{
        subscribe,
        toggle:() => update(n=>!n),
    }
}

export const Gameplay = createGameplayStore();