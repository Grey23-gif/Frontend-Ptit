// Yêu cầu người dùng nhập chiều rộng và chiều cao
let width = parseInt(prompt("Nhập chiều ngang (số cột):"));
let height = parseInt(prompt("Nhập chiều dọc (số hàng):"));

// Kiểm tra nếu nhập sai
if (width < 2 || height < 2) {
    document.writeln("Chiều rộng và chiều cao phải lớn hơn hoặc bằng 2!");
} else {
    document.writeln("<pre>");

    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            document.writeln("* ".repeat(width) + "<br>");
        } else {
            document.writeln("* " + "  ".repeat(width - 2) + "*<br>");
        }
    }

    document.writeln("</pre>");
}
