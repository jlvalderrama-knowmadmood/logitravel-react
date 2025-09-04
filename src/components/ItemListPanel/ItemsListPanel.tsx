import { useAddItemModalActions } from "../../context/add-item-modal";
import { useItems } from "../../context/items/";
import ItemListPanelView from "./ItemListPanelView";

function ItemsListPanel() {
  const { open } = useAddItemModalActions();
  const { canDelete, canUndo, deleteSelected, undo } = useItems();

  function deleteItems() {
    deleteSelected();
  }

  function applyLastHistoryState() {
    undo();
  }

  return (
    <ItemListPanelView
      canDelete={canDelete}
      canUndo={canUndo}
      applyLastHistoryState={applyLastHistoryState}
      deleteItems={deleteItems}
      openAddItemModal={open}
    />
  );
}

export default ItemsListPanel;
