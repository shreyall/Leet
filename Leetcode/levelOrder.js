function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const n1 = new TreeNode(1);
const n2 = (n1.left = new TreeNode(2));
const n3 = (n1.right = new TreeNode(3));
const n4 = (n2.left = new TreeNode(4));
const n5 = (n2.right = new TreeNode(5));

class Queue {
  constructor() {
    this.data = [];
  }
  add(val) {
    this.data.unshift(val);
  }
  remove() {
    this.data.pop();
  }
}

var levelOrder = function(root) {
  if (root === null) {
    return;
  }

  let q = new Queue();
  let temp = root;
  let arr = [];

  while (temp !== null) {
    if (temp.val) {
      arr.push(temp);
    }
    if (temp.left) {
      q.add(temp.left);
    }
    if (temp.right) {
      q.add(temp.right);
    }

    temp = q.remove();
  }
};

levelOrder(n1);
