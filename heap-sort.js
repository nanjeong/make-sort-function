const swap = (a, b) => {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
};

const heapify = (array) => {
  const lastParent =
    (array.length - 1) % 2 === 0
      ? (array.length - 1 - 2) / 2
      : (array.length - 1 - 1) / 2;

  for (let parent = 0; parent <= lastParent; parent++) {
    const child1 = 2 * parent + 1;
    const child2 = 2 * parent + 2;
    const biggerChild =
      array[child2] === undefined || array[child1] > array[child2]
        ? child1
        : child2;

    if (array[parent] < array[biggerChild]) {
      [array[parent], array[biggerChild]] = swap(
        array[parent],
        array[biggerChild]
      );

      while (parent > 0) {
        const grandParent =
          parent % 2 === 0 ? (parent - 2) / 2 : (parent - 1) / 2;

        if (array[parent] > array[grandParent]) {
          [array[grandParent], array[parent]] = swap(
            array[grandParent],
            array[parent]
          );
        } else {
          break;
        }
      }
    }
  }

  return array;
};

const heapSort = (array) => {
  let heap = heapify(array);

  for (let i = heap.length - 1; i > 0; i--) {
    [heap[0], heap[i]] = swap(heap[0], heap[i]);
    heap = [...heapify(heap.slice(0, i)), ...heap.slice(i)];
  }

  return heap;
};

module.exports = { heapSort };
