/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zerosFound = 0;
  let currentPointer = 0;

  for (const num of nums) {
    if (num === 0) {
      zerosFound++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      console.log(nums[i]);
      nums[currentPointer] = nums[i];
      currentPointer++;
    }
  }

  for (let i = nums.length - zerosFound; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
}

// moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 0, 3, 12]);
