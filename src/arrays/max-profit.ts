function maxProfit(prices: number[]): number {
  // We need the greatest difference between an early number and a later number

  let currentLowestVal = prices[0];
  let currentBestDiff = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentVal = prices[i];
    const currentDiff = currentVal - currentLowestVal;
    if (currentDiff > currentBestDiff) {
      currentBestDiff = currentDiff;
    }

    if (currentLowestVal > currentVal) {
      currentLowestVal = currentVal;
    }
  }

  console.log({ currentBestDiff });

  return currentBestDiff;
}

maxProfit([7, 1, 5, 3, 6, 4]);
