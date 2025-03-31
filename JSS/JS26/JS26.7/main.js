let arr = [];
function enter_arr (arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr (arr) {
    return arr.filter(arr => arr % 2 === 0).map(arr => arr * arr);
}
enter_arr(arr);
console.log("Mảng đã nhập là: " + arr);
console.log("Các số chẵn bình phương trong mảng là: " + check_arr(arr));