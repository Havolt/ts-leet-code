function lengthOfLastWord(s: string): number {
  const trimmedStrings: string[] = s.trim().split(/\W{1,}/);

  return trimmedStrings[trimmedStrings.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
