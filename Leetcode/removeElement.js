var removeElement = function(nums, val) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      nums[j] = nums[i];
      j = j - 1;
    } else {
      i = i + 1;
    }
  }
  return i;
};

console.log(removeElement([0, 1, 2, 2, 3, 2, 4, 2], 2));
console.log(removeElement([2, 2, 3], 2));
