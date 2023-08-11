function myCallBack(num){
    return num * 2;
}

function mainFunction(randomNumber,call,callback){
    let result = randomNumber;

    if (call){
        result = callback(result);
    }

    return result;
}
//Alternative
// console.log(mainFunction(20,true,myCallBack))
console.log(mainFunction(20,true, function(num) {
    return num*2;
}))

console.log(mainFunction(20,true, (num) => {
    return num*2;
}))

console.log(mainFunction(20,true, num => {
    return num*2;
}))

console.log(mainFunction(20,true, num => num*2))

