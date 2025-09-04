import { useItems } from "../../context/items";
import ListView from "./ListView";

function List() {
  const { items, toggleSelect, deleteOne, selected } = useItems();

  function calculateListItemExtraClass(index: number) {
    return `list__item ${
      selected.includes(index) ? "list__item--selected" : ""
    }`;
  }

  return (
    <ListView
      items={items}
      addItemToDelete={toggleSelect}
      deleteItem={deleteOne}
      calculateListItemExtraClass={calculateListItemExtraClass}
    />
  );
}

export default List;
