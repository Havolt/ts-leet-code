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

  peek() {
    return this.top;
  }

  push(value: any) {
    const newNode = new StackNode(value);
    const currentTop = this.top;
    if (currentTop) {
      this.top = newNode;
      this.top.next = currentTop;
      this.length++;
    } else {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.top?.next) {
      this.top = this.top?.next;
      this.length--;
    } else {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  }

  isEmpty() {
    return !this.bottom;
  }
}

const myStack = new Stack();
console.log(myStack);

myStack.push(1);
console.log(myStack);

myStack.push(2);
console.log(myStack);

myStack.push(3);
console.log(myStack);

myStack.pop();
console.log(myStack);

myStack.pop();
console.log(myStack);

myStack.pop();
console.log(myStack);

console.log(myStack.isEmpty());
