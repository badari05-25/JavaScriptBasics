let root1, root2;

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let squroot = b * b - 4 * a * c;

if (squroot > 0) {
    root1 = (-b + Math.sqrt(squroot)) / (2 * a);
    root2 = (-b - Math.sqrt(squroot)) / (2 * a);

  console.log(root1.toFixed(2) + " " + root2.toFixed(2))
}
