console.log(Math.PI)
console.log(Math.abs(-60))
console.log(Math.ceil(Math.PI))
console.log(Math.floor(Math.PI))
console.log(Math.round(Math.PI))
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))
//Anything we multiply with random number
// we will get that number in between 0 to that number
console.log(Math.random())

// We can use this to pick any value from an Array
const arr = ['Mynul','Islam', 'Madhurjo']

const randomNumber = Math.floor(Math.random()* arr.length)

console.log(arr[randomNumber])

//Converting a string to number Nan to Number
console.log(Number('30'));