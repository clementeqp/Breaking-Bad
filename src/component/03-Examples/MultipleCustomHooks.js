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
        <div>
            <h1>Breaking Bad</h1>
            <h5>Frases célebres</h5>
            <hr/>
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
                        <blockquote className="blockquote text-end">
                        <h3 className="mb-0">{quote}</h3>
                        <br/>
                        <footer 
                        className=" text-danger">
                            <h4>{author}</h4>
                        </footer>
                        </blockquote> 
                    )
            }

            <button className="btn btn-info"
                    onClick={increment}
            >
                Siguiente
            </button>
            <br/><br/><br/>
            <footer className="
                card text-dark bg-light mb-3
            ">
                <h2 className="text-end">Clemente Quintana Pozo</h2>
                <h4>Desarrollador de Aplicaciones Multiplataforma</h4>
            </footer>

        </div>
    )
}
