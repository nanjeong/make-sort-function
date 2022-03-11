const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const before = [];
  const after = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      before.push(array[i]);
    } else {
      after.push(array[i]);
    }
  }

  return [...quickSort(before), pivot, ...quickSort(after)];
};
