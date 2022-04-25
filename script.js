const modal = document.querySelector('.modal');
const openModal = document.querySelector('.btn-add');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');

let myLibrary = [
     {
        title: 'Dune',
        author: 'Frank Herbert',
        pages: 412,
        read: false

    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function getUserBook() {
    let userTitle = document.getElementById('title').value;
    let userAuthor = document.getElementById('author').value;
    let userPages = document.getElementById('pages').value;
    let UserIsRead = document.getElementById('read').value;
    addBookToLibrary(userTitle, userAuthor, userPages, UserIsRead);
}

openModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
})