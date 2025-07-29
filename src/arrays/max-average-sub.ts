function findMaxAverage(nums: number[], k: number): number {
  let overallPosition = 0;
  let largestTally: number | null = null;

  while (overallPosition <= nums.length - k) {
    const currAverage =
      nums.slice(overallPosition, overallPosition + k).reduce((a, b) => a + b) /
      k;

    if (largestTally === null || currAverage > largestTally) {
      largestTally = currAverage;
    }

    overallPosition++;
  }

  console.log(largestTally);

  return largestTally!;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
