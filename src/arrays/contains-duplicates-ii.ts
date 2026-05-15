function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numsHash: { [key: string]: number } = {};
  const duplicatePositions: { [key: string]: number[] } = {};

  nums.forEach((num, index) => {
    if (typeof numsHash[num] === typeof undefined) {
      numsHash[num] = index;
    } else if (typeof duplicatePositions[num] === typeof undefined) {
      duplicatePositions[num] = [numsHash[num], index];
    } else {
      duplicatePositions[num].push(index);
    }
  });

  console.log({ duplicatePositions });
  return true;
}

containsNearbyDuplicate([2, 4, 5, 2, 7, 2], 5);
