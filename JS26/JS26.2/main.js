let str = [];
let str_1 = [];
function enter_str(str) {
    n = Number(prompt("Nhập số lượng phần tử: "));
    for (let i = 0; i < n; i++) {
        str[i] = prompt("Nhập chuỗi thứ " + (i + 1) + ": ");
    }
}
function check_str(str) {
    if (arr.length === 0) return "Mảng không có phần tử nào";
    return str.filter(str => str.length > 5);
}
enter_str(str);
console.log(check_str(str));