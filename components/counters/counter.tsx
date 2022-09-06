
import React,{ReactNode , useState} from "react" ;
import {useCounter} from '../context/context'

type Props = {

    start?: number;
    children?: ReactNode


}

export function Counter ({start = 0 , children} : Props){

  const {n , incr} = useCounter();
    return <div>
        <h2>Compteur</h2>
        {children}
        <p>
            Numero {n}
        </p>
        <button onClick={incr}>Incrementer</button>
    </div>
}