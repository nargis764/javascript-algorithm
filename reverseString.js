function reverseString(str) {
  let output = Array.from(str);  
  let reverseString = output.reverse();  
  return reverseString.join("");
}

console.log(reverseString("hello"));