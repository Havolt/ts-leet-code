function strStr(haystack: string, needle: string): number {
  const splitHaystack = haystack.split("");
  const splitNeedle = needle.split("");

  let firstIndex = -1;

  //   loop through haystack
  for (let i = 0; i < splitHaystack.length; i++) {
    // loop through needle
    for (let j = 0; j < splitNeedle.length; j++) {
      if (splitHaystack[i + j] === splitNeedle[j]) {
      } else {
        break;
      }
      if (j === splitNeedle.length - 1) {
        firstIndex = i;
      }
    }
    if (firstIndex !== -1) {
      break;
    }
  }

  return firstIndex;
}

strStr("sadbutsad", "sad");
strStr("leetcode", "leeto");
strStr("abcdefg", "ef");
