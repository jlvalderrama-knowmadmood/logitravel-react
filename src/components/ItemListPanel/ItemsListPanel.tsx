import { useAddItemModalActions } from "../../context/add-item-modal";
import { useItems } from "../../context/items/";
import ItemListPanelView from "./ItemListPanelView";

function ItemsListPanel() {
  const { open } = useAddItemModalActions();
  const {
    items,
    selected,
    canDelete,
    canUndo,
    toggleSelect,
    deleteOne,
    deleteSelected,
    undo,
  } = useItems();

  function addItemToDelete(index: number) {
    toggleSelect(index);
  }

  function deleteItems() {
    deleteSelected();
  }

  function deleteItem(index: number) {
    deleteOne(index);
  }

  function applyLastHistoryState() {
    undo();
  }

  return (
    <ItemListPanelView
      items={items}
      canDelete={canDelete}
      canUndo={canUndo}
      addItemToDelete={addItemToDelete}
      deleteItem={deleteItem}
      applyLastHistoryState={applyLastHistoryState}
      itemIndexesToDelete={selected}
      deleteItems={deleteItems}
      openAddItemModal={open}
    />
  );
}

export default ItemsListPanel;
