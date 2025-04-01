function sum_num(num_1, num_2) {
    if (isNaN(num_1) || isNaN(num_2)) {
        return "Dữ liệu không hợp lệ";
    }
    return parseInt(num_1) + parseInt(num_2);
}
let num_1 = prompt("Nhập số thứ nhất: ");
let num_2 = prompt("Nhập số thứ hai: ");
console.log(sum_num(num_1, num_2));