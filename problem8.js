// **PROBLEM 8**

// \- Let "A" be a string. Remove all the whitespaces and find it's length.

// (Print "***Error***" if **N** = negative value and 0 if **N** = 0).

// **Input Description:** ꢀ

// A string is provide as an input

// **Output Description:** ꢀ

// Remove all the whitespaces and then print the length of the remaining string.

// **Sample Input :**

// Lorem Ipsum

// **Sample Output :**

// 10

// 4

const str = prompt("enter a name");

let total = str.replace(/\s/g,'');

console.log(total + " " + total.length);
