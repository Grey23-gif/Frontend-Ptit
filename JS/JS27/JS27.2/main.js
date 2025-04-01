function add_student(student) {
    let n = Number(prompt("Nhập số lượng sinh viên: "));
    for(let i = 0; i < n; i++){
        let name = prompt("Nhập tên sinh viên: ");
        student.push([name]);
    }
}
function show_student(student) {
    if(student.length === 0){
        alert("Danh sách sinh viên trống.");
        return;
    }
    let studentList = student.map(item => item[0]).join("\n");
    alert("Danh sách sinh viên: \n"+ studentList);
}
function find_student(student) {
    let name = prompt("Nhập tên sinh viên cần tìm: ");
    let index = student.findIndex(item => item[0] === name);
    if(index !== -1){
        alert(`Sinh viên ${student[index][0]} có trong danh sách.`);
    }else{
        alert(`Sinh viên ${name} không có trong danh sách.`);
    }
}
function delete_student(student) {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = student.findIndex(item => item[0] === name);
    if(index !== -1){
        student.splice(index, 1);
        alert(`Đã xóa sinh viên ${name} khỏi danh sách.`);
    }else{
        alert(`Sinh viên ${name} không có trong danh sách.`);
    }
}
let choice;
let student = [];
do{
    choice = Number(prompt(`
        ================MENU=================
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên (hiển thị tên đầy đủ sinh viên nếu tìm thấy).
        4. Xóa sinh viên khỏi danh sách (Nếu có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên).
        5. Thoát
        =====================================
        Chọn thao tác: `));
    switch(choice)
    {
        case 1:
            add_student(student);
            break;
        case 2:
            show_student(student);
            break;
        case 3:
            find_student(student);
            break;
        case 4:
            delete_student(student);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
}while(choice !== 5);