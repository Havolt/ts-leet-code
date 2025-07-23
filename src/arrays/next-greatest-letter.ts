function nextGreatestLetter(letters: string[], target: string): string {
  const targetCode = target.charCodeAt(0);

  const getNextGreatestLetter = (letters, target, index = 0) => {
    if (letters.length === 0) {
      return index;
    }
    const middleLetterIndex = Math.floor((letters.length - 1) / 2);
    const middleLetter = letters[middleLetterIndex];
    const middleLetterCode = middleLetter.charCodeAt(0);

    if (middleLetterCode === targetCode) {
      return index + middleLetterIndex;
    } else if (targetCode < middleLetterCode) {
      return getNextGreatestLetter(
        letters.slice(0, middleLetterIndex),
        target,
        index
      );
    } else {
      return getNextGreatestLetter(
        letters.slice(middleLetterIndex + 1),
        target,
        index + middleLetterIndex + 1
      );
    }
  };

  let getNearestIndex = getNextGreatestLetter(letters, target);

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
