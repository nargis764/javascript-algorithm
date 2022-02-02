// Problem 3 (Better than average) //

function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  var count = 0;
  let average = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
    average = sum / length;
  }

  // count how many values are greated than the average
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > average) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
