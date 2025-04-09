document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.querySelector(".overlay");
    const fullImage = document.querySelector(".full-image");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            fullImage.src = thumbnail.src; // Gán ảnh lớn bằng ảnh nhỏ
            overlay.style.display = "flex"; // Hiển thị overlay
        });
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none"; // Ẩn overlay khi nhấn ra ngoài
    });
});
