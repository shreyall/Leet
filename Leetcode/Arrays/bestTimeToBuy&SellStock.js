// LEETCODE EASY ( 121 )

// brute force method applied, however, it could be done in linear time using dynamic programming

const maxProfit = prices => {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }
    }
  }
  return profit;
};

// dynamic programming solution  ... idea is to store the minimum amount to buy at,
//so you can calculate profit with respect to it

const maxProfit2 = prices => {
  let maxProfit = Number.NEGATIVE_INFINITY;
  let minPrice = prices[0];

  for (var i of prices) {
    let num = i - minPrice;
    if (num > maxProfit) {
      maxProfit = num;
    }
    if (i < minPrice) {
      minPrice = i;
    }
  }
};

var arr = [7, 1, 5, 3, 6, 4];

console.log(maxProfit2(arr));
