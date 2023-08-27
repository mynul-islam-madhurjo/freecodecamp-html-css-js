/*In this kata you will create a function that takes a list of
non-negative integers and strings and returns a new list with the strings filtered out.*/

const arr = [1,2,'a','b'];

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(callback);
}

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(arrItem => arrItem >= 0 && typeof arrItem === 'number');
}

function callback(arrItem){
    if(arrItem >= 0 && typeof arrItem === 'number'){
        return true
    }else{
        return false
    }
}

console.log(filter_list(arr))

