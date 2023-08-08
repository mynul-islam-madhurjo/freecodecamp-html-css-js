// Return the vowel count of a string
function getCount(str) {
    array1 = ['a','e','i','o','u'];
    array2 = str.split('');
    let sum = 0;
    for(let i=0;i<array2.length;i++){
        if (array1.includes(array2[i])){
            sum++;
        }
    }
    return sum;
}

function optimizedGetCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const num = str.split('').filter((char) => vowels.includes(char));
    return num.length;
}


function optimizedMoreGetCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(optimizedMoreGetCount('abracadabra'))