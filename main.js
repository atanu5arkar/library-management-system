import readlineSync from "readline-sync";
import { addBook, addEBook, addAudioBook, listAllBooks, returnBook, borrowBook } from "./functions.js";

const options = [
  "Add Book",
  "Add EBook",
  "Add AudioBook",
  "List All Books",
  "Borrow Book",
  "Return Book",
  "Exit"
];

const fns = {
  1: addBook,
  2: addEBook,
  3: addAudioBook,
  4: listAllBooks,
  5: borrowBook,
  6: returnBook
}

function printMenu() {
  console.log("\n\t\t\tLIBRARY MANAGEMENT SYSTEM\n");  
  options.forEach((opt, i) => console.log(`${i + 1}. ${opt}`) );
}

function cliLogic() {
  printMenu();
  const choice = readlineSync.questionInt("\nChoose an option : ");

  if (choice == 7) {
    console.log("\nSee ya!");
    return;
  }
  else if (1 <= choice < options.length) {
    fns[choice]();
    console.log(`\n${'-'.repeat(100)}`);
    return cliLogic();
  }
  else {
    console.log("\nOption unavailable!");
    return cliLogic();
  }
}

console.clear();
cliLogic();