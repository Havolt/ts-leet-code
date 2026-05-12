/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const badVersion = (n: number) => {
  return n >= 67;
};

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    if (n === 1) {
      return n;
    }

    let pointer = Math.floor(n / 2);
    let leftBoundary = 0;
    let rightBoundary = n;

    while (rightBoundary - leftBoundary > 1) {
      pointer = Math.floor((rightBoundary - leftBoundary) / 2) + leftBoundary;
      if (isBadVersion(pointer)) {
        console.log("isBad");
        rightBoundary = pointer;
      } else {
        console.log("isGood");
        leftBoundary = pointer;
      }
    }

    return rightBoundary;
  };
};

solution(badVersion)(205);
