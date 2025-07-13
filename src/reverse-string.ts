function reverseString(str) {
  const splitString = str.split("");
  let reversedString = "";

  for (let i = splitString.length - 1; i >= 0; i--) {
    reversedString += splitString[i];
  }

  console.log({ reversedString });
  return reversedString;
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  const splitString = str.split("");

  const reverseString = (index) => {
    if (index >= 0) {
      return splitString[index] + reverseString(index - 1);
    }
    return "";
  };

  const reversedString = reverseString(splitString.length - 1);

  console.log({ reversedString });
  return reversedString;
}

reverseStringRecursive("yoyo master");
