function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

Book.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};
console.log(theHobbit.info());
