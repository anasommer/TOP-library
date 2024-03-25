const myLibrary = [];
const containerEl = document.querySelector('.container');
const formEl = document.querySelector('form');
const addBtn = document.querySelector('#add-btn');

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
  // this.toggleStatus = function () {
  //   this.status = !this.status;
  // };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

myLibrary.push(theHobbit);

Book.prototype.toggleStatus = function () {
  if (this.status) {
    return 'read';
  }
  return 'not read yet';
};

function addBookToLibrary(title, author, pages, status) {
  const bookToAdd = new Book(title, author, pages, status);
  myLibrary.push(bookToAdd);
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

function showAllBooks(library) {
  myLibrary.map((book) => {
    containerEl.innerHTML += ` <div class="book">
    <h2>${book.title} by ${book.author}</h2>
    <p>Total pages: ${book.pages}</p>
    <p>Status: ${book.toggleStatus()}</p>
  </div>`;
  });
}
showAllBooks();

// NEW BOOK button that brings up a form allowing user to input the new book

// Add a Status button on each book to  change its 'read' status
