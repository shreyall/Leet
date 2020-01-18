// LEETCODE EASY ( 189 )

// done in place, time complexity O(N), O(1) space (in place therefore slow)
const rotateArray = (nums, k) => {
  for (let j = 0; j < k; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        prev = nums[i];
        nums[i] = nums[nums.length - 1];
      } else {
        temp = nums[i];
        nums[i] = prev;
        prev = temp;
      }
    }
  }
};
