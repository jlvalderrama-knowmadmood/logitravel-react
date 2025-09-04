import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../Buttons";

import "./add-item-modal.styles.scss";

type AddItemModalProps = {
  submit: (event: React.FormEvent, newItem: string) => void;
  close: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function AddItemModalView({ submit, close }: AddItemModalProps) {
  const [newItemValue, setNewItemValue] = useState<string>("");

  function handleNewItemValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewItemValue(event.target.value);
  }

  return (
    <div className="add-item-modal-overlay" role="dialog">
      <div className="add-item-modal">
        <h2 className="title-2">Add item to list</h2>
        <form
          onSubmit={(event) => submit(event, newItemValue)}
          className="add-item-modal__form"
        >
          <input
            type="text"
            placeholder="Type the text here..."
            className="add-item-modal__form-input"
            value={newItemValue}
            onChange={handleNewItemValueChange}
          />
          <div className="add-item-modal__form-actions">
            <SecondaryButton onClick={close}>Cancel</SecondaryButton>
            <PrimaryButton type="submit" disabled={newItemValue === ""}>
              Add
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModalView;
