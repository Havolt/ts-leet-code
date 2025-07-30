function productExceptSelf(nums: number[]): number[] {
  const prefixArr: number[] = [];
  const suffixArr: number[] = [];
  const productArr: number[] = [];

  // Make prefix arr
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixArr[i] = nums[i];
    } else {
      prefixArr[i] = nums[i] * prefixArr[i - 1];
    }
  }
  // Make a suffix arr
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffixArr[i] = nums[nums.length - 1];
    } else {
      suffixArr[i] = nums[i] * suffixArr[i + 1];
    }
  }

  productArr[0] = suffixArr[1];
  productArr[nums.length - 1] = prefixArr[nums.length - 2];

  for (let i = 1; i < nums.length - 1; i++) {
    productArr[i] = prefixArr[i - 1] * suffixArr[i + 1];
  }

  //   console.log(prefixArr);
  //   console.log(suffixArr);
  //   console.log(productArr);
  return productArr;
}

productExceptSelf([1, 2, 3, 4]);
productExceptSelf([1, 2, 3, 4, 5]);
