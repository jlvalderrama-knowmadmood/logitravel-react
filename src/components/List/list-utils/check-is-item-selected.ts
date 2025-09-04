function checkIsItemSelected(selected: number[], index: number): boolean {
  if (selected.length === 0) return false;
  return selected.includes(index);
}

export default checkIsItemSelected;
