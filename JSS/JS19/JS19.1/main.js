let num = parseInt(prompt("Nhập tháng: "));

switch (num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`Tháng ${num} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`Tháng ${num} có 30 ngày`);
        break;
    case 2:
        alert(`Tháng ${num} có 28 hoặc 29 ngày`);
        break;
    default:
        alert("Vui lòng nhập số từ 1 đến 12!");
}
