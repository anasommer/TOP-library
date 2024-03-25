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
  this.toggleStatus = function () {
    this.status = !this.status;
  };
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showAllBooks(myLibrary);
}

function toggleBookStatus(index) {
  myLibrary[index].toggleStatus();
  showAllBooks(myLibrary);
}

function addBookToLibrary(title, author, pages, status) {
  const bookToAdd = new Book(title, author, pages, status);
  myLibrary.push(bookToAdd);
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').checked;

  addBookToLibrary(title, author, pages, status);

  showAllBooks(myLibrary);
});

function showAllBooks(library) {
  containerEl.innerHTML = '';
  myLibrary.map((book, index) => {
    containerEl.innerHTML += ` <div class="book">
    <h2>${book.title} by ${book.author}</h2>
    <p>Total pages: ${book.pages}</p>
    <p>Status: ${book.status ? 'read' : 'not read yet'}</p>
    <button onclick='toggleBookStatus(${index})' id="status-btn">Change status</button>
    <button onclick='removeBook(${index})' id="remove-btn">Remove</button>
  </div>`;
  });
}
