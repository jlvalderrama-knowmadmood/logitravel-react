import { checkIsItemSelected } from "../list-utils";

function calculateListItemExtraClass(
  selected: number[],
  index: number
): string {
  if (selected.length === 0) return "";
  return checkIsItemSelected(selected, index) ? "list__item--selected" : "";
}

export default calculateListItemExtraClass;
