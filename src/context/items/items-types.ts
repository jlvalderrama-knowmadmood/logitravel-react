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
  | { type: typeof ActionTypes.DELETE_ONE; payload: { index: number } }
  | { type: typeof ActionTypes.DELETE_SELECTED }
  | { type: typeof ActionTypes.TOGGLE_SELECT; payload: { index: number } }
  | { type: typeof ActionTypes.CLEAR_SELECTION }
  | { type: typeof ActionTypes.UNDO };
