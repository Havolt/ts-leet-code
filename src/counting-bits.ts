function countBits(n: number): number[] {
  const binaryRange = [
    65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8,
    4, 2, 1,
  ];
  const binaryRangeMax = binaryRange.length - 1;

  const checkNumbers = (currentNum, iAmount = 0, binaryRangePos = 0) => {
    if (currentNum >= binaryRange[binaryRangePos]) {
      iAmount++;
      currentNum -= binaryRange[binaryRangePos];
    }
    if (currentNum !== 0 && binaryRangePos + 1 <= binaryRangeMax) {
      return checkNumbers(currentNum, iAmount, binaryRangePos + 1);
    }

    return iAmount;
  };

  const outputArray: number[] = [];

  for (let i = 0; i <= n; i++) {
    let currentNum = i;

    outputArray.push(checkNumbers(currentNum));
  }

  console.log(outputArray);
  return outputArray;
}

countBits(20);
