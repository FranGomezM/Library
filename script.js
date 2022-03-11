const deck = document.getElementById('deck');
const adder = document.getElementById("adder");
const form = document.getElementById('form');
const closeFormBtn = document.getElementById('closeButton');
const submit = document.getElementById('submit_btn');

let myLibrary = [];

function Book(img, name, author, pages, read) {
    this.img = img;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const imgRoot = document.getElementById('imgRoot').value;
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    myLibrary[myLibrary.length] = new Book(imgRoot, bookName, author, pages, read);
    
}

function addBook() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');
    const book = myLibrary[myLibrary.length-1]
    div.classList.add('card');
    img.src = book.img;
    name.textContent = book.name;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    deck.appendChild(div);
}

function showForm() {
    form.classList.toggle('show');
}

adder.onclick = showForm;
closeFormBtn.onclick = showForm;

submit.addEventListener('click', showForm);
submit.addEventListener('click', addBookToLibrary);
submit.addEventListener('click', addBook);


