class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode;
  size: number;

  constructor(value: number) {
    this.head = new ListNode(value);
    this.size = 1;
  }

  addNode(value) {
    if (!this.head) {
      return (this.head = new ListNode(value));
    }

    let pointer = this.head;

    while (pointer.next) {
      pointer = pointer.next;
    }

    pointer.next = new ListNode(value);
    this.size++;
  }

  getHead() {
    return this.head;
  }

  printValues() {
    let pointer: ListNode | null = this.head;
    while (pointer) {
      console.log(pointer.val);
      pointer = pointer.next;
    }
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }

  let pointer: ListNode | null = head;
  let prevPointer: ListNode | null = null;

  while (pointer) {
    //  console.log(pointer);
    // It's a match remove it
    if (pointer.val === val) {
      // We're on the first node
      if (prevPointer === null) {
        if (pointer.next === null) {
          return null;
        }

        head = pointer.next;
        pointer = pointer.next;
      } else {
        prevPointer.next = pointer.next;
        pointer = pointer.next;
      }
    } else {
      // We're on a subsequent node
      if (pointer.next) {
        prevPointer = pointer;
        pointer = pointer.next;
      } else {
        return head;
      }
    }
  }
  console.log(head);
  return head;
}

const newList = new LinkedList(4);
// newList.addNode(2);
// newList.addNode(3);
newList.addNode(4);
newList.addNode(4);
newList.addNode(4);
newList.addNode(4);
newList.addNode(5);

removeElements(newList.getHead(), 4);

newList.printValues();
