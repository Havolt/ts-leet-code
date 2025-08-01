function findDuplicates(nums: number[]): number[] {
  const duplicateArr: number[] = [];
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i]);
    let valueIndex = nums[value - 1];
    if (valueIndex > 0) {
      nums[value - 1] = valueIndex * -1;
    } else {
      duplicateArr.push(value);
    }
  }
  console.log(nums);
  console.log(duplicateArr);
  return duplicateArr;
}

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
