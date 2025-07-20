class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  const checkCycle = (listNodeSlow, listNodeFast) => {
    if (listNodeSlow === listNodeFast) {
      return true;
    }

    if (listNodeFast.next === null || listNodeFast.next.next === null) {
      return false;
    }

    return checkCycle(listNodeSlow.next, listNodeFast.next.next);
  };

  if (head === null || head.next === null || head.next.next === null) {
    return false;
  }
  return checkCycle(head, head.next.next);
}

// const ln1 = new ListNode(0);
// const ln2 = new ListNode(2);
// const ln3 = new ListNode(3);
// const ln4 = new ListNode(4);
// const ln5 = new ListNode(5);

// ln1.next = ln2;
// ln2.next = ln3;
// ln3.next = ln4;
// ln4.next = ln5;
// ln5.next = ln1;

const ln1 = new ListNode(0);
const ln2 = new ListNode(2);
ln1.next = ln2;
ln2.next = null;
// const ln3 = new ListNode(3);
// const ln4 = new ListNode(4);
// const ln5 = new ListNode(5);

console.log(hasCycle(ln1));
