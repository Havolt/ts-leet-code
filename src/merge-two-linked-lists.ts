class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val: number) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addRemaining(node: ListNode) {
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      while (current.next) {
        this.size++;
        current = current.next;
      }
    }
  }

  logAsArray() {
    const valueArray: number[] = [];
    let currentNode: ListNode | null = this.head;
    while (currentNode) {
      valueArray.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(valueArray);
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let currentLink1: ListNode | null = list1;
  let currentLink2: ListNode | null = list2;

  const combinedLinkedList = new LinkedList();

  while (currentLink1 !== null && currentLink2 !== null) {
    //  Check which current value is the highest and use it
    if (currentLink1.val <= currentLink2.val) {
      combinedLinkedList.add(currentLink1.val);
      currentLink1 = currentLink1.next;
    } else {
      combinedLinkedList.add(currentLink2.val);
      currentLink2 = currentLink2.next;
    }
  }

  if (currentLink1 !== null) {
    combinedLinkedList.addRemaining(currentLink1);
  } else if (currentLink2 !== null) {
    combinedLinkedList.addRemaining(currentLink2);
  }

  combinedLinkedList.logAsArray();

  console.log(combinedLinkedList.head);

  return combinedLinkedList.head;
}

// const link1B = new ListNode(2, null);
// const link1A = new ListNode(1, link1B);

// const link2E = new ListNode(9, null);
// const link2D = new ListNode(8, link2E);
// const link2C = new ListNode(7, link2D);
// const link2B = new ListNode(2, link2C);
// const link2A = new ListNode(1, link2B);

// const link3A = new ListNode(0, null);

// mergeTwoLists(null, link3A);
