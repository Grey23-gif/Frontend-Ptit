let arr = [];
let arr_1 = [];
function enter_arr(arr) {
    n = Number(prompt("Nhập số lượng phần tử: "));
    if (n <= 0) return "Mảng không có phần tử nào";
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    return arr.filter(num => num >10);
}
enter_arr(arr);
console.log(check_arr(arr));