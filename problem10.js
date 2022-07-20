
// **PROBLEM 10**

// Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements

// in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed

// are the odd and sorted are the even’. Loki manages to decode the clue which translates

// to “sort the even positioned elements of an array, starting from the element at index 0,

// in ascending order”. Manipulate the array so as to help Loki steal the tesseract.

// **Input Description:** ꢀ

// Size of the array followed by the elements of the array

// **Output Description:** ꢀ

// Even index array elements sorted in ascending order

// **Sample Input :**

// 5 3 9 1 44 6

// **Sample Output :**

// 1 9 3 44 6


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
