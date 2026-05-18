/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (n: number): number => {
  if (n > 6) {
    return -1;
  } else if (n < 6) {
    return 1;
  } else {
    return 0;
  }
};

function guessNumber(n: number): number {
  let left = 1;
  let right = n;
  let currentGuess = Math.floor(right / 2);

  //   while(guess(currentGuess) !== 0) {

  //   }

  console.log({ currentGuess });

  return 0;
}

guessNumber(10);
