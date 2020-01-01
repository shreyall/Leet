/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let myMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     myMap.set(nums[i], true);
//   }
//   let index = 0;
//   for (var key of myMap.keys()) {
//     nums[index] = key;
//     index++;
//   }
//   return myMap.size;
// };

const removeDuplicates = nums => {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[length++] = nums[i];
    }
  }
  return nums;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
