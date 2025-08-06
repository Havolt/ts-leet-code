/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const singleArrLastIndex = matrix[0].length - 1;
  let totalLength = 0;

  for (const array of matrix) {
    totalLength += array.length;
  }
  console.log(matrix);
  console.log(totalLength);
  // Items need to move 90 degrees clockwise
  // Items towards the center move less than outside
  let indentLevel = 0;

  const getJumpPointer = (currentLocation, arrayLength) => {
    const boxSize = (arrayLength - 1) * 4;
    let jump = currentLocation + arrayLength - 1 - indentLevel;
    if (jump > boxSize) {
      jump -= boxSize;
    }

    return jump;
  };

  const jumpTranslater = (rawPosition) => {
    // ! Translate the jump pointer into a position based on the current indented square
    return { x: null, y: null };
  };

  // This is a square so we need to move things four times
  for (let i = 0; i < matrix[0].length - 1; i++) {
    let numberStore = null;
    const jumpPointer = getJumpPointer(8, matrix[0].length);

    // !implment the jumpTranslater
    const translatedPointer = jumpTranslater(jumpPointer);
    console.log(jumpPointer);
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);

// rotate([
//   [5, 1, 9, 11, 2, 1],
//   [2, 4, 8, 10, 7, 8],
//   [6, 3, 6, 7, 5, 4],
//   [5, 9, 5, 4, 3, 2],
//   [3, 4, 7, 5, 3, 2],
//   [1, 3, 8, 7, 3, 2],
// ]);
