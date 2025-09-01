import { useState } from "react";

import AddItemModal from "./components/AddItemModal";
import ItemListPanel from "./components/ItemListPanel";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [itemIndexesToDelete, setItemIndexesToDelete] = useState<number[]>([]);
  const [history, setHistory] = useState<string[][]>([]);
  const [isAddNewItemModalVisible, setAddNewItemModalVisible] =
    useState<boolean>(false);

  function handleAddItemSubmit(event: React.FormEvent, newItem: string) {
    event.preventDefault();

    const nextItems = [...items, newItem];

    setHistory((history) => [...history, items]);
    setItems(nextItems);
    setAddNewItemModalVisible(false);
  }

  function handleOpenAddNewItemModal() {
    setAddNewItemModalVisible(true);
  }

  function handleCancelProcess(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAddNewItemModalVisible(false);
  }

  function addItemToDelete(index: number) {
    const itemsToDelete = itemIndexesToDelete.includes(index)
      ? itemIndexesToDelete.filter((itemIndex) => itemIndex !== index)
      : [...itemIndexesToDelete, index];

    setItemIndexesToDelete(itemsToDelete);
  }

  function deleteItems() {
    const nextItems = items.filter(
      (_item, idx) => !itemIndexesToDelete.includes(idx)
    );

    setHistory((history) => [...history, items]);
    setItems(nextItems);
    setItemIndexesToDelete([]);
  }

  function deleteItem(index: number) {
    const nextItems = items.filter((_item, idx) => idx !== index);

    setHistory((history) => [...history, items]);
    setItems(nextItems);
  }

  function applyLastHistoryState() {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];

    setItems(previousState);
    setHistory((history) => history.slice(0, -1));
  }

  return (
    <main>
      <ItemListPanel
        items={items}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
        applyLastHistoryState={applyLastHistoryState}
        itemIndexesToDelete={itemIndexesToDelete}
        deleteItems={deleteItems}
        openAddItemModal={handleOpenAddNewItemModal}
      />
      {isAddNewItemModalVisible && (
        <AddItemModal
          submit={handleAddItemSubmit}
          close={handleCancelProcess}
        />
      )}
    </main>
  );
}

export default App;
