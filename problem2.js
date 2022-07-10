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
