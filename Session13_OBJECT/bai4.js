let product = {
    productID: "007",
    productName: "Quạt máy",
    productPrice: "500.000đ",
    productQuantity: "18",
}
for (let key in product) {
    console.log("Thông tin sản phẩm :", key, product[key])
}