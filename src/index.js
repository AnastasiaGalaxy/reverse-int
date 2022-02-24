module.exports = function reverse (n) {
  const positiveNum = Math.abs(n).toString();
  const arr = [];
  const reversedArr = [];
  for (let i = 0; i < positiveNum.length; i++) {
    arr[i] = positiveNum.charAt(i);
    reversedArr.unshift(arr[i]);
  }
  return +reversedArr.join('')
}
