function retrieve(arr, n=1){
if(n<= arr.length){
    for(let i = 0; i < n; i++){
        console.log(arr[arr.length - 1 - i]);
    }
} else {
    console.log('Chaadar se lambe pair mat failao Gabbar!');
}
}

retrieve([1,2,3,4,5],2);