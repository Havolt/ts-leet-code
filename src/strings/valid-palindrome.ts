function isPalindrome(s: string): boolean {
  const split = s.split("");
  let leftPointer = 0;
  let rightPointer = split.length - 1;

  const isAlphaNumeric = (character: string) => {
    const characterCode = character.charCodeAt(0);
    if (characterCode >= 97 && characterCode <= 122) {
      return true;
    }
    if (!isNaN(+character) && character !== " ") {
      return true;
    }
  };

  while (leftPointer < rightPointer) {
    const leftCharacter = split[leftPointer];
    const rightCharacter = split[rightPointer];

    const leftLowerCase = leftCharacter.toLocaleLowerCase();

    if (!isAlphaNumeric(leftLowerCase)) {
      leftPointer++;
      continue;
    }

    const rightLowerCase = rightCharacter.toLocaleLowerCase();

    if (!isAlphaNumeric(rightLowerCase)) {
      rightPointer--;
      continue;
    }

    if (leftLowerCase === rightLowerCase) {
      leftPointer++;
      rightPointer--;
    } else {
      return false;
    }
  }

  return true;
}

function _isPalindrome(s: string): boolean {
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

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("!a!"));

console.log(isPalindrome("0vv0"));
console.log(isPalindrome("0vv0"));
console.log(isPalindrome("0vv05"));
