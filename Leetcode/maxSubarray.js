/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  localMax = nums[0];
  maxNeg = nums[0];
  for (i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    maxNeg = Math.max(maxNeg, localMax);
  }
  return maxNeg;
};

console.log(maxSubArray([-2, -4, -3, -1, -6]));
