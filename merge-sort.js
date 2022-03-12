const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const start = 0;
  const end = array.length - 1;
  const mid = Math.floor((end - start) / 2);

  const sortedArrayPart1 = mergeSort(array.slice(0, mid + 1));
  const sortedArrayPart2 = mergeSort(array.slice(mid + 1));

  const sortedArray = [];

  let i = 0;
  let j = 0;
  while (i < sortedArrayPart1.length && j < sortedArrayPart2.length) {
    if (sortedArrayPart1[i] <= sortedArrayPart2[j]) {
      sortedArray.push(sortedArrayPart1[i]);
      i += 1;
    } else {
      sortedArray.push(sortedArrayPart2[j]);
      j += 1;
    }
  }

  if (i < sortedArrayPart1.length) {
    sortedArray.push(...sortedArrayPart1.slice(i));
  }

  if (j < sortedArrayPart2.length) {
    sortedArray.push(...sortedArrayPart2.slice(j));
  }

  return sortedArray;
};

module.exports = { mergeSort };
