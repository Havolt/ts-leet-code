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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let smallestFound: number | null = null;
  const getNextLevel = (node, currentLevel) => {
    if (!node.left && !node.right) {
      if (smallestFound === null || currentLevel < smallestFound) {
        smallestFound = currentLevel;
        if (smallestFound === 1) {
          return;
        }
      }
    }
    if (node.left) {
      getNextLevel(node.left, currentLevel + 1);
    }
    if (node.right) {
      getNextLevel(node.right, currentLevel + 1);
    }
  };

  getNextLevel(root, 1);
  console.log(smallestFound);
  return smallestFound || 0;
}

// const rootNode = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
// );

// const rootNode = new TreeNode(
//   2,
//   null,
//   new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, null)))
// );

const rootNode = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

//     3
//    / \
//   9   20
//  / \  / \
// X  X 15  7

minDepth(rootNode);
