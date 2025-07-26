function containsDuplicate(nums: number[]): boolean {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]]) {
      return true;
    } else {
      numMap[nums[i]] = 1;
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
containsDuplicate([5]);
containsDuplicate([]);
