function firstRecurringItem(numberArr: number[]): number | undefined {
  const seenNums = new Set();
  for (const number of numberArr) {
    if (seenNums.has(number)) {
      return number;
    }
    seenNums.add(number);
  }
  return undefined;
}

console.log(firstRecurringItem([2, 4, 7, 1, 2, 8, 4]));
console.log(firstRecurringItem([4, 7, 8]));
console.log(firstRecurringItem([4, 7, 8, 5, 2, 1, 1]));
console.log(firstRecurringItem([]));
