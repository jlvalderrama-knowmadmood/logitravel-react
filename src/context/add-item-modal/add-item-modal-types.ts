export type State = {
  isOpen: boolean;
};

export const ActionTypes = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
} as const;

export type AddItemModalActions =
  | { type: typeof ActionTypes.OPEN }
  | { type: typeof ActionTypes.CLOSE };
