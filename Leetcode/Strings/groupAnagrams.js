// LEETCODE MEDIUM ( 49 )

const groupAnagrams = strs => {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i]
      .split("")
      .sort()
      .join();
    if (map.has(temp)) {
      arr = map.get(temp);
      arr.push(strs[i]);
    } else {
      map.set(temp, [strs[i]]);
    }
  }
  let results = [];
  for (let value of map.values()) {
    results.push(value);
  }
  return results;
};

console.log(
  "returned: ",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
