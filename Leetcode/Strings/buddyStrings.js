// LEETCODE EASY ( 859 )

const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;

  if (A === B) {
    let myMap = new Map();
    for (let i = 0; i < A.length; i++) {
      if (myMap.has(A.charAt(i))) return true;
      myMap.set(A[i]);
    }
    return false;
  } else {
    let first = -1,
      second = -1;
    for (let i = 0; i < A.length; i++) {
      if (A.charAt(i) !== B.charAt(i)) {
        if (first === -1) first = i;
        else if (second === -1) second = i;
        else return false;
      }
    }
    return (
      A.charAt(first) === B.charAt(second) &&
      A.charAt(second) === B.charAt(first)
    );
  }
};
