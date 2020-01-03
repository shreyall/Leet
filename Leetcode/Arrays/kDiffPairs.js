// LEETCODE EASY ( 532 )

// Using hashmap, O(n) time and O(n) space
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

// Using two pointer, O(nlogn) time and O(1) space

const findPairs2P = (nums, k) => {
  if (k < 0 || nums.length === 0) return 0;
  nums.sort((a, b) => {
    return a - b;
  });
  let left = 0,
    right = 0,
    count = 0;
  while (right < nums.length) {
    if (nums[right] - nums[left] > k) left++;
    else if (nums[right] - nums[left] < k || left === right) right++;
    else {
      count++, right++, left++;
      while (right < nums.length && nums[right] === nums[right - 1]) right++;
    }
  }
  return count;
};
