function shuffle(arr){
    //total shuffle area
    let shuffleArea = arr.length;
    while(shuffleArea > 0){
        // Pick out a random number
    shuffleArea--;
    let indexToChange = Math.floor(Math.random() * shuffleArea);
    let temp = arr[shuffleArea];
    arr[shuffleArea] = arr[indexToChange];
    arr[indexToChange] = temp;
    }
    return arr;
}
console.log(shuffle([1,2,3,4,5,6,7,8]));