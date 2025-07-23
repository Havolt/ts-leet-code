function nextGreatestLetter(letters: string[], target: string): string {
  if (letters.length === 0) {
    return "";
  }
  const targetCode = target.charCodeAt(0);

  const getNextGreatestLetter = () => {
    const middleLetterIndex = Math.floor((letters.length - 1) / 2);
    const middleLetter = letters[middleLetterIndex];
    const middleLetterCode = middleLetter.charCodeAt(0);

    console.log(middleLetter);
    console.log({ middleLetterCode });
    console.log({ targetCode });
    if (middleLetter === target) {
      console.log("target found");
      return middleLetter;
    } else if (targetCode < middleLetterCode) {
      return nextGreatestLetter(letters.slice(0, middleLetterIndex), target);
    } else {
      return nextGreatestLetter(letters.slice(middleLetterIndex + 1), target);
    }
  };

  return getNextGreatestLetter() || letters[0];
}

nextGreatestLetter(["c", "f", "j"], "c");
