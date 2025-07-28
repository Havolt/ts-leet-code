function majorityElement(nums: number[]): number {
  const numMap = new Map();
  const mostSeen = {
    num: -1,
    val: 0,
  };

  for (const num of nums) {
    console.log(num);
    const numData = numMap.get(num);
    if (numData) {
      console.log(num, numData);
      numMap.set(num, numData + 1);
      if (mostSeen.val < numData + 1) {
        mostSeen.num = num;
        mostSeen.val = numData + 1;
      }
      if (numData + 1 > nums.length / 2) {
        break;
      }
    } else {
      numMap.set(num, 1);
      if (mostSeen.val < 1) {
        mostSeen.num = num;
        mostSeen.val = 1;
      }
    }
  }

  console.log(mostSeen);

  return mostSeen.num;
}

majorityElement([1]);
