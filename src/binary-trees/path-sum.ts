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
  head: TreeNode;
  size: number;
  constructor(template: (number | null)[]) {
    if (template[0] === null) {
      console.error("Cant create new Tree with root of null");
      return;
    }
    //  Initial value settings
    this.head = new TreeNode(template[0]);
    this.size = 1;
    //  Data used to generate child nodes
    let pointer = 1;
    const nodeList: TreeNode[] = [this.head];
    let depthLength = 1;

    while (pointer < template.length) {
      for (let i = 0; i < depthLength; i++) {
        const currentNode = nodeList.shift()!;
        // Get the values
        const firstVal = template[pointer];
        const secondVal =
          pointer + 1 < template.length && template[pointer + 1];
        //  Turn them into nodes
        const leftNode =
          typeof firstVal === "number" ? new TreeNode(firstVal!) : null;
        const rightNode =
          typeof secondVal === "number" ? new TreeNode(secondVal!) : null;
        // Increment the pointer
        pointer += 2;
        // Assign the nodes
        if (leftNode) {
          currentNode.left = leftNode;
          nodeList.push(leftNode);
          this.size++;
        }
        if (rightNode) {
          currentNode.right = rightNode;
          nodeList.push(rightNode);
          this.size++;
        }
      }
    }
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  let hasSum = false;
  const drill = (node, targetSum, total = 0) => {
    if (!node.left && !node.right) {
      const leafTotal = total + node.val;
      if (leafTotal === targetSum) {
        hasSum = true;
      }
    }
    if (node.left && !hasSum) {
      drill(node.left, targetSum, total + node.val);
    }
    if (node.right && !hasSum) {
      drill(node.right, targetSum, total + node.val);
    }
  };

  drill(root, targetSum);

  console.log(hasSum);

  return hasSum;
}

const testTree = new Tree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);

const testTree2 = new Tree([1, 2, 3]);
const testTree3 = new Tree([1, 2]);

hasPathSum(testTree.head, 22);
hasPathSum(testTree2.head, 5);
hasPathSum(testTree3.head, 1);

// console.log(testTree.head);
// console.log(testTree.size);
