function twoSum(nums: number[], target: number): number[] {
  const seenNums = new Map();

  for (const [index, num] of nums.entries()) {
    const neededVal = target - num;
    const seenIndex = seenNums.get(neededVal);
    if (seenIndex !== undefined) {
      return [index, seenIndex];
    }
    seenNums.set(num, index);
  }
  return [];
}

twoSum([2, 7, 11, 15], 9);
