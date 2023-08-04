const button = document.getElementById('myButton');
const messageContainer = document.getElementById('messageContainer');

array =['a', 'b', 'c', 'd', 'e', 'f', 'g'];

button.addEventListener('click', () => {
    // messageContainer.textContent = 'Button clicked!';
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        messageContainer.textContent = array[i];
    }
});

