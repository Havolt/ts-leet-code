function romanToInt(s: string): number {
  type RomanDictionary = {
    [key: string]: number;
  };
  // Need to set values of roman integers
  // Smaller numbers to the right of a large number are to be removed
  // Smaller numbers to the right of a number are to be added
  const romanDictionary: RomanDictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const splitRoman = s.split("");
  const splitNumbers: number[] = [];

  //   Check if the letters to the right are larger if larger is found then break off
  for (let i = 0; i < splitRoman.length; i++) {
    const currentNum = romanDictionary[splitRoman[i]];
    const splitNumLength = splitNumbers.length;
    //  console.log(currentNum, splitNumbers[splitNumLength - 1]);
    //  Set first number
    if (splitNumLength === 0) {
      splitNumbers.push(currentNum);
      // If last number was the same or multiple of two then add to last item
    } else if (
      splitNumbers[splitNumLength - 1] === currentNum ||
      splitNumbers[splitNumLength - 1] === currentNum * 2
    ) {
      splitNumbers[splitNumLength - 1] += currentNum;
    } else {
      splitNumbers.push(currentNum);
    }
  }

  //   Loop through splitNumbers and do arithmetic on it
  for (let i = splitNumbers.length - 1; i >= 0; i--) {
    console.log(splitNumbers[i]);
  }

  console.log(splitNumbers);

  return 0;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
