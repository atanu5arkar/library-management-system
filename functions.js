import readlineSync from "readline-sync";
import { AudioBook, Book, EBook } from "./prototypes.js";

let
  books = [],
  title, author, isbn, availableCopies;

function commonInputs() {
  title = readlineSync.question("\nEnter title : ");
  author = readlineSync.question("Enter author : ");
  isbn = readlineSync.question("Enter ISBN : ");
  availableCopies = readlineSync.questionInt("Enter available copies : ");
}

function addBook() {
  commonInputs();
  const book = new Book(title, author, isbn, availableCopies);
  books.push(book);
  console.log("\nBook Added.");
}

function addEBook() {
  commonInputs();
  const
    fileSize = readlineSync.questionFloat("Enter file size (MB) : "),
    format = readlineSync.question("Enter format (e.g. PDF or EPUB) : "),
    eBook = new EBook(title, author, isbn, availableCopies, fileSize, format);

  books.push(eBook);
  console.log("\nEBook Added.");
}

function addAudioBook() {
  commonInputs();
  const
    duration = readlineSync.questionFloat("Enter duration (mins) : "),
    narrator = readlineSync.question("Enter narrator name : "),
    audBook = new AudioBook(title, author, isbn, availableCopies, duration, narrator);

  books.push(audBook);
  console.log("\nAudio Book Added.");
}

function listAllBooks() {
  console.log("\nList of Books :-\n");
  books.forEach((book, i) => console.log(`${i + 1}. ${book.describe()}`));
}

function returnBook() {
  isbn = readlineSync.question("\nEnter ISBN : ");
  const index = books.findIndex(obj => obj.isbn == isbn);

  if (index == -1) {
    console.log("\nNo record for the book. Try again!");
    return returnBook();
  }
  books[index].returnBook();
  console.log("\nBook data updated");
}

function borrowBook() {
  isbn = readlineSync.question("\nEnter ISBN : ");
  const index = books.findIndex(obj => obj.isbn == isbn);

  if (index == -1) {
    console.log("\nNo record for the book. Try again!");
    return returnBook();
  }
  books[index].borrowBook();
  console.log("\nBook data updated");
}


export { addBook, addEBook, addAudioBook, listAllBooks, returnBook, borrowBook };