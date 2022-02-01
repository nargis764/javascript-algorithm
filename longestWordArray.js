function findLongestWordLength(str) {
  let newArr = str.split(" ");
  let longestWordLength = 0;
  for(let i=0; i<newArr.length; i++) {
      if(newArr[i].length>longestWordLength) {
         longestWordLength = newArr[i].length;         
      }
  }

  
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");