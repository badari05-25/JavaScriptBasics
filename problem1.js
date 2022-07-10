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