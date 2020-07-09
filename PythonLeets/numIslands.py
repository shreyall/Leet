# Leetcode medium - Number of Islands - 200


class Solution:
    def isValid(self, i, j, grid):
        return i >= 0 and i < len(grid) and j >= 0 and j < len(grid[0])

    def dfs(self, i, j, grid):
        if self.isValid(i, j, grid) and grid[i][j] == "1":
            grid[i][j] = "0"
            self.dfs(i-1, j, grid)
            self.dfs(i, j-1, grid)
            self.dfs(i+1, j, grid)
            self.dfs(i, j+1, grid)

    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    count += 1
                    self.dfs(i, j, grid)
        return count
