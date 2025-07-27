function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  const mainArrLength = original.length;
  const newArr: number[][] = [];
  if (m === 1 && n === 1 && mainArrLength === 1) {
    return [original];
  }
  if (mainArrLength / m / n !== 1) {
    return [];
  }

  for (let i = 0; i < mainArrLength; i += n) {
    newArr.push(original.slice(i, i + n));
  }

  return newArr;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 2, 4, 5], 1, 1));
console.log(construct2DArray([1, 2, 4, 5], 1, 4));
console.log(construct2DArray([1, 2, 4, 5], 4, 1));
