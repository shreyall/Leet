// LEETCODE MEDIUM ( 238 )

// Given an array, you are to find the product of every other element
// other than the element in that specific index

// idea is to find product of every element's left, and same for every element's right
// then multiply them to find total

// O(n) time and O(1) space
const productExceptSelf = nums => {
  let output = [];
  let product = 1;
  for (var i in nums) {
    output[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
};

console.log(productExceptSelf([2, 3, 4, 5]));
