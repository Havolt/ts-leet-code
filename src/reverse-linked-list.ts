class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let currNode: ListNode | null = head;
  let nextNode: ListNode | null = null;
  let prevNode: ListNode | null = null;
  let endReached = false;
  let firstProcessed = false;

  // Early exits
  if (!currNode) {
    return null;
  }
  if (currNode.next === null) {
    return currNode;
  }

  while (!endReached && currNode) {
    nextNode = currNode.next;

    if (currNode.next === null) {
      endReached = true;
    }

    if (!firstProcessed) {
      currNode.next = null;
      firstProcessed = true;
    } else {
      currNode.next = prevNode;
    }

    prevNode = currNode;
    if (!endReached) {
      currNode = nextNode;
    }
  }

  return currNode;
}

const ln1 = new ListNode(1);
const ln2 = new ListNode(2);
const ln3 = new ListNode(3);
const ln4 = new ListNode(4);
const ln5 = new ListNode(5);
const ln6 = new ListNode(6);
ln1.next = ln2;
ln2.next = ln3;
ln3.next = ln4;
ln4.next = ln5;
ln5.next = ln6;

console.log(reverseList(ln1));
