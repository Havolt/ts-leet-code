function generate(numRows: number): number[][] {
  const fullRows = [[1]];
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return fullRows;
  }
  fullRows.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    const newRow = [1];
    const prevRow = fullRows[i - 1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    newRow.push(1);
    fullRows.push(newRow);
  }

  return fullRows;
}

generate(10);
