import { useMemo, useReducer } from "react";

import reducer, { createInitialState } from "./items-reducer";
import actions from "./items-actions";
import { ItemsActionsContext, ItemsContext } from "./ItemsContexts";

function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  const canUndo = state.history.length > 0;
  const canDelete = state.selected.length > 0;

  const stateValue = useMemo(
    () => ({
      items: state.items,
      selected: state.selected,
      canUndo,
      canDelete,
    }),
    [state.items, state.selected, canUndo, canDelete]
  );

  const actionsValue = useMemo(
    () => ({
      addItem: (value: string) => dispatch(actions.addItem(value)),
      deleteOne: (index: number) => dispatch(actions.deleteOne(index)),
      deleteSelected: () => dispatch(actions.deleteSelected()),
      toggleSelect: (index: number) => dispatch(actions.toggleSelect(index)),
      clearSelection: () => dispatch(actions.clearSelection()),
      undo: () => dispatch(actions.undo()),
    }),
    []
  );

  return (
    <ItemsContext.Provider value={stateValue}>
      <ItemsActionsContext.Provider value={actionsValue}>
        {children}
      </ItemsActionsContext.Provider>
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;
