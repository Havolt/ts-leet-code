function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1 || x === 2 || x === 3) {
    return 1;
  }

  const maxVal = Math.floor(x / 2) + 2;
  const minVal = 2;
  const currVal = minVal + Math.floor((maxVal - minVal) / 2);

  const getRoot = (min: number, max: number, currentRoot: number) => {
    // console.log("-------------------");
    // console.log({ min, max, currentRoot });
    const currentSquare = currentRoot * currentRoot;
    let nextIterationMin = min;
    let nextIterationMax = max;

    // console.log({ currentSquare });

    if (currentSquare === x) {
      return currentRoot;
    } else if (currentSquare > x) {
      // console.log("current square is greater than x");
      nextIterationMax = currentRoot;
    } else if (currentSquare < x) {
      // console.log("current square is less than x");
      nextIterationMin = currentRoot;
    }

    if (nextIterationMin === nextIterationMax) {
      return nextIterationMin;
    }

    if (nextIterationMax - nextIterationMin === 1) {
      const nextMaxSquare = nextIterationMax * nextIterationMax;

      if (nextMaxSquare <= x) {
        return nextIterationMax;
      } else {
        return nextIterationMin;
      }
    }

    const differenceMiddle = Math.floor(
      (nextIterationMax - nextIterationMin) / 2,
    );

    // console.log("---------");
    // console.log({ nextIterationMax });
    // console.log({ nextIterationMin });
    // console.log("----------");

    if (differenceMiddle === 0) {
      // console.log({ min });
      return min;
    }

    // console.log({ differenceMiddle });

    const nextPosition = differenceMiddle + nextIterationMin;

    console.log({ nextIterationMax, nextIterationMin, nextPosition });

    return getRoot(nextIterationMin, nextIterationMax, nextPosition);
  };

  // console.log({ currVal });

  const squareRoot = getRoot(minVal, maxVal, currVal);

  console.log({ squareRoot });

  return squareRoot;
}

mySqrt(225);
