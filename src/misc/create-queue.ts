class QueueNode {
  value: number;
  next: QueueNode | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: string | number) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else if (this.last) {
      const currentLast = this.last;
      this.last = newNode;
      currentLast.next = newNode;
    }

    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      return;
    }

    let pointer = this.first;

    if (pointer?.next) {
      this.first = pointer.next;
      this.length--;
    } else {
      this.first, (this.last = null);
      this.length = 0;
    }
  }
  //isEmpty;
}

const myQueue = new Queue();

console.log(myQueue);

myQueue.enqueue("alan");
myQueue.enqueue("ben");
myQueue.enqueue("chris");
myQueue.enqueue("david");

console.log(myQueue);

myQueue.dequeue();

console.log(myQueue);
