let experience = prompt("Nhập số năm kinh nghiệm của nhân viên:");
experience = Number(experience);

if (isNaN(experience) || experience < 0) {
    alert("Vui lòng nhập số hợp lệ.");
} else if (experience < 1) {
    alert("Mới vào nghề");
} else if (experience <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (experience <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}
