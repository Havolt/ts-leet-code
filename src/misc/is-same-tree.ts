/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

class Tree {
  root: TreeNode;
  constructor(root: TreeNode) {
    this.root = root;
  }

  addNode(val: number, currentNode: TreeNode = this.root) {
    //  Get the next node we're going to
    const goLeft = val < currentNode.val;

    if (goLeft) {
      //  We're going left
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.addNode(val, currentNode.left);
      }
    } else {
      // We're going right
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.addNode(val, currentNode.right);
      }
    }
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const treeValues: (number | null)[] = [];

  const traversePath = (node: TreeNode | null) => {
    if (node === undefined) {
      return;
    }

    const nodeVal = node?.val;

    if (nodeVal && !isNaN(nodeVal)) {
      treeValues.push(node.val);
      traversePath(node.left);
      traversePath(node.right);
    } else {
      treeValues.push(null);
    }
  };

  traversePath(p);
  traversePath(q);

  const treeValsLength = treeValues.length;

  if (treeValsLength % 2 !== 0 || treeValsLength === 1) {
    return false;
  }

  for (let i = 0; i < treeValsLength / 2; i++) {
    if (treeValues[i] !== treeValues[treeValsLength / 2 + i]) {
      return false;
    }
  }

  return true;
}

const rootNodeOne = new TreeNode(10);
const testTreeOne = new Tree(rootNodeOne);
const rootNodeTwo = new TreeNode(10);
const testTreeTwo = new Tree(rootNodeTwo);

// console.log(rootNode);
// console.log(testTreeOne);

testTreeOne.addNode(5);
testTreeOne.addNode(2);
testTreeOne.addNode(3);

testTreeTwo.addNode(5);
testTreeTwo.addNode(2);
testTreeTwo.addNode(3);

// console.log(testTreeOne);

isSameTree(testTreeOne.root, testTreeTwo.root);
