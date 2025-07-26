function gridGame(grid: number[][]): number {
  const firstRow = grid[0];
  const secondRow = grid[1];

  // First robot wants to make sure second robot collects as few points as possible
  // Second robot wants to collect as many remaining points as possible
  for (let i = 0; i < firstRow.length; i++) {
    console.log(firstRow[i]);
    console.log(secondRow[i]);
    console.log("---");
  }

  return 0;
}

// gridGame([
//   [2, 5, 4],
//   [1, 5, 1],
// ]);
// gridGame([
//   [3, 3, 1],
//   [8, 5, 2],
// ]);
// gridGame([
//   [1, 3, 1, 15],
//   [1, 3, 3, 1],
// ]);
gridGame([
  [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
  [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
]);
