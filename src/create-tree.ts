class BinarySearchNode {
  left: BinarySearchNode | null;
  right: BinarySearchNode | null;
  value: number | null;
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: BinarySearchNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number) {
    const newNode = new BinarySearchNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    //  Kick off the recursion
    this._insertNode(this.root, value);
  }
  lookup(value) {
    return this._findNode(this.root, value);
  }

  _findNode(currentNode, value) {
    if (currentNode.value === value) {
      return currentNode;
    }

    const nextNode =
      value < currentNode.value ? currentNode.left : currentNode.right;

    if (nextNode === null) {
      return null;
    } else {
      return this._findNode(nextNode, value);
    }
  }

  _findParentNode(currentNode, value) {
    console.log("here");
    if (currentNode.left.value === value) {
      return { node: currentNode, direction: "left" };
    } else if (currentNode.right.value === value) {
      return { node: currentNode, direction: "right" };
    }

    const nextNode =
      value < currentNode.value ? currentNode.left : currentNode.right;

    if (nextNode === null) {
      return null;
    } else {
      return this._findParentNode(nextNode, value);
    }
  }

  _insertNode(currentNode, value) {
    const nextDirection = value < currentNode.value ? "left" : "right";
    const nextNode = currentNode[nextDirection];

    if (nextNode === null) {
      currentNode[nextDirection] = new BinarySearchNode(value);
    } else {
      this._insertNode(nextNode, value);
    }
  }

  remove(value: number) {
    if (!this.root) {
      return null;
    }
    const matchedParentNode = this._findParentNode(this.root, value);
    const matchedNode = matchedParentNode.node[matchedParentNode.direction];

    console.log(matchedParentNode);
    console.log(matchedNode);

    if (matchedNode.left === null && matchedNode.right === null) {
      matchedParentNode.node[matchedParentNode.direction] = null;
    } else {
      if (matchedNode.right && matchedNode.right.left) {
        matchedParentNode;
      }
    }

    console.log(matchedParentNode);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

type Tree = {
  value: number;
  left: BinarySearchNode | null;
  right: BinarySearchNode | null;
};

function traverse(node) {
  const tree: Tree = { value: node.value, left: null, right: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
