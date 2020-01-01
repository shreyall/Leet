/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//   let len1 = num1.length,
//     len2 = num2.length;
//   let longer = len1 > len2 ? len1 : len2;
//   let sum = 0,
//     carry = 1;
//   for (let i = longer - 1; i >= 0; i--) {
//     digit1 = num1.charAt(i) * "1";
//     digit2 = num2.charAt(i) * "1";
//     out = digit1 + digit2;
//     console.log("------------------");
//     console.log("out: ", out);
//     if (out > 9) {
//       console.log(">9");
//       carry *= 10;
//       sum += carry + Math.floor(out % 10);
//     } else {
//       console.log("<9");
//       carry *= 10;
//       sum += out;
//     }
//     console.log("sum: ", sum);
//   }
// };

var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
    const digitsSum = digit1 + digit2 + carry;
    console.log("digitsum", digitsSum);
    sum = `${digitsSum % 10}${sum}`;
    console.log("sum: ", sum);
    carry = Math.floor(digitsSum / 10);
    console.log("carry: ", carry);
    console.log("------------------------");
  }

  return sum;
};

addStrings("5049", "5083");
//console.log(Math.floor(12 % 10));
