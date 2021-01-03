export default class Book {
    private title: string;
    private author: string;
    private dateOfBorrow: Date;
    private borrowDays: number;
    private borrower: string;
    private available: boolean;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.available = true;
        this.borrowDays = 0;
    }

    isAvailable() {
        return this.available;
    }

    borrow(person: string, date: Date) {
        if (this.isAvailable()) {
            this.dateOfBorrow = date;
            this.borrower = person;
            this.borrowDays = 14;
            return true;
        }

        return false;
    }

    extend(days = 14) {
        if (!this.isAvailable()) {
            this.borrowDays += days;
            return true;
        }

        return false;
    }

    return() {
        if (this.isAvailable()) {
            return false;
        } else {
            this.borrowDays = 0;
            this.dateOfBorrow = null;
            this.borrower = null;
            return true;
        }
    }

    //todo potentially add status class (available, borrowed, extended)
    status() {
        if (this.isAvailable()) {
            return "Is available!";
        } else {
            let returnDate = new Date(this.dateOfBorrow);
            returnDate.setDate(this.dateOfBorrow.getDate() + this.borrowDays);

            if (returnDate >= new Date(Date.now())) {
                return "Book should be returned at " + returnDate + " by " + this.borrower;
            } else {
                return "Book should have been returned at " + returnDate + " by " + this.borrower;
            }
        }
    }

    getTitle() {
        return this.title;
    }
}