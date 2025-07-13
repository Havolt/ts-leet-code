// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number): number {
  const multiplyNums = (number) => {
    if (number > 0) {
      return multiplyNums(number - 1) * number;
    } else {
      return 1;
    }
  };

  const total = multiplyNums(number);

  //code here
  console.log(total);
  return total;
}

function findFactorialIterative(number): number {
  let total = 1;

  for (let i = number; i > 0; i--) {
    total *= i;
  }
  console.log(total);
  return total;
}

// findFactorialRecursive(5);
findFactorialIterative(10);
