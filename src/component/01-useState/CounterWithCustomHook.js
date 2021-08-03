import React from 'react';
import { useCounter } from '../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, factor, reset } = useCounter(100);


    return (
        <>
            <h1>Counter With Hook : {counter} </h1>
            <hr/>

            <button 
            className = "btn btn-danger" 
            onClick={()=>increment(factor)}                   
            >
            +1
            </button>
            <button 
            onClick={()=>decrement(factor)}             
            className = "btn btn-primary"
            >
                -1
            </button>

            
            <button 
            onClick={()=>reset()}             
            className = "btn btn-secondary"
            >
            Reset
            </button>


        </>
    )
}
