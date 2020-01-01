function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(1);
const l2 = (l1.next = new ListNode(1));
const l3 = (l2.next = new ListNode(2));
const l4 = (l3.next = new ListNode(3));
const l5 = (l4.next = new ListNode(3));

const kthLastElement = (head, k) => {
  let front = head,
    back = head;
  for (i = 0; i < k; i++) {
    front = front.next;
  }
  while (front.next !== null) {
    console.log();
    front = front.next;
    back = back.next;
  }
  return back.next.val;
};

console.log(kthLastElement(l1, 3));
