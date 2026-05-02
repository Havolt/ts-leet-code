function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1 || x === 2 || x === 3) {
    return 1;
  }

  const maxVal = Math.floor(x / 2) + 2;
  const minVal = 2;
  const currVal = Math.floor((maxVal - minVal) / 2);

  const getRoot = (
    min: number,
    max: number,
    curr: number,
    prev: number | null,
  ) => {
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

    if (curr === prev) {
      return curr;
    }

    const halfwayPoint = Math.floor((newMax - newMin) / 2);

    console.log({ halfwayPoint });

    const nextJump = curr + halfwayPoint * jumpDirection;

    console.log({ nextJump });

    console.log(newMin, newMax, nextJump);

    if (newMin === newMax) {
      return curr;
    }

    return getRoot(newMin, newMax, nextJump, curr);
  };

  const squareRoot = getRoot(minVal, maxVal, currVal, null);

  console.log({ squareRoot });

  return 0;
}

mySqrt(22);
