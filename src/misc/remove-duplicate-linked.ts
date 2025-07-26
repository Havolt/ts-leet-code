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

  getFlatArray(): number[] {
    if (this.head === null) {
      return [];
    }
    const flattenedArray: number[] = [];
    let currentNode = this.head;
    flattenedArray.push(currentNode.val);
    while (currentNode.next) {
      currentNode = currentNode.next;
      flattenedArray.push(currentNode.val);
    }

    return flattenedArray;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  console.log(head);
  if (!head) {
    return null;
  }

  let currentNode = head;

  const cleanedLinkedList = new LinkedList();
  cleanedLinkedList.add(currentNode.val);

  let currentValue: number | null = currentNode.val;
  // We need to look at the next node and see its value
  // If it's the same then we need to peek at the following node's next
  // If it's the same then repeat, otherwise set the
  // currentNode to link directly to the next different value
  while (currentNode.next) {
    currentNode = currentNode.next;
    if (currentNode.val !== currentValue) {
      cleanedLinkedList.add(currentNode.val);
      currentValue = currentNode.val;
    }
  }
  return cleanedLinkedList.head;
}

const linkedListA = new LinkedList();
linkedListA.add(1);
linkedListA.add(1);
linkedListA.add(2);
linkedListA.add(2);
linkedListA.add(3);
linkedListA.add(4);
linkedListA.add(7);

console.log(deleteDuplicates(linkedListA.head));
