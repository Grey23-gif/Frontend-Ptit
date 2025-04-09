document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    let progress = 0; // Giá trị tiến trình ban đầu

    // Hàm cập nhật thanh tiến trình và nút
    function updateProgressBar() {
        const alpha = 0.3 + (progress / 100) * 0.7; // Tính độ mờ nhạt (alpha)
        progressBar.style.width = progress + "%";
        progressBar.style.backgroundColor = `rgba(76, 175, 80, ${alpha})`; // Thay đổi độ đậm của thanh tiến trình
        increaseBtn.style.backgroundColor = `rgba(122, 186, 255, ${alpha})`; // Đồng bộ độ đậm với thanh tiến trình
        decreaseBtn.style.backgroundColor = `rgba(122, 186, 255, ${alpha})`; // Đồng bộ độ đậm với thanh tiến trình
    }

    // Sự kiện tăng tiến trình
    increaseBtn.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;
            updateProgressBar();
        }
    });

    // Sự kiện giảm tiến trình
    decreaseBtn.addEventListener("click", function () {
        if (progress > 0) {
            progress -= 10;
            updateProgressBar();
        }
    });

    // Hiển thị thanh tiến trình ban đầu
    updateProgressBar();
});
