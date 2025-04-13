// ...existing code...

const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");

togglePasswordButton.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của nút
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Đổi sang hiển thị mật khẩu
    } else {
        passwordInput.type = "password"; // Đổi sang ẩn mật khẩu
    }
});