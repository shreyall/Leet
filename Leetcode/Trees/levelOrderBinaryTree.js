// LEETCODE MEDIUM ( 102 )

//level order traversal (breadth first search) of a binary tree
// used a queue to implement breadth first search
const levelOrder = root => {
  if (root === null) return [];
  let results = [];
  let q = [root];

  while (q.length > 0) {
    let level = [],
      len = q.length;
    for (let i = 0; i < len; i++) {
      curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      level.push(curr.val);
    }
    results.push(level);
  }
  return results;
};
