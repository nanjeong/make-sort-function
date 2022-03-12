const { quickSort, quickSortInPlace } = require("./quick-sort.js");
const { mergeSort } = require("./merge-sort.js");

const randomNumber = (min = -1000000, max = 1000000) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getArray = (n) => {
  return [...Array(n)].map((_) => randomNumber());
};

const sort = (sortFn, array) => {
  const start = new Date();
  const sortedArray = sortFn(array);
  const end = new Date();
  const sortTime = end.getTime() - start.getTime();

  return { sortedArray, sortTime };
};

const printResult = (sortMethod, sortResult) => {
  console.log(`${sortMethod} 정렬 시간 : ${sortResult.sortTime}`);
};

const array = getArray(10000);

const quickSortResult = sort(quickSort, array);
printResult("quickSort", quickSortResult);

const quickSortInPlaceResult = sort(quickSortInPlace, array);
printResult("quickSortInPlace", quickSortInPlaceResult);

const mergeSortResult = sort(mergeSort, array);
printResult("mergeSort", mergeSortResult);

console.log(
  `${quickSortResult.sortedArray.every(
    (it, idx) => it === quickSortInPlaceResult.sortedArray[idx]
  )}`
);

console.log(
  `${quickSortResult.sortedArray.every(
    (it, idx) => it === mergeSortResult.sortedArray[idx]
  )}`
);
