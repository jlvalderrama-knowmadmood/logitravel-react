import "./list-styles.scss";

type ListProps = {
  items: string[];
  itemsToDelete: numbers[];
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
};

function ListView({
  items,
  addItemToDelete,
  deleteItem,
  itemsToDelete,
}: ListProps) {
  if (items.length === 0) {
    return <p>No items yet</p>;
  }

  return (
    <ul className="list">
      {items.map((item, idx) => (
        <li
          className={`list__item ${
            itemsToDelete.includes(idx) ? "list__item--selected" : ""
          }`}
          key={`${item}-${idx}`}
          onClick={() => addItemToDelete(idx)}
          onDoubleClick={() => deleteItem(idx)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListView;
