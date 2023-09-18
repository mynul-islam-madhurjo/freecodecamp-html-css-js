function evenOrOdd(number) {
    if (number % 2 == 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}

function opevenOrOdd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd'
}

console.log(opevenOrOdd(4))