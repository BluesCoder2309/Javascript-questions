var str = 'saare jahaan se acha hindustaan humara';

const reversedStr = str.split(' ').map(function (word){
return word.split('').reverse().join('');
});

console.log(reversedStr.join(' '));