// **PROBLEM 1**

// You are provided with a number, "**N**". Find its factorial.

// **Input Description:** ꢀ

// A positive integer is provided as an input.

// **Output Description:** ꢀ

// Print the factorial of the integer.

// **Sample Input :**

// 5

// **Sample Output :**

// 120


let n = parseInt(prompt("enter a number"));
let fact = 1;

if(n>=0){
  for(let i=1;i<=n;i++){
    fact = fact * i;
  }
}else{
  console.log("enter a positive number");
}
// console.log(`The factorial of ${n} is ${fact}.`);
console.log(fact);
