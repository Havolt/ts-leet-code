function addDigits(num: number): number {
  let currentSumSplit: string[] = num.toString().split("");

  while (currentSumSplit.length > 1) {
    const total = +currentSumSplit[0] + +currentSumSplit[1];
    currentSumSplit = total.toString().split("");
  }

  return +currentSumSplit;
}

addDigits(38);
