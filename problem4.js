function greet(name) {
    if (name === "Madhurjo")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

function optimizedGreet(name) {
    return "Hello, " + (name == 'Madhurjo' ? 'my love!' : name) + '!';
}

console.log(optimizedGreet('User'));
