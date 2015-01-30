function isEven(number) {
  // % (the remainder operator) can be used to test whether a number is even
  // or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define
  // whether a positive whole number is even or odd:
  //
  // • Zero is even.
  // • One is odd.

  // For any other number N, its evenness is the same as N - 2.
  // Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
  // Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
 if(number<0){
  number=-number;
 }
 if (number ===0){
  return true;
 }
 if (number ===1){
 return false;
 }
 number = number-2;
return isEven(number);
 }

function pascal(row, col) {
  // Write a procedure that computes the elements of Pascal's triangle by means of a recursive process.
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1
  //
  // pascal(4, 2)
  // // → 6
 if(col<=row){
  if(col===0 || row===col){
   return 1;
  } else{
   return pascal(row-1, col-1) + pascal(row-1, col);
  }
 }
}  

function sqrt(x) {
  // Square roots by Newton's method http://en.wikipedia.org/wiki/Newton%27s_method
  // Also you can look at the problem description in SICP[1.1.7] http://newstar.rinet.ru/~goga/sicp/sicp.pdf
  // You should write a function that takes a number and computes square root
  // You can build solution based on functions structure defined below or you can make up your own

var guess = 1;
return sqrtIter(guess, x);
}

function sqrtIter(guess, x) {
 if (isGoodEnough(guess, x)){
  return guess;
 } else{
  return sqrtIter(improve(guess, x), x);
 }
}

function improve(guess, x) {
 return average(guess, x/guess);
}

function average(x, y) {
 return (x+y)/2;
 }

function isGoodEnough(guess, x) {

 if(Math.abs(square(guess)-x)<1e-20){
  return true;
 }else{
  return false;
 }
}

function square(x) {
 return x*x;
}


module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
