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
    }
  }
  lookup(value) {}

  remove(value) {}
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
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
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
