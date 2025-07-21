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
  if (head.next.next === null) {
    return head.val === head.next.val;
  }
  let slowPointer = head;
  let fastPointer = head;
  let totalCount = [head.val];
  let counter = 0;

  while (fastPointer.next && fastPointer.next.next) {
    // Move pointers at different rates
    slowPointer = slowPointer.next!;
    fastPointer = fastPointer.next?.next!;

    if (fastPointer.next) {
      totalCount.push(slowPointer.val);
    }
  }

  slowPointer = slowPointer.next!;
  const totalCountEnd = totalCount.length - 1;

  while (slowPointer) {
    if (slowPointer.val !== totalCount[totalCountEnd - counter]) {
      return false;
    }

    counter++;
    slowPointer = slowPointer.next!;
  }

  return true;
}

const ln1 = new ListNode(1);
const ln2 = new ListNode(2);
const ln3 = new ListNode(3);
const ln4 = new ListNode(4);
const ln5 = new ListNode(4);
const ln6 = new ListNode(3);
const ln7 = new ListNode(2);
const ln8 = new ListNode(1);
// const ln9 = new ListNode(1);
ln1.next = ln2;
ln2.next = ln3;
ln3.next = ln4;
ln4.next = ln5;
ln5.next = ln6;
ln6.next = ln7;
ln7.next = ln8;
// // ln8.next = ln9;

console.log(isPalindrome(ln1));
