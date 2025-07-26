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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  } else if (root1 && !root2) {
    return root1;
  } else if (!root1 && root2) {
    return root2;
  }

  const root2Node = root2;

  const drill = (node1: TreeNode, node2: TreeNode) => {
    if (node1 && node2) {
      node1.val = node1.val + node2.val;
    }
    if (node1.left && node2.left) {
      drill(node1.left, node2.left);
    } else if (node2.left) {
      node1.left = node2.left;
    }
    if (node1.right && node2.right) {
      drill(node1.right, node2.right);
    } else if (node2.right) {
      node1.right = node2.right;
    }
  };

  drill(root1!, root2!);

  console.log(root1);

  return root1;
}

const headNode1 = new Tree([1, 3, 2, 5]);
const headNode2 = new Tree([2, 1, 3, null, 4, null, 7]);

mergeTrees(headNode1.head, headNode2.head);
