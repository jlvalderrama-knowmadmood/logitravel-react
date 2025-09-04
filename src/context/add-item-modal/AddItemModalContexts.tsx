import { createContext } from "react";

export const AddItemModalContext = createContext<{
  isOpen: boolean;
} | null>(null);

export const AddItemModalActionsContext = createContext<{
  open: () => void;
  close: () => void;
} | null>(null);
