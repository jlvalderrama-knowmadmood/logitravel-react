import { RiResetRightFill } from "react-icons/ri";

import List from "../List";
import { PrimaryButton, SecondaryButton } from "../Buttons";

import "./items-list-panel-styles.scss";

type ItemListPanelProps = {
  items: string[];
  itemIndexesToDelete: number[];
  canDelete: boolean;
  canUndo: boolean;
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
  applyLastHistoryState: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openAddItemModal: () => void;
};

function ItemListPanelView({
  items,
  addItemToDelete,
  canDelete,
  canUndo,
  deleteItem,
  applyLastHistoryState,
  itemIndexesToDelete,
  deleteItems,
  openAddItemModal,
}: ItemListPanelProps) {
  return (
    <div className="item-list-panel">
      <header className="item-list-panel__header">
        <h1 className="title-1">This is a technical proof</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
          recusandae, corporis ullam debitis cumque cum tempora ipsa. Quasi,
          accusamus?
        </p>
      </header>
      <List
        items={items}
        itemIndexesToDelete={itemIndexesToDelete}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
      />
      <div className="item-list-panel__actions">
        <SecondaryButton
          onClick={applyLastHistoryState}
          disabled={!canUndo}
          extraClass="button--with-icon"
        >
          <RiResetRightFill />
        </SecondaryButton>
        <SecondaryButton disabled={!canDelete} onClick={deleteItems}>
          Delete
        </SecondaryButton>
        <PrimaryButton onClick={openAddItemModal}>Add</PrimaryButton>
      </div>
    </div>
  );
}

export default ItemListPanelView;
