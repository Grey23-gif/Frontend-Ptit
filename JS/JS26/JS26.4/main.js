let arr = [];
function enter_arr(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có phần tử nào";
    let check = 0;
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr[i]; i++) {
        if (arr[i] % i == 0) {
            check = 1;
        }
    }
    if (check == 0) {
        return arr[i];
    }
    }
}
enter_arr(arr);
console.log(check_arr(arr));