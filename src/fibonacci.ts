// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {}

// We need to keep tally of what number we are on and also the last two numbers.
// Both numbers get added together to make new right number
// Left number is the previous right number
function fibonacciRecursive(n: number): number {
  // Exit early
  if (n < 2) {
    console.log(n);
    return n;
  }

  const getFibonacci = (leftNum: number, rightNum: number, limit: number) => {
    if (limit > 0) {
      return getFibonacci(rightNum, leftNum + rightNum, limit - 1);
    }
    return rightNum;
  };

  const fibNum = getFibonacci(1, 1, n - 2);

  console.log(fibNum);
  return fibNum;
}

// fibonacciIterative(6)
fibonacciRecursive(12);
