// LEETCODE MEDIUM ( 153 )

// const findMin = nums => {
//   if (nums.length <= 3) return Math.min(...nums);
//   if (nums[0] < nums[nums.length - 1]) return nums[0];
//   const binSearch = (l, r, arr) => {
//     if (l >= r) return;
//     let mid = l + Math.floor((r - l) / 2);
//     console.log(l, mid, r);
//     if (arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) {
//       console.log("here");
//       return arr[mid];
//     } else if (arr[mid + 1] < arr[mid]) {
//       return arr[mid + 1];
//     } else {
//       return binSearch(l, mid, arr) || binSearch(mid + 1, r, arr);
//     }
//   };

//   return binSearch(0, nums.length - 1, nums);
// };

const findMin = nums => {
  if (nums.length <= 3) return Math.min(...nums);
  if (nums[0] < nums[nums.length - 1]) return nums[0];

  const binSearch = (l, r, arr) => {
    if (l >= r) return;
    let mid = l + Math.floor((r - l) / 2);
    console.log(l, mid, r);
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[0] && arr[mid] > arr[arr.length - 1]) {
      return binSearch(mid + 1, r, arr);
    } else {
      return binSearch(l, mid, arr);
    }
  };

  return binSearch(0, nums.length, nums);
};

console.log(findMin([1, 2, 3, 4, 5, 6]));
