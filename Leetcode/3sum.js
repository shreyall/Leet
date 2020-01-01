// a+b+c=0
// find all triplets of the numbers that equal 0

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   let myMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     myMap.set(nums[i], i);
//   }
//   let result = [];

//   for (i = 0; i < nums.length - 2; i++) {
//     for (j = i; j < nums.length; j++) {
//       console.log(i, j, nums[i], nums[j]);
//       let key = 0 - nums[i] - nums[j];
//       if (myMap.has(key) && myMap.get(key) > j) {
//         result.push([nums[i], nums[j], key]);
//         j = myMap.get(nums[j]);
//       }
//       i = myMap.get(nums[i]);
//     }
//   }
//   console.log(result);
// };

var threeSum = function(nums) {
  let results = [];
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[k] + nums[j];
      if (sum === 0) {
        results.push(
          [nums[i], nums[j], nums[k]].sort((a, b) => {
            return a - b;
          })
        );
        while (nums[j] === nums[j + 1]) j++;
        //while (nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }
    }
  }
  return results;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
