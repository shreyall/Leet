// LEETCODE EASY ( 107 )

// solved using dfs recursively

const levelOrderBottom = root => {
  if (root === null) return [];
  const traverse = (root, level, arr = []) => {
    if (root === null) return;
    if (!arr[level]) arr[level] = [];
    traverse(root.left, level + 1, arr);
    traverse(root.right, level + 1, arr);
    arr[level].push(root.val);
    return arr;
  };

  let arr = traverse(root, 0, []);
  return arr.reverse();
};
