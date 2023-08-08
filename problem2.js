// array = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// will return the count of true

a = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


function countSheeps(arrayOfSheep){
    let sum = 0;
    for( let i = 0; i< arrayOfSheep.length;i++){
        if (arrayOfSheep[i] === true){
            sum++;
        }
    }

    return sum;
}

function optimizedCountSheeps(arrayOfSheep){
    return arrayOfSheep.filter(Boolean).length;
}


console.log(optimizedCountSheeps(a));