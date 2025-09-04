import "./list-styles.scss";

type ListViewProps = {
  items: string[];
  calculateListItemExtraClass: (index: number) => string;
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
};

function ListView({
  items,
  calculateListItemExtraClass,
  addItemToDelete,
  deleteItem,
}: ListViewProps) {
  if (items.length === 0) {
    return <p className="list--no-items">No items yet</p>;
  }

  return (
    <ul className="list">
      {items.map((item, idx) => (
        <li
          className={calculateListItemExtraClass(idx)}
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
