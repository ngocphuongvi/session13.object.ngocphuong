class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}

let books = [
    new Book("Nam Cao", "Chí Phèo"),
    new Book("Ngô Tất Tố", "Tắt đèn"),
    new Book("Nguyễn Nhật Ánh", "Tôi thấy hoa vàng trên cỏ xanh"),
    new Book("Harper Lee", "Giết con chim nhạn"),
    new Book("J.K. Rowling", "Harry Potter và hòn đá phù thủy")
];

function findBookByAuthor(author) {
    let foundBooks = books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    if (foundBooks.length > 0) {
        console.log("Thông tin sách tìm được:");
        foundBooks.forEach(book => {
            console.log("Tác giả :", book.author, ", Tên sách :", book.name);
        });
    } else {
        console.log("Không tìm thấy sách");
    }
}

let author = prompt("Nhập tên tác giả:");
findBookByAuthor(author);
