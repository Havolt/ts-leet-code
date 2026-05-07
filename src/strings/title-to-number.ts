function titleToNumber(columnTitle: string): number {
  const columnSplits = columnTitle.split("");
  const COLUMN_MULTIPLE = 26;
  let currentMultiplier = 1;
  let tally = 0;

  // Each column is a multiple of the previous
  // In A|B|C when C overflows B goes up

  for (let i = columnSplits.length - 1; i >= 0; i--) {
    const charBaseValue = columnSplits[i].charCodeAt(0) - 64;

    tally += charBaseValue * currentMultiplier;

    currentMultiplier *= COLUMN_MULTIPLE;
  }

  return 1;
}

titleToNumber("A");
titleToNumber("AB");
titleToNumber("ZY");
