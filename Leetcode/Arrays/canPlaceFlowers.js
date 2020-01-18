// LEETCODE EASY ( 605 )

const canPlaceFlowers = (flowerbed, n) => {
  let planted = 0,
    prev = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i + 1] !== 1 && prev === 0) {
      planted++;
      prev = 1;
    } else {
      prev = flowerbed[i];
    }
  }

  return planted >= n;
};
