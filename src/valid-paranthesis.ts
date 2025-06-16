function isValid(s: string): boolean {
  // An input string is valid if:
  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.
  // Every close bracket has a corresponding open bracket of the same type.

  const splitString = s.split("");

  let mismatchFound = false;

  // Can't be odd if we're matching
  if (splitString.length % 2 !== 0) return false;

  //  Match first half to second half
  for (let i = 0; i < splitString.length / 2; i++) {
    const openingBracket = splitString[i];
    const closingBracket = splitString[splitString.length - 1 - i];
    if (
      (openingBracket === "(" && closingBracket !== ")") ||
      (openingBracket === "{" && closingBracket !== "}") ||
      (openingBracket === "[" && closingBracket !== "]")
    ) {
      mismatchFound = true;
      break;
    }
  }

  console.log(s);
  console.log(!mismatchFound);
  console.log("----");

  return !mismatchFound;
}

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");
