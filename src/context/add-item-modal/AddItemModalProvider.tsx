import { useMemo, useReducer } from "react";

import {
  AddItemModalActionsContext,
  AddItemModalContext,
} from "./AddItemModalContexts";
import reducer, { createInitialState } from "./add-item-modal-reducer";
import actions from "./add-item-modal-actions";

function AddItemModalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  const stateValue = useMemo(
    () => ({
      isOpen: state.isOpen,
    }),
    [state.isOpen]
  );

  const actionsValue = useMemo(
    () => ({
      open: () => dispatch(actions.open()),
      close: () => dispatch(actions.close()),
    }),
    []
  );

  return (
    <AddItemModalContext.Provider value={stateValue}>
      <AddItemModalActionsContext.Provider value={actionsValue}>
        {children}
      </AddItemModalActionsContext.Provider>
    </AddItemModalContext.Provider>
  );
}

export default AddItemModalProvider;
