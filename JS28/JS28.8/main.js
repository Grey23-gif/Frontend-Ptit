// Hàm tạo Employee
function Employee(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Object quản lý nhân viên
let EmployeeManager = {
    employees: [],

    // Thêm nhân viên mới
    addEmployee: function () {
        let id = parseInt(prompt("Nhập ID nhân viên:"));
        let name = prompt("Nhập tên nhân viên:");
        let position = prompt("Nhập vị trí công việc:");
        let salary = parseFloat(prompt("Nhập mức lương:"));

        this.employees.push(new Employee(id, name, position, salary));
        alert(`Nhân viên ${name} đã được thêm thành công!`);
    },

    // Xóa nhân viên theo ID
    removeEmployee: function () {
        let id = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
        let index = this.employees.findIndex(emp => emp.id === id);

        if (index !== -1) {
            let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${this.employees[index].name}?`);
            if (confirmDelete) {
                this.employees.splice(index, 1);
                alert("Đã xóa nhân viên thành công!");
            }
        } else {
            alert("Không tìm thấy nhân viên với ID này.");
        }
    },

    // Cập nhật mức lương của nhân viên theo ID
    updateSalary: function () {
        let id = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương:"));
        let employee = this.employees.find(emp => emp.id === id);

        if (employee) {
            let newSalary = parseFloat(prompt(`Nhập mức lương mới cho ${employee.name}:`));
            employee.salary = newSalary;
            alert(`Đã cập nhật lương cho ${employee.name} thành ${newSalary}`);
        } else {
            alert("Không tìm thấy nhân viên.");
        }
    },

    // Tìm kiếm nhân viên theo tên
    searchEmployee: function () {
        let keyword = prompt("Nhập tên nhân viên cần tìm:");
        let result = this.employees.filter(emp => emp.name.toLowerCase().includes(keyword.toLowerCase()));

        if (result.length > 0) {
            alert(`Tìm thấy nhân viên:\n${result.map(emp => `${emp.name} - ${emp.position} -${emp.salary}`).join("\n")}`);
        } else {
            alert("Không tìm thấy nhân viên.");
        }
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 👨‍💼 QUẢN LÝ NHÂN VIÊN =========
1️⃣  Thêm nhân viên mới.
2️⃣  Xóa nhân viên theo ID.
3️⃣  Cập nhật mức lương của nhân viên theo ID.
4️⃣  Tìm kiếm nhân viên theo tên.
5️⃣  ❌ Thoát
=======================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            EmployeeManager.addEmployee();
            break;
        case 2:
            EmployeeManager.removeEmployee();
            break;
        case 3:
            EmployeeManager.updateSalary();
            break;
        case 4:
            EmployeeManager.searchEmployee();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 5);
