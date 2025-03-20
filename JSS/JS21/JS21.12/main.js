for (let i = 1; i <= 10; i++) {
    let r = Math.floor(Math.random() * 256); // Màu đỏ (0-255)
    let g = Math.floor(Math.random() * 256); // Màu xanh lá (0-255)
    let b = Math.floor(Math.random() * 256); // Màu xanh dương (0-255)

    let color = `rgb(${r}, ${g}, ${b})`; // Tạo mã màu
    console.log(`%c Màu ${i}: ${color}`, `color: ${color}; font-size: 20px; font-weight: bold;`);
}
