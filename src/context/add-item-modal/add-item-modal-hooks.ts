import { useContext } from "react";

import {
  AddItemModalContext,
  AddItemModalActionsContext,
} from "./AddItemModalContexts";

export function useAddItemModalState() {
  const ctx = useContext(AddItemModalContext);
  if (!ctx) {
    throw new Error("");
  }
  return ctx;
}

export function useAddItemModalActions() {
  const ctx = useContext(AddItemModalActionsContext);
  if (!ctx) {
    throw new Error("");
  }
  return ctx;
}

export function useAddItemModal() {
  return {
    ...useAddItemModalState(),
    ...useAddItemModalActions(),
  };
}
