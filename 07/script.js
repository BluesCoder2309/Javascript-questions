function palindromeChecker(str){
    let reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome.`)
    }
}

palindromeChecker('malayalam');
palindromeChecker('chess');