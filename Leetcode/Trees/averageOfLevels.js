// LEETCODE EASY

// can be done using both DFS and BFS, however, BFS is a more elegant approach

// DFS solution

var averageOfLevels = function(root) {
  //preorder traversal, add up the values at each level while counting the number of levels
  const average = (root, i, sum, count) => {
    if (root === null) return;
    sum[i] ? (sum[i] += root.val) : (sum[i] = root.val);
    count[i] ? count[i]++ : (count[i] = 1);
    average(root.left, i + 1, sum, count);
    average(root.right, i + 1, sum, count);
  };

  //initialize sum and count arrays and call function to traverse
  let sum = [],
    count = [];
  average(root, 0, sum, count);

  //loop through the size of sum/count and calculate average as sum[i]/count[i] for every level
  let results = [];
  for (let j = 0; j < sum.length; j++) {
    results[j] = sum[j] / count[j];
  }
  return results;
};
