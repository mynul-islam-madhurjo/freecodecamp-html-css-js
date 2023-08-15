function repeatStr (n, s) {
    let count = n;
    let str = s;
    let newStr = '';
    for(let i = 0; i<count; i++){
        newStr+=str;
    }
    return newStr;
}

function repeatStr(n, s) {
    return s.repeat(n);
}

console.log(repeatStr(5,'mad'))