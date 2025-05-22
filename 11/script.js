function occ(str){
    let occurences = {};
    str.split('').forEach((elem)=>{
       if (occurences.hasOwnProperty(elem) === false){
        occurences[elem] = 1;
       } else {
        occurences[elem]++;
       }
    });
    return occurences;
}

console.log(occ('apple'));
console.log(occ('malayalam'));