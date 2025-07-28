/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastNonZeroPosition = nums.length - 1;
  let counter = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j < lastNonZeroPosition; j++) {
        nums[j] = nums[j + 1];
      }
      nums[lastNonZeroPosition] = 0;
      lastNonZeroPosition--;
    } else if (nums[i] === 0) {
      lastNonZeroPosition--;
    }
  }
  console.log(counter);
  console.log(nums);
}

moveZeroes([0, 0, 1]);
