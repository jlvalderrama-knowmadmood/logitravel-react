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
  return (
    <ul className="list">
      {items.map((item, idx) => (
        <li
          className={`list__item ${calculateListItemExtraClass(idx)}`}
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
