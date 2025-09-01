type ListProps = {
  items: string[];
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
};

function ListView({ items, addItemToDelete, deleteItem }: ListProps) {
  if (items.length === 0) {
    return <p>No items yet</p>;
  }

  return (
    <ul className="list">
      {items.map((item, idx) => (
        <li
          className="list__item"
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
