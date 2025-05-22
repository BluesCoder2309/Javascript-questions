function freq(arr) {
   let freq = {};
   arr.forEach((elem) => {
      if (freq.hasOwnProperty(elem)) freq[elem]++;
      else freq[elem] = 1;
   });
   //    console.log(freq);
   // Object.keys(freq) returns an array of the values of the keys in the object
  let ans = Object.keys(freq).reduce((acc, next) => {
    
      return freq[acc] > freq[next] ? acc : next;
   });
   console.log(ans);
}

freq([1, 2, 4, 2,  5, 6, 6, 6, 5, 8, 0, 56, 4, 56]);
