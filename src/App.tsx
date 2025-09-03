import { useState } from "react";

import AddItemModal from "./components/AddItemModal";
import ItemListPanel from "./components/ItemListPanel";

import "./app-styles.scss";
import { useItems } from "./context/items";

function App() {
  const [isAddNewItemModalVisible, setAddNewItemModalVisible] =
    useState<boolean>(false);

  const { addItem } = useItems();

  function openAddNewWindowModal() {
    setAddNewItemModalVisible(true);
  }

  function handleAddItemSubmit(event: React.FormEvent, newItem: string) {
    event.preventDefault();
    addItem(newItem);
    setAddNewItemModalVisible(false);
  }

  function handleCancelProcess(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAddNewItemModalVisible(false);
  }

  return (
    <main>
      <ItemListPanel openAddNewWindowModal={openAddNewWindowModal} />
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
