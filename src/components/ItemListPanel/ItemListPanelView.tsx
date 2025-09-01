import { RiResetRightFill } from "react-icons/ri";

import List from "../List";
import { PrimaryButton, SecondaryButton } from "../Buttons";

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
        itemIndexesToDelete={itemIndexesToDelete}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
      />
      <div className="actions">
        <SecondaryButton
          onClick={applyLastHistoryState}
          disabled={history.length === 0}
        >
          <RiResetRightFill />
        </SecondaryButton>
        <SecondaryButton
          disabled={itemIndexesToDelete.length === 0}
          onClick={deleteItems}
        >
          Delete
        </SecondaryButton>
        <PrimaryButton onClick={openAddItemModal}>Add</PrimaryButton>
      </div>
    </div>
  );
}

export default ItemListPanelView;
