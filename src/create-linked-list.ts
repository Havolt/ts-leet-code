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
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode: LinkedNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode: LinkedNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.length++;
    return this;
  }
  insert() {}
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
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(-2);
myLinkedList.prepend(-20);

console.log(myLinkedList);
console.log(myLinkedList.toArray());
