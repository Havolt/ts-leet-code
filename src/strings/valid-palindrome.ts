function isPalindrome(s: string): boolean {
  const split = s.split("").filter((character) => {
    const characterCode = character.toLocaleLowerCase().charCodeAt(0);
    if (characterCode >= 97 && characterCode <= 122) {
      return true;
    }
    if (!isNaN(+character) && character !== " ") {
      return true;
    }
  });
  let leftPointer = 0;
  let rightPointer = split.length - 1;

  if (split.length === 0 || split.length === 1) {
    return true;
  }

  console.log({ split });

  while (leftPointer < rightPointer) {
    const leftLetter = split[leftPointer].toLocaleLowerCase();
    const rightLetter = split[rightPointer].toLocaleLowerCase();
    if (leftLetter === rightLetter) {
      leftPointer++;
      rightPointer--;
    } else {
      return false;
    }
  }
  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("!a!");

isPalindrome("0vv0");
