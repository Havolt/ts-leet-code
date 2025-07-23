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

  let nearestIndex = getNextGreatestLetter(letters, target);

  while (letters[nearestIndex] === target && nearestIndex < letters.length) {
    nearestIndex++;
  }

  if (nearestIndex < letters.length) {
    return letters[nearestIndex];
  } else {
    return letters[0];
  }
}

console.log(nextGreatestLetter(["a", "b", "c", "f", "j"], "b"));
