//Passing parameters

/*(function myFunction(num1,num2) {
    console.log(num1,num2);
})(1,2);*/ // Passing arguments 1,2

// Arrow function
/*let myFunction2 = () => {
    return 'working';
}*/
 // console.log(myFunction2());

//Creating a function inside an object
let myFunction3 = () => {
    return 'true';
};

const myObj = {
    test: myFunction3()
};

console.log(myObj.test);








