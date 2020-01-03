// LEETCODE EASY ( 532 )

const findPairs = (nums, k) => {
  if (k < 0) return 0;
  let m1 = new Map();
  for (var i of nums) {
    m1.set(i, m1.get(i) + 1 || 1);
  }
  let count = 0;

  m1.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (m1.has(key + k)) count++;
    }
  });

  return count;
};
