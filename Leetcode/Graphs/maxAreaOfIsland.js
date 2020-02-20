// LEETCODE MEDIUM ( 695 )

// depth first search algorithm

var maxAreaOfIsland = function(grid) {
  const isRCvalid = (r, c) => {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[r].length;
  };

  const dfs = (r, c) => {
    if (!isRCvalid(r, c) || grid[r][c] !== 1) {
      return 0;
    }
    return 1 + dfs(r, c - 1) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r + 1, c);
  };

  let maxArea = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
};
