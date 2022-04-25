const modal = document.querySelector('.modal');
const openModal = document.querySelector('.btn-add');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');

let myLibrary = [];

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
    let UserIsRead = document.getElementById('read').checked ? 'Read' : 'Not read';
    addBookToLibrary(userTitle, userAuthor, userPages, UserIsRead);
    updateBookToLibrary();
}

function updateBookToLibrary() {
    document.querySelector(".book-container").textContent = "";
    myLibrary.forEach((book) => {
      let card = document.createElement("div");
      let title = document.createElement("div");
      let author = document.createElement("div");
      let pages = document.createElement("div");
      let isRead = document.createElement("div");
      let removeButton = document.createElement("button");
  
      card.classList.add("card");
  
      title.classList.add("book-title");
      title.textContent = `Title: ${book.title}`;
      card.appendChild(title);
  
      author.classList.add("book-author");
      author.textContent = `Author: ${book.author}`;
      card.appendChild(author);
  
      pages.classList.add("book-pages");
      pages.textContent = `Pages: ${book.pages}`;
      card.appendChild(pages);
      
      isRead.classList.add("book-isRead");
      isRead.textContent = book.read;
      card.appendChild(isRead);
  
      removeButton.classList.add("remove-btn");
      removeButton.textContent = "Remove";
      card.appendChild(removeButton);
  
      removeButton.setAttribute("data", book.indexOfBook);
  
      removeButton.addEventListener("click", (e) => {
        myLibrary.splice(removeButton.dataset.data, 1);
        updateBookToLibrary();
      });
      document.querySelector(".book-container").appendChild(card);
    });
  }

openModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
})

let newBook = new Book('Dune', 'Frank Herbert', 421, 'Read');
myLibrary.push(newBook);

updateBookToLibrary();