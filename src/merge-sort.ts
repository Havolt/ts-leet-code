const numbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  console.log(left);
  console.log(right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let leftPointer = 0;
  let rightPointer = 0;
  const combinedArr: number[] = [];

  while (leftPointer < left.length || rightPointer < right.length) {
    const leftNum = left[leftPointer];
    const rightNum = right[rightPointer];

    if (leftPointer >= left.length) {
      combinedArr.push(rightNum);
      rightPointer++;
      continue;
    } else if (rightPointer >= right.length) {
      combinedArr.push(leftNum);
      leftPointer++;
      continue;
    }

    if (leftNum <= rightNum) {
      combinedArr.push(leftNum);
      leftPointer++;
    } else {
      combinedArr.push(rightNum);
      rightPointer++;
    }
  }
  console.log(combinedArr);
  return combinedArr;
}

const answer = mergeSort(numbers);
console.log(answer);
