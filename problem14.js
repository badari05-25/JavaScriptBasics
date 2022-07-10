function leftRotateArray(arr, k) {
   let temp = [];
   for (let i = 0; i < k; i++) {
      temp.push(arr.shift());
   }
   arr = arr.concat(temp);
   return arr;
}


arr = [1, 2, 3, 4, 5, 6, 7]
let ans = leftRotateArray(arr, 3);
console.log(ans);