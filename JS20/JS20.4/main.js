let inputString = prompt("Nhập vào một chuỗi bất kỳ:");
let searchChar = prompt("Nhập ký tự cần tìm kiếm:");
let found = false;

// Duyệt qua từng ký tự của chuỗi sử dụng phương thức charAt()
for (let i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) === searchChar) {
        found = true;
        break; // Dừng vòng lặp khi tìm thấy ký tự
    }
}

if (found) {
    alert(`Tồn tại từ đang tìm kiếm.`);
} else {
    alert(`Không tồn tại từ đang tìm kiếm.`);
}
