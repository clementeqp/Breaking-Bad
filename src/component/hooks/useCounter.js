import { useState } from "react"


export const useCounter = (initialState = 10 ) =>{
    const factor = 2;

    const [state, setState] = useState(initialState);

    const increment = (factor)=>{
        setState(state+factor);
    }

    const decrement = (factor)=>{
        setState(state-factor);
    }

    const reset = ()=>{
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset,
        factor
    };
};