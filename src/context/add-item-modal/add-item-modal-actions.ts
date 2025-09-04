import { ActionTypes } from "./add-item-modal-types";

export const open = () => ({ type: ActionTypes.OPEN });

export const close = () => ({ type: ActionTypes.CLOSE });

export default { open, close };
