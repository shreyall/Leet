/* This solution uses a hashmap, counts the characters in str1 and counts down from hashmap for str2 */ 

// const isPermutation = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let myMap = new Map();
//   for (i = 0; i < str1.length; i++) {
//     if (myMap.has(str1.charAt(i))) {
//       let val = myMap.get(str1.charAt(i));
//       val += 1;
//       myMap.set(str1.charAt(i), val);
//     } else {
//       myMap.set(str1.charAt(i), 1);
//     }
//   }
//   console.log(myMap);
//   for (i = 0; i < str2.length; i++) {
//     if (myMap.has(str2.charAt(i))) {
//       val = myMap.get(str2.charAt(i));

//       val -= 1;
//       myMap.set(str2.charAt(i), val);
//     } else {
//       return false;
//     }
//   }
//   let flag = true;
//   myMap.forEach((value, key) => {
//     console.log("key: ", key, "val: ", value);
//     if (value !== 0) {
//       flag = false;
//     }
//   });
//   return flag;
// };

/* This solution sorts the strings first and then compares the sorted strings */

// const isPermutation = (str1, str2) => {
//   sorted1 = str1
//     .split("")
//     .sort()
//     .join("");
//   sorted2 = str2
//     .split("")
//     .sort()
//     .join("");

//   console.log("sorted1: ", sorted1, "sorted2: ", sorted2);
//   return sorted1.localeCompare(sorted2) === 0;
// };

console.log(isPermutation("batt", "tabb"));
