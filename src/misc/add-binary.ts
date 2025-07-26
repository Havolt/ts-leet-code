function addBinary(a: string, b: string): string {
  const splitA = a.split("");
  const splitB = b.split("");
  const aOriginalLength = splitA.length;
  const bOriginalLength = splitB.length;

  if (aOriginalLength < bOriginalLength) {
    while (splitA.length < splitB.length) {
      splitA.unshift("0");
    }
  } else if (bOriginalLength < aOriginalLength) {
    while (splitB.length < splitA.length) {
      splitB.unshift("0");
    }
  }

  const combinedArr: string[] = [...splitA];

  //   We need to get the last number and add the last number of splitB to it
  // If it is two then set item to 0 and add 1 to n-1
  // Then we need to check if n-1 is two if so we set it so zero and add one to n-1
  for (let i = combinedArr.length - 1; i >= 0; i--) {
    combinedArr[i] = (+combinedArr[i] + +splitB[i]).toString();
  }

  for (let i = combinedArr.length - 1; i >= 0; i--) {
    if (combinedArr[i] === "2" || combinedArr[i] === "3") {
      if (i === 0) {
        combinedArr.unshift("0");
        i = 1;
      }
      combinedArr[i - 1] = (+combinedArr[i - 1] + 1).toString();
      combinedArr[i] = combinedArr[i] === "2" ? "0" : "1";
    }
  }

  return combinedArr.join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
