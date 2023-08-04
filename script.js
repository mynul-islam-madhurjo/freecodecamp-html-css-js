const button = document.getElementById('myButton');
const messageContainer = document.getElementById('messageContainer');

button.addEventListener('click', () => {
    messageContainer.textContent = 'Button clicked!';
});
