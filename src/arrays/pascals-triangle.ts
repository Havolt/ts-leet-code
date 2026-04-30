function generate(numRows: number): number[][] {
  const fullRows = [[1]];
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return fullRows;
  }
  fullRows.push([1, 1]);
  for (let i = 1; i < numRows - 1; i++) {
    const newRow = [...fullRows[i]];
    // Even
    if (i % 2 === 0) {
      const middlePos = Math.floor(newRow.length / 2);
      newRow.splice(middlePos + 1, 0, newRow[middlePos]);
    } // Odd
    else {
      const middleLeftPos = newRow.length / 2 - 1;
      newRow.splice(middleLeftPos + 1, 0, newRow[middleLeftPos] + 1);
    }
    for (let j = 1; j < newRow.length - 1; j++) {
      newRow[j]++;
    }
    fullRows.push(newRow);
  }

  console.log(fullRows);

  return fullRows;
}

generate(10);
