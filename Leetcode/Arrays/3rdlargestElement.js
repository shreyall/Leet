// LEETCODE EASY  ( 414 )

const thirdMax = nums => {
  let one = Number.NEGATIVE_INFINITY;
  let two = Number.NEGATIVE_INFINITY;
  let three = Number.NEGATIVE_INFINITY;

  for (var i of nums) {
    if (i === one || i === two || i === three) continue;

    if (i > one) {
      (three = two), (two = one), (one = i);
    } else if (i > two) {
      (three = two), (two = i);
    } else if (i > three) {
      three = i;
    }
  }

  if (three === Number.NEGATIVE_INFINITY || three === two) return one;
  return three;
};
