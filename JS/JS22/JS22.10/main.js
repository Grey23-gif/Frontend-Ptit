let arr = [];
let choice;
do {
    choice = prompt(`MENU\n\n1. Nhập vào mảng\n2. Hiển thị mảng\n3. Thêm phần tử\n4. Sửa phần tử\n5. Xóa phần tử\n6. Thoát\n\nLựa chọn của bạn:`);
    
    if (choice === "1") {
        let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy:");
        arr = input.split(",").map(item => item.trim());
    } else if (choice === "2") {
        alert("Mảng hiện tại: " + arr.join(", "));
    } else if (choice === "3") {
        let newElement = prompt("Nhập phần tử cần thêm:");
        arr.push(newElement);
    } else if (choice === "4") {
        let index = parseInt(prompt("Nhập vị trí phần tử cần sửa (bắt đầu từ 0):"));
        if (index >= 0 && index < arr.length) {
            let newValue = prompt("Nhập giá trị mới:");
            arr[index] = newValue;
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } else if (choice === "5") {
        let index = parseInt(prompt("Nhập vị trí phần tử cần xóa (bắt đầu từ 0):"));
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } else if (choice !== "6") {
        alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== "6");

alert("Chương trình kết thúc!");
