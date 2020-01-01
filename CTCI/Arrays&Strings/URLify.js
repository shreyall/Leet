const urlify = (str, len) => {
  let spaceCount = 0;
  for (i = 0; i < len; i++) {
    if (str[i] === " ") {
      spaceCount++;
    }
  }
  let newstr = Array(len + spaceCount * 2).fill(null);
  let j = len - 1;
  for (i = newstr.length - 1; i >= 0; i--) {
    if (str[j] === " ") {
      newstr[i] = "0";
      newstr[i - 1] = "2";
      newstr[i - 2] = "%";
      i -= 2;
    } else {
      newstr[i] = str[j];
    }
    j--;
  }
  console.log(newstr.join(""));
};

urlify("Mr John Smith", 13);
