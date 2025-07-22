function search(nums: number[], target: number): number {
  const doSearch = (nums, target, index) => {
    if (nums.length === 0) {
      return -1;
    }
    const middleIndex = Math.floor((nums.length - 1) / 2);
    const middleNum = nums[middleIndex];
    if (target === middleNum) {
      return index + middleIndex;
    } else if (target < middleNum) {
      return doSearch(nums.slice(0, middleIndex), target, index);
    } else {
      return doSearch(
        nums.slice(middleIndex + 1),
        target,
        index + middleIndex + 1
      );
    }
  };

  return doSearch(nums, target, 0);
}

console.log(search([-1, 0, 3, 5, 9, 12], 1));
