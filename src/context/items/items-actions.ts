import { ActionTypes } from "./items-types";

export const addItem = (value: string) => ({
  type: ActionTypes.ADD_ITEM,
  payload: { value },
});

export const deleteOne = (index: number) => ({
  type: ActionTypes.DELETE_ONE,
  payload: { index },
});

export const deleteSelected = () => ({
  type: ActionTypes.DELETE_SELECTED,
});

export const toggleSelect = (index: number) => ({
  type: ActionTypes.TOGGLE_SELECT,
  payload: { index },
});

export const clearSelection = () => ({
  type: ActionTypes.CLEAR_SELECTION,
});

export const undo = () => ({
  type: ActionTypes.UNDO,
});

export default {
  addItem,
  deleteOne,
  deleteSelected,
  toggleSelect,
  clearSelection,
  undo,
};
