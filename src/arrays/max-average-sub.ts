function findMaxAverage(nums: number[], k: number): number {
  let overallPosition = 0;
  let currentTally = nums.slice(0, k).reduce((a, b) => a + b);
  let largestAverage: number = currentTally / k;

  while (overallPosition < nums.length - k) {
    currentTally -= nums[overallPosition];
    overallPosition++;
    currentTally += nums[overallPosition + k - 1];
    const currAverage = currentTally / k;
    if (currAverage > largestAverage) {
      largestAverage = currAverage;
    }
  }

  console.log(largestAverage);

  return largestAverage;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
