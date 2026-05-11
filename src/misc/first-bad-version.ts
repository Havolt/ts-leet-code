/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const badVersion = (n: number) => {
  return n >= 4;
};

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    if (n === 1) {
      return n;
    }

    let pointer = Math.floor(n / 2);
    let leftBoundary = 0;
    let rightBoundary = n;

    //  Need a remaining size check, we jump that amount
    // Now split the remaining size in half and jump again in the relevant direction
    // Repeat until we have one distance

    while (rightBoundary - leftBoundary > 1) {
      if (isBadVersion(pointer)) {
        console.log("isBad");
        rightBoundary = pointer;
      } else {
        console.log("isGood");
        leftBoundary = pointer;
      }
      pointer = Math.floor((rightBoundary - leftBoundary) / 2) + leftBoundary;
    }

    console.log({ leftBoundary });
    console.log({ rightBoundary });

    return 0;
  };
};

solution(badVersion)(6);
