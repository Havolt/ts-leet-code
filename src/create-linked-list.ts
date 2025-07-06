class LinkedNode {
  value: number;
  next: LinkedNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedNode;
  tail: LinkedNode;
  length: number;
  constructor(value) {
    this.head = new LinkedNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new LinkedNode(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new LinkedNode(value);
    newNode.next = this.tail;

    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (typeof index !== "number") {
      return new Error("Index needs to be a number");
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      console.log("append ", value);
      this.append(value);
    } else if (index > this.length) {
      console.error("Index too large");
      return new Error("Index too large");
    } else {
      let pointerIndex = 0;
      let pointer: LinkedNode = this.head;
      while (pointerIndex !== index - 1 && pointer.next) {
        pointer = pointer.next;
        pointerIndex++;
      }
      const newNode = new LinkedNode(value);

      const nextNode = pointer.next;
      pointer.next = newNode;
      newNode.next = nextNode;

      this.length++;
    }
  }
  toArray() {
    let pointer = this.head;
    const linkedArray: number[] = [pointer.value];
    while (pointer.next !== null) {
      pointer = pointer.next;
      linkedArray.push(pointer.value);
    }
    return linkedArray;
  }
}

let myLinkedList = new LinkedList(1);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(-2);
// myLinkedList.prepend(-20);

myLinkedList.insert(0, -1);
myLinkedList.insert(2, 2);
myLinkedList.insert(3, 3);
myLinkedList.insert(10, 3);
myLinkedList.insert(2, 10);

console.log(myLinkedList);
console.log(myLinkedList.toArray());
