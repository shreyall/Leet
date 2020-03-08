//  LEETCODE MEDIUM ( 98 )

// solution using recursion
const isValidBST = root => {
  const isValid = (root, l, r) => {
    if (root === null) return true;
    if (root.val <= l || root.val >= r) {
      return false;
    }
    return isValid(root.left, l, root.val) && isValid(root.right, root.val, r);
  };

  return isValid(root, -Infinity, Infinity);
};

// solution using inorder traversal, using a stack

const validate = root => {
  let stack = [],
    inorder = -Infinity;

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }

  return true;
};
