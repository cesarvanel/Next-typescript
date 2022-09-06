import { type } from "os";
import ListItems from "./listitems";
import { User } from "../../interfaces/index";

type Props = {
  items: User []
};

function List({ items }: Props) {
  return (
    <div>
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <ListItems datas={item} />
          </li>;
        })}
      </ul>
    </div>
  );
}

export default List;
