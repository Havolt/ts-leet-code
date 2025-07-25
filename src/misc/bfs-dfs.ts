class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  value: number;
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode: TreeNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode: TreeNode | null = this.root;

    while (currentNode) {
      if (currentNode.value > value) {
        // Left
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        // Right
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode: TreeNode | null = this.root;
    let parentNode: TreeNode | null = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // Move on a row by row basis in the tree menu
  // Need to save sibling elements to come back to
  breathFirstSearch(searchNum) {
    if (this.root === null) {
      return null;
    }

    const queue: TreeNode[] = [this.root];

    while (queue.length > 0) {
      const currentNode: TreeNode = queue.shift()!;

      if (currentNode.value === searchNum) {
        console.log(currentNode);
        return currentNode;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return null;
  }

  // Drill down to bottom and get values before moving back up
  depthFirstSearch(searchNum) {
    if (!this.root) {
      return null;
    }

    const recurseSearch = (node) => {
      if (!node) {
        return null;
      }

      console.log(node.value);
      if (node.value === searchNum) {
        return node;
      }

      const result = recurseSearch(node.left) || recurseSearch(node.right);
      if (result) {
        return result;
      }
    };

    const foundNode = recurseSearch(this.root);
    console.log(foundNode);

    return foundNode;
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
// tree.remove(170);
JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
// tree.breathFirstSearch(15);
tree.depthFirstSearch(15);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree: TreeNode = { value: node.value, left: null, right: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
