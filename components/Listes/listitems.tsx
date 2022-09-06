
import Link from 'next/link'
import {User} from '../../interfaces/'

type Props = {
    datas: User;
  };

function ListItems  ({datas}:Props){

    return (

        <li>
            <Link href= "/users/[id]">
                <a> {datas.id} : {datas.name}</a>
            </Link>

        </li>
    )
}

export default ListItems ; 