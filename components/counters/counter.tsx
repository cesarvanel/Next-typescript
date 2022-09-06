
import React,{ReactNode} from "react" ;

type Props = {

    start?: number;
    children?: ReactNode


}

export function Counter ({start = 0} : Props){

    return <div>
        <h2>Compteur</h2>
        <p>
            Numero {start}
        </p>
        <button>Incrementer</button>
    </div>
}