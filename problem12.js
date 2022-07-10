function countpalindromicNum(n){
    count=0;
    for(i=1;i<=n;i++){
        reverse =parseInt(i.toString().split('').reverse().join('')) 
        if(i==reverse){
            count++;
        }
    }
 return count;
}


// Driver program to test above functions
let ans = countpalindromicNum(123468);
console.log(ans);