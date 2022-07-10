var n=parseInt(prompt("enter a number"));
if (n < 0) {
console.log('Error');
}
else if (n === 0) {
console.log('0');
}
else {
let ans = n;
for (i = 1; i <= n; i++) {
ans = n*n;
}
console.log(ans);
}