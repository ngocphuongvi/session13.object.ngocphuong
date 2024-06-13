class Product {
    constructor(id, product_name, price) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }
}

let products = [
    new Product(1, "Product A", 3000),
    new Product(2, "Product B", 1000),
    new Product(3, "Product C", 2000),
    new Product(4, "Product D", 5000)
];

function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

function displayProducts(products) {
    console.log("Danh sách sản phẩm đã sắp xếp theo giá tăng dần:");
    products.forEach(product => {
        console.log("ID :", product.id, ", Tên sản phẩm :", product.product_name, ", Giá :", product.price);
    });
}

let sortedProducts = sortProductsByPrice(products);
displayProducts(sortedProducts);
