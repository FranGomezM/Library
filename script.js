const deck = document.getElementById('deck');
const adder = document.getElementById("adder");

function addBook() {
    const div = document.createElement('div');
    div.classList.add('card');
    deck.appendChild(div);
}

adder.onclick = addBook;