const myLibrary = [];

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

function showAllBooks(library) {
  library.map((book) => {
    console.log(book);
  });
}

console.log(theHobbit.toggleStatus());

// Loop through myLibrary and display each book on the page

// NEW BOOK button that brings up a form allowing user to input the new book

// Add a Status button on each book to  change its 'read' status
