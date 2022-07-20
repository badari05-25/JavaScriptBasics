// **PROBLEM 2**

// You are given with a number "N", find its cube.

// **Input Description:** ꢀ

// A positive integer is provided as an input.

// **Output Description:** ꢀ

// Find the cube of the number.

// **Sample Input :**

// 2

// **Sample Output :**

// 8

// 1

const number = parseInt(prompt('Enter a number'));

if (number < 0) {
    console.log('Error! The cube for negative number does not exist.');
}

else if (number === 0) {
    console.log(`The cube of ${number} is 1.`);
}

// if number is positive
else {
    let cube = 1;
    cube = number * number * number;
    // console.log(`The cube of ${number} is ${cube}.`);
    console.log(cube);
}
