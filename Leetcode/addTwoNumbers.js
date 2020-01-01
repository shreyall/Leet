function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(0);
// const l2 = (l1.next = new ListNode(0));
// const l3 = (l2.next = new ListNode(0));
// const l4 = (l3.next = new ListNode(0));
// const l5 = (l4.next = new ListNode(0));
// const l6 = (l5.next = new ListNode(0));
// const l7 = (l6.next = new ListNode(0));
// const l8 = (l7.next = new ListNode(1));
// const l9 = (l8.next = new ListNode(0));
// const l10 = (l9.next = new ListNode(0));
// const l11 = (l10.next = new ListNode(0));
// const l12 = (l11.next = new ListNode(0));
// const l13 = (l12.next = new ListNode(0));
// const l14 = (l13.next = new ListNode(0));
// const l15 = (l14.next = new ListNode(0));
// const l16 = (l15.next = new ListNode(0));
// const l17 = (l16.next = new ListNode(0));
// const l18 = (l17.next = new ListNode(0));
// const l19 = (l18.next = new ListNode(0));
// const l20 = (l19.next = new ListNode(0));
// const l21 = (l20.next = new ListNode(0));
// const l22 = (l21.next = new ListNode(0));
// const l23 = (l22.next = new ListNode(1));
// const l24 = (l23.next = new ListNode(0));
// const l25 = (l24.next = new ListNode(0));
// const l26 = (l25.next = new ListNode(0));
// const l27 = (l26.next = new ListNode(0));
// const l28 = (l27.next = new ListNode(0));
// const l29 = (l28.next = new ListNode(0));
// const l30 = (l29.next = new ListNode(0));
// const l31 = (l30.next = new ListNode(1));
console.log(l1);

const k1 = new ListNode(0);
// const k2 = (k1.next = new ListNode(6));
// const k3 = (k2.next = new ListNode(4));
//console.log(k1);

var addTwoNumbers = function(l1, l2) {
  let counter = BigInt(0),
    curr = l1,
    mult = BigInt(1);
  while (curr !== null) {
    counter += BigInt(curr.val) * mult;
    mult *= 10n;
    curr = curr.next;
  }
  (curr = l2), (mult = BigInt(1));
  while (curr !== null) {
    counter += BigInt(curr.val) * mult;
    mult *= 10n;
    curr = curr.next;
  }
  const addLL = (node, num) => {
    let temp = new ListNode(),
      ptr;
    temp.val = num;
    if (node.val === undefined) {
      node = temp;
    } else {
      ptr = node;

      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = temp;
    }
    return node;
  };
  let result = new ListNode();
  if (counter === BigInt(0)) {
    return new ListNode(0);
  } else {
    while (counter > 0) {
      result = addLL(result, counter % 10n);
      counter = counter / 10n;
    }
  }
  return result;
};

console.log(addTwoNumbers(l1, k1));
