// LEETCODE MEDIUM ( 33 )

const search = (nums, target) => {
  const look = (nums, target, l, r) => {
    if (l > r) {
      return -1;
    }

    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    //console.log(l, mid, r);

    // if nums[l.....mid] is sorted
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target <= nums[mid]) {
        return look(nums, target, l, mid - 1);
      }

      return look(nums, target, mid + 1, r);
    } else {
      // right half is definitely sorted
      if (target >= nums[mid] && target <= nums[r]) {
        return look(nums, target, mid + 1, r);
      }
      return look(nums, target, l, mid - 1);
    }
  };

  return look(nums, target, 0, nums.length - 1);
};

let arr = [5, 1, 3];
console.log(search(arr, 3));

// const search = (nums, target) => {
//   const findPivot = (l, r, nums) => {
//     if (nums[0] < nums[nums.length - 1]) return 0;
//     if (nums.length <= 3) return nums.indexOf(Math.min(...nums));
//     if (l >= r) return;
//     let mid = l + Math.floor((r - l) / 2);
//     console.log(l, mid, r);
//     if (nums[mid] < nums[mid - 1]) {
//       return mid;
//     } else if (nums[mid] > nums[0] && nums[mid] > nums[nums.length - 1]) {
//       return findPivot(mid + 1, r, nums);
//     } else {
//       return findPivot(l, mid, nums);
//     }
//   };

//   const binSearch = (l, r, target, nums) => {
//     if (l >= r) return -1;
//     let mid = l + Math.floor((r - l) / 2);
//     if (nums[mid] === target) return mid;
//     else if (target > nums[mid]) {
//       return binSearch(mid + 1, r, target, nums);
//     } else {
//       return binSearch(l, mid, target, nums);
//     }
//   };

//   if (nums.length === 0) return -1;
//   if (nums[0] < nums[nums.length - 1])
//     return binSearch(0, nums.length, target, nums);

//   let pivot = findPivot(0, nums.length, nums);
//   console.log("pivot: ", pivot);
//   if (target === nums[pivot]) return pivot;
//   if (target >= nums[pivot] && target < nums[0]) {
//     console.log("right");
//     return binSearch(pivot, nums.length, target, nums);
//   } else if (target >= nums[0] && target <= nums[pivot - 1]) {
//     console.log("left");
//     return binSearch(0, pivot, target, nums);
//   }
// };
