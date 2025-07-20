// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  const findMiddleNode = (slowNode, fastNode) => {
    //  console.log(fastNode);
    if (fastNode.next === null || fastNode.next.next === null) {
      return slowNode.next;
    }

    return findMiddleNode(slowNode.next, fastNode.next.next);
  };

  if (head === null) {
    return null;
  } else if (head.next === null) {
    return head;
  }
  return findMiddleNode(head, head.next);
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

console.log(middleNode(ln1));
