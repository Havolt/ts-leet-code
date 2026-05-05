function isPalindrome(s: string): boolean {
  const split = s.split("").filter((character) => {
    const characterCode = character.toLocaleLowerCase().charCodeAt(0);
    if (characterCode >= 97 && characterCode <= 122) {
      return character.toLocaleLowerCase;
    }
  });
  //   const useMeeting = split.length % 2 !== 0; // Count character where pointers meet?
  let leftPointer = 0;
  let rightPointer = split.length - 1;

  // Pseudo code for later
  // Check left and right match
  // Increment/decrement by one each time
  // If pointers land on same position check it and return
  // If left pointer goes further than right pointer then dont count this check

  console.log(split);

  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
