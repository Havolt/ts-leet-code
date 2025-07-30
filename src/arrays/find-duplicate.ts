function findDuplicate(nums: number[]): number {
  console.log(nums);
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) {
      console.log(num);
      return num;
    } else {
      numSet.add(num);
    }
  }

  return -1;
}

findDuplicate([3, 1, 3, 4, 2]);
