function dataType(arg){
    return typeof arg;
}

console.log(dataType([]));
console.log(dataType({}));
console.log(dataType(1));
console.log(dataType('Ravi'));
console.log(dataType(true));
console.log(dataType(()=>{}));
console.log(dataType());