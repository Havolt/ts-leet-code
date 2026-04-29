function longestPalindrome(s: string): string {
  let pointerA = 0;
  let pointerB = 1;

  const splitString = s.split("");
  const leftWordArr = [];
  const rightWordArr = [];
  const finalWordArr = [];

  // Positions where the left and right characters match
  const matchFound = [];

  for (let i = 1; i < splitString.length - 1; i++) {
    if (splitString[i - 1] === splitString[i + 1]) {
      matchFound.push(i);
    }
  }

  console.log(matchFound);

  return "";
}

longestPalindrome("babad");
