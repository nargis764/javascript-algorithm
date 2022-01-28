function factorialize(num) {
  let result = 1;  
  if(num<=0) {
    result = 1;
  } else {
   result = num * factorialize(num-1); 
  }     
   return result;
}

console.log(factorialize(5));