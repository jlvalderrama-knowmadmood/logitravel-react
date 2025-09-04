import { useAddItemModal } from "../../context/add-item-modal";
import { useItemsActions } from "../../context/items";
import AddItemModalView from "./AddItemModalView";

function AddItemModal() {
  const { close, isOpen } = useAddItemModal();
  const { addItem } = useItemsActions();

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent, newItem: string) => {
    event.preventDefault();
    addItem(newItem);
    close();
  };

  return <AddItemModalView close={close} submit={handleSubmit} />;
}

export default AddItemModal;
