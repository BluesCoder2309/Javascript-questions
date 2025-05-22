let arr = [
   { name: "Utkarsh", gender: "male" },
   { name: "Harshita", gender: "female" },
   { name: "Praveen", gender: "male" },
   { name: "Neha", gender: "female" },
   { name: "Deepesh", gender: "other" },
];

//===============================================================================> One way to do

// let newArr = arr.filter((obj)=>{
//     return obj.gender === 'male';
// });
// console.log(newArr);

//================================================================================> Other way to do
let count = 0;
arr.forEach((obj) => {
   if (obj.gender !== "male") count++;
});
for (let i = 0; i <= count; i++) {
   for (let j = 0; j < arr.length; j++) {
      if (arr[j].gender !== "male") {
         arr.splice(j, 1);
      }
   }
}
console.log(arr);