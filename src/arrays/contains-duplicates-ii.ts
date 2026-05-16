function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numsHash: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (typeof numsHash[num] === typeof undefined) {
      numsHash[num] = i + 1;
    } else {
      const storedPos = numsHash[num];
      const currentPos = i + 1;

      // console.log({ storedPos });
      // console.log({ currentPos });
      if (currentPos - storedPos <= k) {
        return true;
      } else {
        numsHash[num] = i + 1;
      }
    }
  }

  // console.log({ numsHash });
  return false;
}

containsNearbyDuplicate([2, 4, 5, 2, 7, 2], 3);
