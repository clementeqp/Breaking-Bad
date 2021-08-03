import React from 'react';
import { useCounterMultiple } from '../hooks/useCounterMultiple';
import { useFetch } from '../hooks/useFetch';
import './multiple.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounterMultiple(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state);
    const {author, quote}= !!data && data[0];

    console.log(author, quote);

    return (
        <div >
            <br/>
            <h1 className="text-center">Breaking Bad</h1>
            <h5 className="text-center">Frases célebres</h5>
            <hr/>
            <br/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                        loading ...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote">
                        <p className="mb-0">{quote}</p>
                        <br/>
                        <footer 
                        className=" text-danger text-end">
                            <h5>{author}</h5>
                        </footer>
                        </blockquote> 
                    )
            }
            <br/>
            <button class="btn btn-outline-success btn-sm"
                    onClick={increment}
            >
                Siguiente
            </button>
            <br/>
            <footer className="
                card text-dark bg-light mb-3
                text-center
            ">
                <h5>Clemente Quintana Pozo</h5>
                <br/>
                <h6>Desarrollador de Aplicaciones Multiplataforma</h6>
            </footer>

        </div>
    )
}
