//=======================================================================> One way
// function cloneArr(arr){
// return [...arr];
// }

// let cloned = cloneArr([1,2,3,'utkarsh']);
// console.log(cloned);

//=======================================================================> Second way
let array = [1,2,3,'utkarsh']
function cloneArr(arr){
    let newArr = [];
    arr.forEach((e)=>{
        newArr.push(e);
    })
    return newArr;
}
let cloned = cloneArr(array);
console.log(cloned);
console.log(array);

cloned.pop();
console.log(cloned);
console.log(array);

//==========================================================================> Third way
// function cloneArr(arr){
// return arr.map((e)=>{
//     return e;
// })
// }
// let newArr = cloneArr(array);
// console.log(newArr);