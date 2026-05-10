function addDigits(num: number): number {
  let currentSumSplit: string[] = num.toString().split("");

  while (currentSumSplit.length > 1) {
    console.log("here");
    const total = currentSumSplit.reduce((tally, currentVal) => {
      return tally + +currentVal;
    }, 0);

    console.log({ total });
    currentSumSplit = total.toString().split("");
  }

  return +currentSumSplit;
}

addDigits(38);
