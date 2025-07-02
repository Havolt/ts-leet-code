function mergeSortedArrays(
  numArr1: number[],
  numArr2: number[]
): number[] | null {
  const sortedArr: number[] = [];
  let pointer1 = 0;
  let pointer2 = 0;

  if (!Array.isArray(numArr1) || !Array.isArray(numArr2)) {
    console.log("null");
    return null;
  }

  if (numArr1.length < 1 && numArr2.length < 1) {
    console.log([]);
    return [];
  }

  while (pointer1 < numArr1.length || pointer2 < numArr2.length) {
    if (pointer1 === numArr1.length) {
      sortedArr.push(numArr2[pointer2]);
      pointer2++;
    } else if (pointer2 === numArr2.length) {
      sortedArr.push(numArr1[pointer1]);
      pointer1++;
    } else {
      if (numArr1[pointer1] <= numArr2[pointer2]) {
        sortedArr.push(numArr1[pointer1]);
        pointer1++;
      } else {
        sortedArr.push(numArr2[pointer2]);
        pointer2++;
      }
    }
  }

  console.log(sortedArr);
  return sortedArr;
}

// Test cases with the updated function
console.log("\n--- Test Cases ---");

console.log("\nTest Case 1 (Standard Merge):");
mergeSortedArrays([0, 4, 7, 8, 20, 28], [5, 9, 11]);

console.log("\nTest Case 2 (First array empty):");
mergeSortedArrays([], [5, 9, 11]);

console.log("\nTest Case 3 (Second array empty):");
mergeSortedArrays([0, 4, 7], []);

console.log("\nTest Case 4 (Both arrays empty):");
mergeSortedArrays([], []);

console.log("\nTest Case 5 (Arrays of different lengths):");
mergeSortedArrays([1, 3, 5], [2, 4, 6, 7, 8]);

console.log("\nTest Case 6 (Invalid input - not an array):");
// @ts-ignore - Intentionally passing wrong type for testing
mergeSortedArrays("hello", [1, 2]);

console.log("\nTest Case 7 (Invalid input - second not an array):");
// @ts-ignore - Intentionally passing wrong type for testing
mergeSortedArrays([1, 2], null);

console.log("\nTest Case 8 (Invalid input - both not arrays):");
// @ts-ignore - Intentionally passing wrong type for testing
mergeSortedArrays(undefined, {});
