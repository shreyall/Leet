// LEETCODE EASY ( 442 )

// O(n) space, O(n) time

var findDuplicates = function(nums) {
  var myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      num = myMap.get(nums[i]);
      myMap.set(nums[i], num + 1);
    } else {
      myMap.set(nums[i], 1);
    }
  }
  var res = [];
  for (let [key, value] of myMap) {
    if (value === 2) {
      res.push(key);
    }
  }
  return res;
};
