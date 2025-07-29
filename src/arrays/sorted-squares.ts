function sortedSquares(nums: number[]): number[] {
  const sortedArr: number[] = [];
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let insertIndex = nums.length - 1;

  while (insertIndex >= 0) {
    const leftNum = nums[leftPointer] * nums[leftPointer];
    const rightNum = nums[rightPointer] * nums[rightPointer];
    if (leftNum >= rightNum) {
      sortedArr[insertIndex] = leftNum;
      leftPointer++;
    } else {
      sortedArr[insertIndex] = rightNum;
      rightPointer--;
    }
    insertIndex--;
  }

  console.log(sortedArr);
  return [];
}

sortedSquares([-4, -1, 0, 3, 10]);
