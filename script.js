class Users {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowedBooks = [];
  }
  borrow(book) {
    if (!book.canBorrow) {
      return;
    }
    this.borrowedBooks.push(book);
  }

  isBorrowed(book) {
    return this.borrowedBooks.includes(book);
  }

  getBorrowedBooks() {
    return this.borrowedBooks.map((x) => x);
  }
}

class bookReport {
  constructor(firstName) {
    this.firstName = firstName;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " from " +
          element.city +
          " borrowed these books: "
      );
      element.borrowedBooks.forEach((book) => {
        console.log(`${book.title} which was written by ${book.author}`);
      });
      console.log("");
    });
  }
  isBorrowed(bookToCheck) {
    return this.Users.some((allUsers) => allUsers.isBorrowed(bookToCheck));
  }
}

class Book {
  constructor(title, author, canBorrow) {
    this.title = title;
    this.author = author;
    this.canBorrow = canBorrow ? true : false;
  }
}

let user1 = new Users("Karin", "kon", "KGC");
let user2 = new Users("Oleg", "Melihin", "Ashkelon");
let user3 = new Users("Yulia", "kon", "TLV");

let book = new Book("Tom Sawyer", "Mark Twain", "abcd");
let book2 = new Book("Encyclopedia Britannica", "", false);
let book3 = new Book(
  "Harry Potter and the Philosopher's Stone",
  " J. K. Rowling",
  true
);
let book4 = new Book("Oxford Dictionary of the English Language", "", false);
let book5 = new Book(
  "Adventures of Sherlock Holmes",
  "Arthur Conan Doyle",
  true
);

user1.borrow(book);
user1.borrow(book2);
user1.borrow(book3);
user1.borrow(book4);

user2.borrow(book2);
user2.borrow(book3);
user2.borrow(book4);
user2.borrow(book5);

user3.borrow(book);
user3.borrow(book3);
user3.borrow(book5);

let a = new bookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
