function countBits(n: number): number[] {
  const initialArr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) {
      initialArr.push(initialArr[i / 2]);
    } else {
      initialArr.push(initialArr[i - 1] + 1);
    }
  }

  console.log(initialArr);
  return initialArr;
}

countBits(20);
