import { type } from "os";
import ListItems from "./listitems";
import {User} from '../../interfaces/index'


type Props ={

    items : User[] 
}

function List({ items }: Props) {
  return (
    <div>
      <ul>

        </ul>
    </div>
  );
}

export default List;
