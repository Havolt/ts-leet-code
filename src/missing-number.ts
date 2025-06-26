function missingNumber(nums: number[]): number {
  let totalNum = 0;
  let expectedTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    totalNum += nums[i];
    expectedTotal += i;
  }

  expectedTotal += nums.length;

  return expectedTotal - totalNum;
}

missingNumber([3, 0, 1]);
missingNumber([0, 1]);
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
missingNumber([3, 4, 0, 2, 5, 6]);
