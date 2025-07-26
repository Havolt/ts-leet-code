const numbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numArr: number[]): number[] {
  for (let i = 0; i < numArr.length; i++) {
    let lowestNum: number | null = null;
    let lowestIndex: number | null = null;
    for (let j = i; j < numArr.length; j++) {
      if (lowestNum === null || numArr[j] < lowestNum) {
        lowestNum = numArr[j];
        lowestIndex = j;
      }
    }
    if (typeof lowestIndex === "number") {
      [numbers[i], numbers[lowestIndex]] = [numbers[lowestIndex], numbers[i]];
    }
  }

  console.log(numArr);
  return numArr;
}

selectionSort(numbers);
