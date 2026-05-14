function canConstruct(ransomNote: string, magazine: string): boolean {
  //   if (ransomNote.length > magazine.length) {
  //     return false;
  //   }

  const magazineHash: { [key: string]: number } = {};

  magazine.split("").forEach((letter) => {
    if (!magazineHash[letter]) {
      magazineHash[letter] = 0;
    }
    magazineHash[letter]++;
  });

  for (let i = 0; i < ransomNote.length; i++) {
    const currentLetter = ransomNote[i];
    if (magazineHash[currentLetter]) {
      console.log({ [currentLetter]: magazineHash[currentLetter] });
      magazineHash[currentLetter]--;
    } else {
      return false;
    }
  }

  return true;
}

canConstruct("aa", "aab");
