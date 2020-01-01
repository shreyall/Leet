// LEETCOE EASY

var trimBST = function(root, L, R) {
  //return null at a leaf node
  if (root === null) return root;

  // if value is between bounds, trim left and right recursively and return node
  if (root.val >= L && root.val <= R) {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
  }

  // if value is out of bounds, trim left or right accordingly and return
  if (root.val < L) {
    return trimBST(root.right, L, R);
  } else return trimBST(root.left, L, R);
};
