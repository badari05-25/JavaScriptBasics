function sortEvenArray(array, n){
    let evenArray=[];
    let oddArray=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
        evenArray.push(array[i]);
        }else{
        oddArray.push(array[i]);
        }
    }
    evenArray.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArray.shift())
        }else(
            result.push(oddArray.shift()) 
        )
    }
    return result;
}

let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);
