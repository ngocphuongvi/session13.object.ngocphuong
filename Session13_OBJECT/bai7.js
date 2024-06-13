let users = [];

function validateUserData(id, user_name, email, password) {
    if (!user_name || user_name.length < 3) {
        console.log("Tên người dùng không được ngắn hơn 3 ký tự.");
        return false;
    }
    if (!email || !validateEmail(email)) {
        console.log("Email không đúng định dạng.");
        return false;
    }
    if (!password || password.length < 8) {
        console.log("Mật khẩu phải có ít nhất 8 ký tự.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function addUser() {
    let id = prompt("Nhập ID:");
    let user_name = prompt("Nhập tên người dùng:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    if (validateUserData(id, user_name, email, password)) {
        let user = {
            id: id,
            user_name: user_name,
            email: email,
            password: password
        };
        users.push(user);
        console.log("Thêm người dùng thành công:", user);
    } else {
        console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
        addUser();
    }
}

addUser();

console.log(users);
