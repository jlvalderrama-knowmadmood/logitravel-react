import { type State, type ItemsActions, ActionTypes } from "./items-types";

export function createInitialState(): State {
  return {
    items: [],
    history: [],
    selected: [],
  };
}

function reducer(state: State, action: ItemsActions): State {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.value],
        history: [...state.history, state.items],
      };

    case ActionTypes.TOGGLE_SELECT: {
      const selected = [...state.selected];
      const index = action.payload.index;

      return {
        ...state,
        selected: selected.includes(index)
          ? selected.filter((itemIndex) => itemIndex !== index)
          : [...selected, index],
      };
    }

    case ActionTypes.CLEAR_SELECTION: {
      return {
        ...state,
        selected: [],
      };
    }

    case ActionTypes.DELETE_ONE:
      return {
        ...state,
        items: [
          ...state.items.filter((_item, idx) => idx !== action.payload.index),
        ],
        history: [...state.history, state.items],
      };

    case ActionTypes.DELETE_SELECTED:
      return {
        ...state,
        items: [
          ...state.items.filter((_item, idx) => !state.selected.includes(idx)),
        ],
        history: [...state.history, state.items],
        selected: [],
      };

    case ActionTypes.UNDO: {
      if (state.history.length === 0) return state;
      return {
        ...state,
        items: state.history[state.history.length - 1],
        history: [...state.history].slice(0, -1),
      };
    }

    default:
      return state;
  }
}

export default reducer;
