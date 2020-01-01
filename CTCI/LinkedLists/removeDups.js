function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode();
// const l2 = (l1.next = new ListNode(1));
// const l3 = (l2.next = new ListNode(1));
// const l4 = (l3.next = new ListNode(3));
// const l5 = (l4.next = new ListNode(3));

//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var deleteDuplicates = function(head) {
  if (head === null) {
    return null;
  }
  let curr = head.next,
    prev = head;
  let myMap = new Map();
  myMap.set(prev.val, true);
  while (curr != null) {
    if (myMap.has(curr.val) === false) {
      myMap.set(curr.val, true);
    } else {
      prev.next = curr.next;
      curr = prev.next;
      continue;
    }
    curr = curr.next;
    prev = prev.next;
  }
  return head;
};

console.log(deleteDuplicates(l1));
