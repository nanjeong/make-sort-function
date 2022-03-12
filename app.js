const { quickSort, quickSortInPlace } = require("./quickSort.js");

const randomNumber = (min = -1000000, max = 1000000) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getArray = (n) => {
  return [...Array(n)].map((_) => randomNumber());
};

const array = getArray(10000);

const quickSortStart = new Date();
const quickSortResult = quickSort(array);
const quickSortEnd = new Date();
const quickSortTime = quickSortEnd.getTime() - quickSortStart.getTime();
console.log(`quickSort 정렬 시간 : ${quickSortTime}`);

const quickSortInPlaceStart = new Date();
const quickSortInPlaceResult = quickSortInPlace(array);
const quickSortInPlaceEnd = new Date();
const quickSortInPlaceTime =
  quickSortInPlaceEnd.getTime() - quickSortInPlaceStart.getTime();
console.log(`quickSortInPlace 정렬 시간 : ${quickSortInPlaceTime}`);

console.log(
  `${quickSortResult.every((it, idx) => it === quickSortInPlaceResult[idx])}`
);
