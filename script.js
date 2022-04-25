const modal = document.querySelector('.modal');
const openModal = document.querySelector('.btn-add');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');

// Array for housing book objects
let myLibrary = [];

// Object Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Adds newly created book object to myLibrary array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Gets values from form on submit
function getUserBook() {
    let userTitle = document.getElementById('title').value;
    let userAuthor = document.getElementById('author').value;
    let userPages = document.getElementById('pages').value;
    let UserIsRead = document.getElementById('read').checked ? 'Read' : 'Not read';
    addBookToLibrary(userTitle, userAuthor, userPages, UserIsRead);
    updateBookToLibrary();
}

// Updates book-container with whatever is currently in the myLibrary array
function updateBookToLibrary() {
    document.querySelector(".book-container").textContent = "";
    myLibrary.forEach((book) => {
    
      // Create divs and buttons to house info
      let card = document.createElement("div");
      let title = document.createElement("div");
      let author = document.createElement("div");
      let pages = document.createElement("div");
      let isRead = document.createElement("div");
      let removeButton = document.createElement("button");
    
      card.classList.add("card");
  
      title.classList.add("book-title");
      title.textContent = book.title;
      card.appendChild(title);
  
      author.classList.add("book-author");
      author.textContent = `Written by ${book.author}`;
      card.appendChild(author);
  
      pages.classList.add("book-pages");
      pages.textContent = `${book.pages} pages`;
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

// Listener for add button to pop up form modal
openModal.addEventListener('click', () => {
    form.reset();
    modal.showModal();
})

// Default book objects to populate array
let newBook1 = new Book('Dune', 'Frank Herbert', 421, 'Read');
myLibrary.push(newBook1);
let newBook2 = new Book('Normal People', 'Sally Rooney', 256, 'Read');
myLibrary.push(newBook2);
// display the books on page 
updateBookToLibrary();