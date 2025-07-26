const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let swapOccurred = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapOccurred = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    if (!swapOccurred) {
      break;
    }
  }

  return array;
}

bubbleSort(numbers);
console.log(numbers);
