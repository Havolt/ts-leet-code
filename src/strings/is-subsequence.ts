function isSubsequence(s: string, t: string): boolean {
  const sArr = s.split("");
  const tArr = t.split("");

  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < sArr.length && tPointer < tArr.length) {
    if (sArr[sPointer] === tArr[tPointer]) {
      sPointer++;
      tPointer++;
    } else {
      tPointer++;
    }
  }

  return sPointer >= sArr.length;
}

isSubsequence("abc", "ahbgdc");
