function isValid(s: string): boolean {
  // An input string is valid if:
  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.
  // Every close bracket has a corresponding open bracket of the same type.

  const splitString = s.split("");

  // Can't be odd if we're matching
  if (splitString.length % 2 !== 0) return false;

  //   Use left as key and right as val
  const paranthesis = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  //   Store unmatched paranthesis
  const pChest: string[] = [];

  //   Check the whole array
  for (let i = 0; i < splitString.length; i++) {
    if (i === 0) {
      pChest.push(splitString[i]);
    } else if (splitString[i] === paranthesis[pChest[pChest.length - 1]]) {
      pChest.pop();
    } else {
      pChest.push(splitString[i]);
    }
  }

  //   We need to look through whole array
  // When we get an opening bracket we need to find closing bracket (if it exists)
  // If the next item is not a closing bracket then we need to check for its closing bracket next
  // Once a closing bracket is found then can mark it done

  return pChest.length === 0;
}

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");
