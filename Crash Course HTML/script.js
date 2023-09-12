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

function addLine(){
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new line";
    const newDocument = document.querySelector("#add-line");
    newDocument.appendChild(newElement);
}
