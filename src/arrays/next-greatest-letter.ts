function nextGreatestLetter(letters: string[], target: string): string {
  const letterCodes = letters.map((letter) => letter.charCodeAt(0));
  const targetCode = target.charCodeAt(0);

  const getNextGreatestLetter = (letterCodes, target, index = 0) => {
    if (letterCodes.length === 0) {
      return index;
    }
    const middleLetterIndex = Math.floor((letterCodes.length - 1) / 2);
    const middleLetter = letterCodes[middleLetterIndex];

    if (middleLetter === targetCode) {
      return index + middleLetterIndex;
    } else if (targetCode < middleLetter) {
      return getNextGreatestLetter(
        letterCodes.slice(0, middleLetterIndex),
        target,
        index
      );
    } else {
      return getNextGreatestLetter(
        letterCodes.slice(middleLetterIndex + 1),
        target,
        index + middleLetterIndex + 1
      );
    }
  };

  let getNearestIndex = getNextGreatestLetter(letterCodes, target);

  while (
    letters[getNearestIndex] === target &&
    getNearestIndex <= letters.length
  ) {
    getNearestIndex++;
  }

  if (getNearestIndex < letters.length) {
    return letters[getNearestIndex];
  } else {
    return letters[0];
  }
}

console.log(nextGreatestLetter(["a", "b", "c", "f", "j"], "j"));
