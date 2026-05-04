// Definition for a binary tree node.
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

// They want an iterative solution
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  let currentNode = root;

  const output = [];
  const stack = [];

  while (currentNode || stack.length > 0) {}

  console.log(output);

  return output;
}
