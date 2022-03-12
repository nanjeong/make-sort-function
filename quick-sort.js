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

const quickSortInPlace = (array) => {
  if (array.length <= 1) return array;

  const start = 0;
  const end = array.length - 1;
  const pivot = array[start];

  let low = 1;
  let high = end;

  while (low <= high) {
    while (low < array.length && array[low] < pivot) {
      low += 1;
    }

    while (high > 0 && array[high] >= pivot) {
      high -= 1;
    }

    if (low > high) {
      break;
    }

    const temp = array[low];
    array[low] = array[high];
    array[high] = temp;

    low += 1;
    high -= 1;
  }

  array[start] = array[high];
  array[high] = pivot;

  return [
    ...quickSortInPlace(array.slice(start, high)),
    pivot,
    ...quickSortInPlace(array.slice(low, end + 1)),
  ];
};

module.exports = { quickSort, quickSortInPlace };
