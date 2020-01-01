const isUnique = str => {
  let sorted = str
    .split("")
    .sort()
    .join("");
  console.log("sorted: ", sorted);
  for (i = 0; i < str.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return false;
    }
  }
  return true;
};

let string = "hutg9mnd!nk9";

console.log(isUnique(string));
