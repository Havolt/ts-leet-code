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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const treeOrder: TreeNode[] = [];
  const levelAverage: number[] = [];
  let currentLevelLimit = 0;
  let nextLevelLimit = 0;
  let currentTally = 0;
  levelAverage.push(root.val);

  if (!root.left && !root.right) {
    return levelAverage;
  }
  if (root.left) {
    treeOrder.push(root.left);
    currentLevelLimit++;
  }
  if (root.right) {
    treeOrder.push(root.right);
    currentLevelLimit++;
  }

  while (treeOrder.length > 0) {
    for (let i = 0; i < currentLevelLimit; i++) {
      // ! Time consuming shift operation could be made into a queue
      const currentNode: TreeNode = treeOrder.shift()!;
      currentTally += currentNode?.val || 0;
      if (currentNode.left) {
        treeOrder.push(currentNode.left);
        nextLevelLimit++;
      }
      if (currentNode.right) {
        treeOrder.push(currentNode.right);
        nextLevelLimit++;
      }
    }
    levelAverage.push(currentTally / currentLevelLimit);
    currentTally = 0;
    currentLevelLimit = nextLevelLimit;
    nextLevelLimit = 0;
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
