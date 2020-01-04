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
