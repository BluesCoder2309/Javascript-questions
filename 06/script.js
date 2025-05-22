// =====================================================================>One way to do it
// function reverseNum(num){
//    return Number(num.toString().split('').reverse().join(''));
// }

// console.log(reverseNum(23));

//=======================================================================>Other way to do it.
function reverseNum(num) {
    var reversed = 0;
   while (num > 0) {
      var remainder = num % 10;
      reversed = reversed*10+ remainder;
      num = Math.floor(num / 10);
   }
   return reversed;
}

console.log(reverseNum(2328));
