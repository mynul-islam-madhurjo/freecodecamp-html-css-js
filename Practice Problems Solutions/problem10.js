/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.*/

const rps = (p1, p2) => {
    if (p1 === p2){
        return 'Draw!'
    }else if (p1 === 'rock' && p2 === 'scissors'){
        return 'Player 1 won!'
    }else if(p1 === 'scissors' && p2 === 'paper'){
        return 'Player 1 won!'
    }else if (p1 === 'paper' && p2 === 'rock'){
        return 'Player 1 won!'
    }else{
        return 'Player 2 won!'
    }
};

const oprps = (p1, p2) => {
    array= {
        rock : 'scissors',
        scissors : 'paper',
        paper : 'rock'
    }

    if(array[p1] === p2){
        return 'Player 1 won!'
    }else if (array[p2] === p1){
        return 'Player 2 won!'
    }else {
        return 'Draw!'
    }
};

const orps = (p1, p2) => {
    if (p1 === p2){
        return 'Draw!'
    }
    array= {
        rock : 'scissors',
        scissors : 'paper',
        paper : 'rock'
    }
    if (array[p1] === p2){
        return 'Player 1 won!'
    }else {
        return 'Player 2 won!'
    }
};

console.log(orps('scissors','scissors'))