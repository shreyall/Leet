// LEETCODE MEDIUM ( 73 )

//this solution works, O(MN) time and O(M+N) space
const setZeroes = matrix => {
  let rows = [],
    columns = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        rows.push(r), columns.push(c);
      }
    }
  }

  rows = [...new Set(rows)];
  columns = [...new Set(columns)];

  for (let i = 0; i < rows.length; i++) {
    r = rows[i];
    matrix[r] = Array(matrix[r].length).fill(0);
  }
  for (let i = 0; i < columns.length; i++) {
    c = columns[i];
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][c] = 0;
    }
  }
  console.log(matrix);
};

let arr = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

console.log(setZeroes(arr));
