import Book from "./book";

export default class BookLibrary {
    books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    findBook(title: string) {
        let book = this.books.find(book => book.getTitle() === title);
        if (book === undefined) {
            return null;
        } else {
            return book;
        }
    }
}