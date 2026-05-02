function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1 || x === 2 || x === 3) {
    return 1;
  }

  const maxVal = Math.floor(x / 2) + 2;
  const minVal = 2;

  const getRoot = (min: number, max: number, curr: number) => {
    const currSquare = curr * curr;

    console.log({ min, max, curr });

    let newMin = min;
    let newMax = max;
    let jumpDirection = null;

    if (currSquare === x) {
      return curr;
    } else if (currSquare > x) {
      console.log("Im larger", { currSquare });
      newMax = curr;
      jumpDirection = -1;
    } else {
      console.log("im smaller", { currSquare });
      newMin = curr;
      jumpDirection = 1;
    }

    const nextJump = curr + Math.floor((newMax - newMin) / 2) * jumpDirection;

    console.log({ nextJump });

    console.log(newMin, newMax, nextJump);

    //  getRoot(newMax, newMin, (newMax - newMin) / 2);
  };

  getRoot(minVal, maxVal, (maxVal - minVal) / 2);

  // We need to divide number (x) in half and ter the floor
  // We then check what that number (n) is multiplied by itself
  // If (n) matches (x) then return the root of (n)
  // If the square of (n) is higher than (x) then get the current jump to (n) and divide it in half, subtract this from (n) to get (o)
  // If the square of (n) is lower than (x) then get the current jump to (n) and divide it in half, subtract this from (n)
  // Recall the function with the new (o) and the jump start over

  return 0;
}

mySqrt(100);
