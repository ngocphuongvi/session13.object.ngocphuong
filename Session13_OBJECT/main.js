//C1: Object Literal
let book1 = {
    bookID: "B001",
    bookName: "Chí Phèo",
    bookPrice: "30.000đ",
    bookAuthor: "Nam Cao",
    bookPublishHouse: "Nhã Nam",
    info: function () {
        console.log("Hãy bình chọn cho sách này");
    }
}
console.log("Thông tin sách 1:", book1)


function Book2(bookID, bookName, bookPrice, bookAuthor, bookPublishHouse) {
    return {
        bookID, bookName, bookPrice, bookAuthor, bookPublishHouse,
        info: function () {
            console.log("Hãy bình chọn cho sách này");
        }
    }
}
var book2 = new Book2("B002", "Lão Hạc", "35.000đ", "Nam Cao", "Phương Đông")
console.log("Thông tin sách 2:", book2)



var book3 = new Object();
book3.bookID = "B003";
book3.bookName = "Tắt đèn";
book3.bookPrice = "40.000đ";
book3.bookAuthor = "Ngô Tất Tố";
book3.bookPublishHouse = "Nhã Nam";
book3.info = function () {
    console.log("Hãy bình chọn cho sách này");
}
console.log("Thông tin sách 3:", book3)



class Book4 {
    constructor(bookID, bookName, bookPrice, bookAuthor, bookPublishHouse) {
        this.bookID = bookID;
        this.bookName = bookName;
        this.bookPrice = bookPrice;
        this.bookAuthor = bookAuthor;
        this.bookPublishHouse = bookPublishHouse;
    }
    info() {
        console.log("Hãy bình chọn cho sách này");
    }
}
var book4 = new Book4("B004", "Sống mòn", "45.000đ", "Nam Cao", "Hà Nội")
console.log("Thông tin sách 4:", book4)
