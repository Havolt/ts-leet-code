function isIsomorphic(s: string, t: string): boolean {
  type CharacterMap = {
    [key: string]: string;
  };

  const characterMap: CharacterMap = {};

  const usedCharactersT = new Set<string>();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (!characterMap[currChar]) {
      if (usedCharactersT.has(t[i])) {
        return false;
      }
      characterMap[currChar] = t[i];
      usedCharactersT.add(t[i]);
    } else {
      if (characterMap[currChar] !== t[i]) {
        return false;
      }
    }
  }
  return true;
}

isIsomorphic("eggrr", "addvv");
