import { RiResetRightFill } from "react-icons/ri";

import List from "../List";

type ItemListPanelProps = {
  items: string[];
  itemIndexesToDelete: number[];
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
  applyLastHistoryState: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openAddItemModal: () => void;
};

function ItemListPanelView({
  items,
  addItemToDelete,
  deleteItem,
  applyLastHistoryState,
  itemIndexesToDelete,
  deleteItems,
  openAddItemModal,
}: ItemListPanelProps) {
  return (
    <div className="surface">
      <div className="surface__header">
        <h1 className="title-1">This is a technical proof</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
          recusandae, corporis ullam debitis cumque cum tempora ipsa. Quasi,
          accusamus?
        </p>
      </div>
      <List
        items={items}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
      />
      <div className="actions">
        <button
          className="button"
          onClick={applyLastHistoryState}
          disabled={history.length === 0}
        >
          <RiResetRightFill />
        </button>
        <button
          className="button"
          disabled={itemIndexesToDelete.length === 0}
          onClick={deleteItems}
        >
          Delete
        </button>
        <button className="button" onClick={openAddItemModal}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemListPanelView;
