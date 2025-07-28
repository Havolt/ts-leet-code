function backspaceCompare(s: string, t: string): boolean {
  const BACKSPACE_SYMBOL = "#";
  let storedBackspaces = 0;

  const generateCleanString = (originalString) => {
    storedBackspaces = 0;
    let cleanString = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
      if (originalString[i] === BACKSPACE_SYMBOL) {
        storedBackspaces++;
      } else if (storedBackspaces > 0) {
        storedBackspaces--;
      } else {
        cleanString += originalString[i];
      }
    }
    return cleanString;
  };

  const sCleaned = generateCleanString(s);
  const tCleaned = generateCleanString(t);

  console.log({ sCleaned }, { tCleaned });

  return sCleaned === tCleaned;
}

// backspaceCompare("ab##", "c#d#");
// backspaceCompare("ab#c", "ad#c");
backspaceCompare("a##c", "#a#c");
