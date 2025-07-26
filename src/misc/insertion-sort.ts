const numbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(numArr: number[]): number[] {
  for (let i = 1; i < numArr.length; i++) {
    const currI = numArr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (numArr[j] > currI) {
        numArr[j + 1] = numArr[j];
      }

      if (numArr[j] < currI) {
        numArr[j + 1] = currI;
        break;
      }

      if (j === 0) {
        numArr[0] = currI;
      }
    }
  }

  console.log(numArr);
  return numArr;
}

insertionSort(numbers);
