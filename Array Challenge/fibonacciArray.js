// Problem 5 (Fibonacci Array) //

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  let length = fibArr.length;
  let i = 0;
  while (i < n - length) {
    result = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(result);
    i++;
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
