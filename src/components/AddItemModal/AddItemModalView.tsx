import { useState } from "react";

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
    <div className="add-item">
      <h2 className="title-2">Add item to list</h2>
      <form
        onSubmit={(event) => submit(event, newItemValue)}
        className="add-new-item-form"
      >
        <input
          type="text"
          placeholder="Type the text here..."
          value={newItemValue}
          onChange={handleNewItemValueChange}
        />
        <div className="add-new-item-form__actions">
          <button type="button" onClick={close}>
            Cancel
          </button>
          <button type="submit" disabled={newItemValue === ""}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemModalView;
