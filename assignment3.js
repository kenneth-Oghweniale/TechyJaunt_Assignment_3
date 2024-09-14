//Creating a Class Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      let _isbn = isbn; 
      this.available = true; 
  
      // Getter for isbn
      this.getIsbn = function () {
        return _isbn;
      };
  
      // Setter for isbn
      this.setIsbn = function (newIsbn) {
        _isbn = newIsbn;
      };
    }
  
    // Method to borrow a book
    borrowBook() {
      if (this.available) {
        this.available = false;
        console.log("You have successfully borrowed '${this.title}'.");
      } else {
        console.log("Sorry, '${this.title}' is not available.");
      }
    }
  
    // Method to return a book
    returnBook() {
      this.available = true;
      console.log("'${this.title}' has been returned and is now available.");
    }
  }
  
  // Class Library
  class Library {
    constructor() {
      this.books = []; // Stores an array of Book objects
    }
  
    // Method to add a book to the library
    addBook(book) {
      this.books.push(book);
      console.log("'${book.title}' by ${book.author} has been added to the library.");
    }
  
    // Method to remove a book by its ISBN
    removeBook(isbn) {
      const index = this.books.findIndex(book => book.getIsbn() === isbn);
      if (index !== -1) {
        console.log("'${this.books[index].title}' has been removed from the library.");
        this.books.splice(index, 1);
      } else {
        console.log("No book with ISBN ${isbn} was found.");
      }
    }
  
    // Method to find a book by title
    findBookByTitle(title) {
      const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      if (book) {
        return "Title: ${book.title}, Author: ${book.author}, ISBN: ${book.getIsbn()}, Available: ${book.available}";
      }
      return "No book titled '${title}' found in the library.";
    }
  }
  
  // Class DigitalLibrary (inherits from Library)
  class DigitalLibrary extends Library {
    constructor() {
      super(); // Inherit the Library properties and methods
    }
  
    // Method to download a book if it's available
    downloadBook(isbn) {
      const book = this.books.find(book => book.getIsbn() === isbn);
      if (book) {
        if (book.available) {
          console.log("You have downloaded '${book.title}' by ${book.author}.");
        } else {
          console.log("Sorry, '${book.title}' is not available for download.");
        }
      } else {
        console.log("No book with ISBN ${isbn} was found.");
      }
    }
  }