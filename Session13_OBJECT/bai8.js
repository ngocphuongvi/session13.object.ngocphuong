class User {
    constructor(id, user_name, email, password) {
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
}

let users = [];

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function registerUser() {
    const id = users.length + 1;
    const user_name = prompt("Nhập tên người dùng:");
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    if (!user_name) {
        console.log("Tên không được để trống");
        return;
    }

    if (!validateEmail(email)) {
        console.log("Email không đúng định dạng");
        return;
    }

    if (password.length < 8) {
        console.log("Mật khẩu phải dài tối thiểu 8 ký tự");
        return;
    }

    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại");
        return;
    }

    const newUser = new User(id, user_name, email, password);
    users.push(newUser);
    console.log("Đăng ký thành công");
}

function loginUser() {
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log("Đăng nhập thành công");
        console.log("ID:", user.id, ", Tên người dùng:", user.user_name, ", Email:", user.email);
    } else {
        console.log("Đăng nhập thất bại");
    }
}

function showMenu() {
    let choice;
    do {
        choice = parseInt(prompt("Chọn chức năng:\n1. Đăng ký tài khoản\n2. Đăng nhập\n3. Thoát chương trình"));
        switch (choice) {
            case 1:
                registerUser();
                break;
            case 2:
                loginUser();
                break;
            case 3:
                console.log("Thoát chương trình");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
        }
    } while (choice !== 3);
}

showMenu();
