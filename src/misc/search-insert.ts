function searchInsert(nums: number[], target: number): number {
  if (target < nums[0]) {
    return 0;
  }
  const splitArr = (numArr: number[], index: number) => {
    if (numArr.length === 1) {
      if (numArr[0] === target || numArr[0] > target) {
        return index;
      } else {
        return index + 1;
      }
    }
    const halfwayPoint = Math.floor(numArr.length / 2);
    const middleNum = numArr[halfwayPoint];

    if (middleNum === target) {
      return halfwayPoint + index;
    } else if (middleNum > target) {
      return splitArr(numArr.slice(0, Math.floor(halfwayPoint)), index);
    } else {
      return splitArr(numArr.slice(halfwayPoint), index + halfwayPoint);
    }
  };

  return splitArr(nums, 0);
}

console.log(searchInsert([1, 3, 5], 4));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5], 3));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6, 7], 7));
console.log(searchInsert([2, 7, 8, 9, 10], 9));
