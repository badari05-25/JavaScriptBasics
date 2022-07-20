// **PROBLEM 3**

// The area of an equilateral triangle is ¼(√3a2) where "**a**" represents a side of the

// triangle. You are provided with the side "**a**". Find the area of the equilateral triangle.

// **Input Description:** ꢀ

// The side of an equilateral triangle is provided as the input.

// **Output Description:** ꢀ

// Find the area of the equilateral triangle and print the answer up to 2 decimal places

// after rounding off.

// **Sample Input :**

// 20

// **Sample Output :**

// 173.21

let a = parseInt(prompt("enter a number"));

let equilateral = (((Math.sqrt(3)) / 4) * a * a);

// console.log("the equilateral triangle" +" "+ equilateral);
// console.log("Round of" +" "+ equilateral.toFixed(2));
// or
console.log(equilateral.toFixed(2))
