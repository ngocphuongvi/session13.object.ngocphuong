let numOfStu = parseFloat(prompt("Nhập vào số lượng sinh viên: "));
let stuInfo = [];
for (let i = 0; i < numOfStu; i++) {
    let student = new Object();
    student.studentID = prompt("ID của sinh viên", i + 1, " là: ");
    student.studentName = prompt("Tên của sinh viên", i + 1, " là: ");
    stuInfo.push(student)
}
console.log("Thông tin sinh viên", stuInfo)