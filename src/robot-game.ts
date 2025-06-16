function gridGame(grid: number[][]): number {
  // Can only move right or down
  const getOptimumPath = (grid): number => {
    const firstRow = [...grid[0]];
    const secondRow = [...grid[1]];

    const rowOnePotential: number[] = [];
    const rowTwoPotential: number[] = [];

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

    console.log(rowOnePotential);
    console.log(rowTwoPotential);

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

    console.log(moveDownIndex);

    //  console.log(grid);

    //  firstRow.reduce();
    return 0;
  };

  const optimumPath = getOptimumPath(grid);
  return optimumPath;
}

// gridGame([
//   [2, 5, 4],
//   [1, 5, 1],
// ]);
// gridGame([
//   [3, 3, 1],
//   [8, 5, 2],
// ]);
gridGame([
  [1, 3, 1, 15],
  [1, 3, 3, 1],
]);
