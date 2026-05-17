function wordPattern(pattern: string, s: string): boolean {
  const patternMatch: { [key: string]: string } = Object.create(null);
  const usedLetters: { [key: string]: boolean } = Object.create(null);

  const phrase = s.split(" ");

  if (phrase.length !== pattern.length) {
    console.log("false a");
    return false;
  }

  for (let i = 0; i < phrase.length; i++) {
    const word = phrase[i];
    const letter = pattern[i];
    console.log({ word, letter });
    console.log(patternMatch[word], usedLetters[letter]);
    if (!patternMatch[word] && !usedLetters[letter]) {
      // console.log({ word, letter });
      patternMatch[word] = letter;
      usedLetters[letter] = true;
    } else if (patternMatch[word] !== letter) {
      console.log(patternMatch, word);
      console.log("false b");
      return false;
    }
  }

  console.log({ patternMatch });

  console.log("true");

  return true;
}

wordPattern("abba", "dog constructor constructor dog");
