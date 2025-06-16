function gridGame(grid: number[][]): number {
  // Can only move right or down
  const getOptimumPath = (grid): number => {
    const firstRow: number[] = [...grid[0]];
    const secondRow: number[] = [...grid[1]];

    const rowOnePotential: number[] = [];
    const rowTwoPotential: number[] = [];

    const setPotentialArrays = () => {
      let counter = 0;

      [...firstRow].reverse().forEach((value) => {
        counter += value;
        rowOnePotential.unshift(counter);
      });

      counter = 0;

      [...secondRow].reverse().forEach((value) => {
        counter += value;
        rowTwoPotential.unshift(counter);
      });
    };

    const smartNavigation = (overwriteValues = false) => {
      let moveDownIndex = -1;

      for (let i = 0; i < rowOnePotential.length - 1; i++) {
        // console.log(rowTwoPotential[i], rowOnePotential[i + 1]);
        if (rowTwoPotential[i] > rowOnePotential[i + 1]) {
          moveDownIndex = i;
        }
      }

      if (moveDownIndex === -1) {
        moveDownIndex = firstRow.length - 1;
      }

      if (overwriteValues) {
        for (let i = 0; i < firstRow.length; i++) {
          if (moveDownIndex === i) {
            firstRow[i] = 0;
            secondRow[i] = 0;
          } else if (i < moveDownIndex) {
            firstRow[i] = 0;
          } else {
            secondRow[i] = 0;
          }
        }
      } else {
        let secondCounter = 0;
        for (let i = 0; i < firstRow.length; i++) {
          //  console.log(firstRow[i]);
          //  console.log(firstRow[i]);
          if (moveDownIndex === i) {
            secondCounter += firstRow[i];
            secondCounter += secondRow[i];
          } else if (i < moveDownIndex) {
            secondCounter += firstRow[i];
          } else {
            secondCounter += secondRow[i];
          }
          //  console.log(secondCounter);
        }
        console.log({ secondCounter });
        //   console.log(secondCounter);
      }

      // console.log(moveDownIndex);
    };

    //  console.log(firstRow);
    //  console.log(secondRow);

    setPotentialArrays();

    smartNavigation(true);

    setPotentialArrays();

    smartNavigation();

    //  console.log(rowOnePotential);
    //  console.log(rowTwoPotential);

    //  console.log({ firstRow });
    //  console.log({ secondRow });

    //  console.log(grid);

    //  firstRow.reduce();
    return 0;
  };

  const optimumPath = getOptimumPath(grid);
  return optimumPath;
}

gridGame([
  [2, 5, 4],
  [1, 5, 1],
]);
gridGame([
  [3, 3, 1],
  [8, 5, 2],
]);
gridGame([
  [1, 3, 1, 15],
  [1, 3, 3, 1],
]);
