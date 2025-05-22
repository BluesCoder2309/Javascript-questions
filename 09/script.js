// how're you utkarsh?

function capitalize(str){
   let firstCap = str.split(' ').map((word) => {
       return word.charAt(0).toUpperCase() + word.substring(1);
    });

    return firstCap.join(' ');
}

console.log(capitalize("how're you utkarsh?"));
console.log(capitalize("mutual funds are subject to market riska. please read the documents carefully before investing."));