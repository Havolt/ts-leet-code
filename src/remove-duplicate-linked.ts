/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.size++;
    }
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  console.log(head);
  if (!head) {
    return null;
  }

  const currentNode = head;
  //   We need to look at the next node and see its value
  // If it's the same then we need to peek at the following node's next
  // If it's the same then repeat, otherwise set the
  // currentNode to link directly to the next different value
  while (currentNode.next) {}
  return null;
}

const linkedListA = new LinkedList();
linkedListA.add(1);
linkedListA.add(1);
linkedListA.add(2);

console.log(deleteDuplicates(linkedListA.head));
