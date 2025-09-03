import { useContext } from "react";

import { ItemsActionsContext, ItemsContext } from "./ItemsContexts";

export function useItemsState() {
  const ctx = useContext(ItemsContext);
  if (!ctx) {
    throw new Error("useItemsState must be used within ItemsProvider");
  }
  return ctx;
}

export function useItemsActions() {
  const ctx = useContext(ItemsActionsContext);
  if (!ctx) {
    throw new Error("useItemsActions must be used within ItemsActionsContext");
  }
  return ctx;
}

export function useItems() {
  return { ...useItemsState(), ...useItemsActions() };
}
