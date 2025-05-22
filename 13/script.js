let arr = [1, 2, "utkarsh", 5, "ravi", "vini", 3, 7];
let sum = 0;

arr.forEach((e) => {
   if (typeof e === "number") {
      sum = sum + e;
   }
});

console.log(sum);