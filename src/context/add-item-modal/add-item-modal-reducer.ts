import {
  ActionTypes,
  type AddItemModalActions,
  type State,
} from "./add-item-modal-types";

export function createInitialState(): State {
  return { isOpen: false };
}

function reducer(state: State, action: AddItemModalActions): State {
  switch (action.type) {
    case ActionTypes.OPEN:
      return {
        ...state,
        isOpen: true,
      };

    case ActionTypes.CLOSE:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}

export default reducer;
