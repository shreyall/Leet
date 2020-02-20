// LEETCODE MEDIUM ( 200 )

var numIslands = function(grid) {
  const isRCvalid = (r, c) => {
    return r >= 0 && c >= 0 && r < grid.length && c < grid[r].length;
  };

  const dfs = (r, c) => {
    if (!isRCvalid(r, c) || grid[r][c] !== "1") {
      return;
    }
    grid[r][c] = 1;
    dfs(r, c - 1);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r + 1, c);
  };

  let number = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "1") {
        number += 1;
        dfs(r, c);
      }
    }
  }

  return number;
};
