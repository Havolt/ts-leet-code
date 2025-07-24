class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class Tree {}

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const treeOrder: (TreeNode | null)[] = [root.left, root.right];
  const levelAverage: number[] = [];
  let currentAverageTally = 0;
  let cutOffSize = 2;
  let counter = 0;
  let actualNumberCounter = 0;

  levelAverage.push(root.val);

  console.log(levelAverage);

  // Get all the left and right vals for the current level and add to array
  // Loop through array and average out values
  // While looping add the values to an array for next level
  while (treeOrder.length > 0) {
    console.log(treeOrder);
    const currentItem = treeOrder.shift();
    if (currentItem) {
      currentAverageTally += currentItem?.val || 0;
      treeOrder.push(currentItem!.left);
      treeOrder.push(currentItem!.right);
      actualNumberCounter++;
    }
    counter++;

    if (counter === cutOffSize) {
      levelAverage.push(currentAverageTally / actualNumberCounter);
      counter = 0;
      cutOffSize *= 2;
      actualNumberCounter = 0;
      currentAverageTally = 0;
    }
  }

  console.log(levelAverage);

  return levelAverage;
}

const rootNode = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

//     3
//    / \
//   9   20
//  / \  / \
// X  X 15  7

averageOfLevels(rootNode);

// console.log(rootNode);
