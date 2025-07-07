class StackNode {
  value: any;
  next: StackNode | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  bottom: StackNode | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {}

  push(value) {}

  pop() {}

  //isEmpty
}

const myStack = new Stack();
