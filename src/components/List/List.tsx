import { useItems } from "../../context/items";
import { calculateListItemExtraClass } from "./list-helpers/";
import ListView from "./ListView";
import ListEmpty from "./ListEmpty";

function List() {
  const { items, toggleSelect, deleteOne, selected } = useItems();

  function handleCalculateListItemExtraClass(index: number) {
    return calculateListItemExtraClass(selected, index);
  }

  if (items.length === 0) {
    return <ListEmpty />;
  }

  return (
    <ListView
      items={items}
      addItemToDelete={toggleSelect}
      deleteItem={deleteOne}
      calculateListItemExtraClass={handleCalculateListItemExtraClass}
    />
  );
}

export default List;
