class LinkedNode {
  value: number;
  next: LinkedNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedNode | null;
  tail: LinkedNode | null;
  length: number;
  constructor(value) {
    this.head = new LinkedNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  addToEmpty(value) {
    const newNode = new LinkedNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  append(value) {
    const newNode = new LinkedNode(value);

    if (!this.head) {
      return this.addToEmpty(value);
    }

    if (!this.tail) {
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    if (!this.head) {
      return this.addToEmpty(value);
    }
    const newNode = new LinkedNode(value);
    newNode.next = this.head;

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
      this.append(value);
    } else if (index > this.length) {
      return new Error("Index too large");
    } else {
      const pointer = this.findItemBefore(index);
      if (!pointer) {
        return;
      }
      const newNode = new LinkedNode(value);

      const nextNode = pointer.next;
      pointer.next = newNode;
      newNode.next = nextNode;

      this.length++;
    }
  }
  remove(index) {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      if (this.head?.next) {
        this.head = this.head.next;
      }
    } else {
      const pointerBeforeIndex = this.findItemBefore(index);
      if (!pointerBeforeIndex) {
        return;
      }
      // console.log(pointerAfterIndex)
      const pointerOfIndex = pointerBeforeIndex.next;
      const pointerAfterIndex = pointerOfIndex?.next || null;

      // Move tail if necessary
      if (pointerAfterIndex === null) {
        this.tail = pointerBeforeIndex;
      }

      pointerBeforeIndex.next = pointerAfterIndex;
    }

    if (this.length > 0) {
      this.length--;
    }
  }
  // Remove logic
  findItemBefore(index) {
    if (this.length === 0 || !this.head) {
      return;
    }
    let pointerIndex = 0;
    let pointer: LinkedNode = this.head;
    while (pointerIndex !== index - 1 && pointer.next) {
      pointer = pointer.next;
      pointerIndex++;
    }

    return pointer;
  }
  toArray() {
    if (!this.head) {
      return [];
    }
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

myLinkedList.insert(0, -1);
myLinkedList.insert(2, 2);
myLinkedList.insert(3, 3);
myLinkedList.insert(10, 3);
myLinkedList.insert(2, 10);

console.log(myLinkedList.toArray());

// console.log(myLinkedList.head);
// console.log(myLinkedList.tail);

// LOG TAIL AFTER EACH
myLinkedList.remove(2);
// console.log(myLinkedList.toArray());
myLinkedList.remove(0);
// console.log(myLinkedList.toArray());
myLinkedList.remove(2);
// console.log(myLinkedList.toArray());
myLinkedList.remove(1);
// // ! TAIL IS NOT DETATCHED FROM 3 HERE
// console.log(myLinkedList);
// console.log(myLinkedList.toArray());
myLinkedList.remove(0);
// // console.log(myLinkedList);
// console.log(myLinkedList.toArray());

myLinkedList.remove(4);

// myLinkedList.append(5);

console.log(myLinkedList);
console.log(myLinkedList.toArray());
