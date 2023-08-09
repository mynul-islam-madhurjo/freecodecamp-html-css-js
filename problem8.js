//Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

const summation = function (num) {
    // Code here
    let sum = 0;
    for(let i = 0; i<=num;i++){
        sum = sum+i;
    }
    return sum;
}

function opsummation(num) {
    return num * (num + 1) / 2
}

console.log(opsummation(2))