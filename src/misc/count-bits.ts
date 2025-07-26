function countBits(decimalNumber): number[] {
  // Bits are binary math. We can try diving it in two over and over to get the number
  // Or should we find the groups we need to the size of the number and get it

  if (decimalNumber < 2) {
    console.log([decimalNumber]);
    return [decimalNumber];
  }

  const bits: number[] = [];

  // Recursive function to setup the binary array
  const addBinaryCol = (currentBinaryMultiple = 1, total = 0) => {
    bits.push(0);
    const nextBinaryMultiple = currentBinaryMultiple * 2;
    const tally = total + currentBinaryMultiple;

    if (tally < decimalNumber) {
      addBinaryCol(nextBinaryMultiple, tally);
    }
  };

  addBinaryCol();

  let tempDecimalNumber = decimalNumber;

  const bitsArrLength = bits.length - 1;
  let counter = 0;

  for (let index = bitsArrLength; index >= 0; index--) {
    const colValue = Math.pow(2, index);
    if (tempDecimalNumber - colValue >= 0) {
      tempDecimalNumber -= colValue;
      bits[counter] = 1;
      if (tempDecimalNumber === 0) {
        break;
      }
    }
    counter++;
  }

  console.log({ bits });

  return bits;
}

// countBits(0);
// countBits(1);
// countBits(2);
// countBits(5);
// countBits(8);
// countBits(15);
// countBits(255);
