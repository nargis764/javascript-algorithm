// Problem 1 (Always Hungry) //

function alwaysHungry(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === "food") {
      console.log("yummy");
    } else if (arr.indexOf("food") == -1) {
      console.log("I'm hungry");
      break;
    }
    i = i + 1;
  }
}
alwaysHungry([3.14, "food", "pie", "true", "food"]);
//alwaysHungry([4, 1, 5, 7, 2]);
