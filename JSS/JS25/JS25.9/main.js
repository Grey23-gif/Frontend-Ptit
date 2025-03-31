let users = []; // Mảng lưu trữ tài khoản đã đăng ký

function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.(com|vn)$/; // Kiểm tra @ và kết thúc bằng .com hoặc .vn
    return regex.test(email);
}

function registerEmail(email) {
    if (email === null) {
        console.log("Bạn đã hủy đăng ký.");
        return false; // Trả về false để thoát vòng lặp
    }

    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ! Vui lòng nhập lại.");
        return true; // Tiếp tục vòng lặp
    }

    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
    return true; // Tiếp tục vòng lặp
}

// Vòng lặp cho phép nhập nhiều lần, bấm Cancel để thoát
do {
    let email = prompt("Nhập email muốn đăng ký:");
    if (!registerEmail(email)) {
        break; // Thoát vòng lặp nếu bấm Cancel
    } 
} while (true);

console.log("Danh sách tài khoản:", users); // Hiển thị danh sách users
