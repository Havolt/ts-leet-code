function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  } else if (nums.length === 1) {
    return [nums[0].toString()];
  }

  const allSets = [];
  let prevNum = nums[0];
  let currentSet = [prevNum];

  const getFirstLast = () => {
    if (currentSet.length === 1) {
      return currentSet;
    } else {
      return [currentSet[0], currentSet[currentSet.length - 1]];
    }
  };

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum + -1 * prevNum === 1) {
      currentSet.push(currentNum);
      prevNum = currentNum;
      continue;
    }

    allSets.push(getFirstLast());

    currentSet = [currentNum];
    prevNum = currentNum;
  }

  allSets.push(getFirstLast());

  console.log(allSets);

  const textVersion = allSets.map((pair) => {
    if (pair.length === 1) {
      return pair[0].toString();
    } else {
      return `${pair[0]}->${pair[1]}`;
    }
  });

  console.log(textVersion);

  return textVersion;
}

summaryRanges([-5, -4, -3, -1, 0, 1, 2, 4, 5, 7, 8]);
