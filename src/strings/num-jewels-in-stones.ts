function numJewelsInStones(jewels: string, stones: string): number {
  const jewelSplit = jewels.split("");

  const jewelTypes: { [key: string]: boolean } = {};
  let counter = 0;

  jewelSplit.forEach((jewel) => {
    jewelTypes[jewel] = true;
  });

  for (let i = 0; i < stones.length; i++) {
    const currentStone = stones[i];
    if (jewelTypes[currentStone]) {
      counter++;
    }
  }

  console.log({ jewelTypes });
  console.log({ counter });

  return counter;
}

numJewelsInStones("aACC", "aAAbbbbc");
