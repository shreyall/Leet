/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => {
    return a[0] - a[1] - (b[0] - b[1]);
  });
  let sumA = 0,
    sumB = 0;
  for (i = 0; i < costs.length / 2; i++) {
    sumA += costs[i][0];
  }
  for (i = costs.length / 2; i < costs.length; i++) {
    sumA += costs[i][1];
  }
  return sumA + sumB;
};
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
  ])
);
