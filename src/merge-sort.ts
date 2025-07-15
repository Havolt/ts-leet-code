const numbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let leftPointer = 0;
  let rightPointer = 0;
  const combinedArr: number[] = [];

  while (leftPointer < left.length || rightPointer < right.length) {
    const leftNum = left[leftPointer];
    const rightNum = right[rightPointer];
    let useLeftNum = true;

    if (leftNum === undefined || rightNum <= leftNum) {
      useLeftNum = false;
    }

    combinedArr.push(useLeftNum ? leftNum : rightNum);
    useLeftNum ? leftPointer++ : rightPointer++;
  }
  return combinedArr;
}

const answer = mergeSort(numbers);
console.log(answer);
