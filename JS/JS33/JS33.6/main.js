const text = document.getElementById("text");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let fontSize = 16; // Kích thước chữ mặc định (px)

// Sự kiện tăng kích thước chữ
increaseBtn.addEventListener("click", function () {
    fontSize += 2; // Tăng kích thước chữ thêm 2px
    text.style.fontSize = fontSize + "px";
});

// Sự kiện giảm kích thước chữ
decreaseBtn.addEventListener("click", function () {
    if (fontSize > 6) { // Đảm bảo kích thước chữ không quá nhỏ
        fontSize -= 2; // Giảm kích thước chữ đi 2px
        text.style.fontSize = fontSize + "px";
    }
});
