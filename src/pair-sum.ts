const pairSum = (array: number[], desiredSum: number): number[][] => {
  const foundNums = {};
  const foundPairs: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    if (foundNums[array[i]]) {
      foundNums[array[i]]++;
    } else {
      foundNums[array[i]] = 1;
    }
  }

  // NOT GOOD AT ALL
  for (const number of array) {
    const partnerNum = desiredSum - +number;
    if (foundNums[number] && foundNums[partnerNum]) {
      if (number === partnerNum) {
        if (foundNums[partnerNum] < 2) {
          continue;
        }
        for (let j = 0; j < foundNums[partnerNum] - 1; j++) {
          //  console.log(foundNums[partnerNum]);
          foundPairs.push([+number, partnerNum]);
        }
        foundNums[partnerNum]--;
        continue;
      }
      foundPairs.push([+number, partnerNum]);
      foundNums[partnerNum]--;
    }
  }

  console.log(foundPairs);

  return [];
};

pairSum([0, 1, 2, 4, 4, 4, 4, 7, 8], 8);
