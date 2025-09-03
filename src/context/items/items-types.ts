export type State = {
  items: string[];
  history: string[][];
  selected: number[];
};

export const ActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ONE: "DELETE_ONE",
  DELETE_SELECTED: "DELETE_SELECTED",
  TOGGLE_SELECT: "TOGGLE_SELECT",
  CLEAR_SELECTION: "CLEAR_SELECTION",
  UNDO: "UNDO",
} as const;

export type ItemsActions =
  | { type: typeof ActionTypes.ADD_ITEM; payload: { value: string } }
  | { type: "DELETE_ONE"; payload: { index: number } }
  | { type: "DELETE_SELECTED" }
  | { type: "TOGGLE_SELECT"; payload: { index: number } }
  | { type: "CLEAR_SELECTION" }
  | { type: "UNDO" };
