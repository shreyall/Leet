// LEETCODE EASY ( 581 )

var findUnsortedSubarray = function(nums) {
  let sorted = [...nums].sort((a, b) => {
    return a - b;
  });

  if (JSON.stringify(sorted) === JSON.stringify(nums)) return 0;

  let i = 0,
    j = nums.length - 1;
  while (nums[i] === sorted[i]) i++;
  while (nums[j] === sorted[j]) j--;

  return j - i + 1;
};
