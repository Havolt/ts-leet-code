class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // Early exits
  if (!head || !head.next) {
    return true;
  }
  let slowPointer = head;
  let fastPointer = head?.next;
  let possibleNextMove = true;
  let totalCount = 0;

  while (possibleNextMove) {
    totalCount -= slowPointer.val;
    totalCount += fastPointer.val;
    if (!slowPointer.next?.next || !fastPointer.next?.next) {
      possibleNextMove = false;
    } else {
      slowPointer = slowPointer.next.next;
      fastPointer = fastPointer.next.next;
    }
  }

  console.log(totalCount);

  return totalCount === 0;
}

const ln1 = new ListNode(1);
const ln2 = new ListNode(2);
const ln3 = new ListNode(3);
const ln4 = new ListNode(4);
const ln5 = new ListNode(4);
const ln6 = new ListNode(3);
const ln7 = new ListNode(2);
const ln8 = new ListNode(1);
ln1.next = ln2;
ln2.next = ln3;
ln3.next = ln4;
ln4.next = ln5;
ln5.next = ln6;
ln6.next = ln7;
ln7.next = ln8;

isPalindrome(ln1);
