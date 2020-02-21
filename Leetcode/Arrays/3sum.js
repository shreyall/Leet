// LEETCODE MEDIUM ( 15 )

// var threeSum = function(nums) {
//   if (nums.length < 3) return [];

//   let sorted = [...nums].sort((a, b) => {
//     return a - b;
//   });

//   let results = [];
//   let uniq = new Set();

//   for (let k = 0; k < sorted.length; k++) {
//     let i = k + 1,
//       j = sorted.length - 1;

//     while (i < j) {
//       let a = sorted[k],
//         b = sorted[i],
//         c = sorted[j];

//       if (a + b + c === 0) {
//         const str = `${a} ${b} ${c}`;
//         if (!uniq.has(str)) {
//           results.push([a, b, c]);
//           uniq.add(str);
//         }
//         break;
//       } else if (a + b + c > 0) {
//         j--;
//       } else if (a + b + c < 0) {
//         i++;
//       }
//     }
//   }
//   return results;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

const threeSum = nums => {
  if (nums.length < 3) return [];

  nums.sort((a, b) => {
    return a - b;
  });

  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (i >= 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      (a = nums[i]), (b = nums[j]), (c = nums[k]);

      if (a + b + c === 0) {
        results.push([a, b, c]);

        j++, k--;

        while (nums[j] === nums[j - 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
      } else if (a + b + c > 0) {
        k--;
      } else j++;
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
