class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }
  describe() {
    return `${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available Copies: ${this.availableCopies}`
  }
  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
    }
  }
  returnBook() {
    this.availableCopies++;
  }
}

class EBook extends Book {
  constructor(title, author, isbn, availableCopies, fileSize, format) {
    super(title, author, isbn, availableCopies); // invokes the parent class constructor
    this.fileSize = fileSize;
    this.format = format;
  }
  describe() { 
    return `${super.describe()}, Format: ${this.format}, File Size: ${this.fileSize} MB`;
  }
}

class AudioBook extends Book {
  constructor(title, author, isbn, availableCopies, duration, narrator) {
    super(title, author, isbn, availableCopies); // invokes the parent class constructor
    this.duration = duration;
    this.narrator = narrator;
  }
  describe() { 
    return `${super.describe()}, Duration: ${this.duration} mins, Narrator: ${this.narrator}`;
  }
}

export { Book, EBook, AudioBook };