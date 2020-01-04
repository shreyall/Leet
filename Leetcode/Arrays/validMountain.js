// LEETCODE EASY ( 941 )

// two pointers, O(n) time and O(1) complexity

const validMountainArray = nums => {
  if (nums.length < 3) return false;
  let i = 0,
    j = nums.length - 1;
  while (nums[i] <= nums[i + 1]) {
    if (nums[i] === nums[i + 1]) return false;
    i++;
  }
  while (nums[j] < nums[j - 1]) {
    if (nums[j] === nums[j - 1]) return false;
    j--;
  }
  if (i !== j || i === nums.length - 1 || j === 0) return false;
  return true;
};
