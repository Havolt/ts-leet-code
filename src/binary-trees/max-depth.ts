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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let maxDepthFound = 0;

  const drill = (node: TreeNode, currentDepth: number = 0) => {
    if (!node.left && !node.right) {
      const currentLevel = currentDepth + 1;
      if (currentLevel > maxDepthFound) {
        maxDepthFound = currentDepth + 1;
      }
      return;
    }

    if (node.left) {
      drill(node.left, currentDepth + 1);
    }
    if (node.right) {
      drill(node.right, currentDepth + 1);
    }
  };

  drill(root);
  console.log(maxDepthFound);
  return maxDepthFound;
}

const depthTree = new Tree([3, 9, 20, null, null, 15, 7]);

maxDepth(depthTree.head);
