import { createContext } from "react";

export const ItemsContext = createContext<{
  items: string[];
  selected: number[];
  canUndo: boolean;
  canDelete: boolean;
} | null>(null);

export const ItemsActionsContext = createContext<{
  addItem: (value: string) => void;
  deleteOne: (index: number) => void;
  deleteSelected: () => void;
  toggleSelect: (index: number) => void;
  clearSelection: () => void;
  undo: () => void;
} | null>(null);
