function isHappy(n: number): boolean {
  type SeenNumbers = {
    [key: string]: true;
  };

  let currNum = n;

  //   let lastResort = 0;

  const seenNumbers: SeenNumbers = {};

  while (currNum !== 1 /* && lastResort < 100 */) {
    if (seenNumbers[currNum]) {
      return false;
    }
    const currNumSplit = currNum.toString().split("");
    seenNumbers[currNum] = true;
    let tally = 0;
    for (const num of currNumSplit) {
      tally += +num * +num;
    }
    console.log({ currNumSplit });
    console.log({ tally });
    currNum = tally;
    //  lastResort++;
  }

  return true;
}

isHappy(200);
