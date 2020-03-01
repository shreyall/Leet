// LEETCODE EASY (1331)

const arrayRankTransform = arr => {
  //edge cases to think about
  if (!arr) return [];

  let sorted = [...arr].sort((a, b) => {
    return a - b;
  });
  let numberMap = new Map();
  let r = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1]) {
      numberMap.set(sorted[i], r);
      r++;
    }
  }
  let results = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    results[i] = numberMap.get(arr[i]);
  }

  return results;
};

console.log(arrayRankTransform([40, 40, 10, 20, 30]));
