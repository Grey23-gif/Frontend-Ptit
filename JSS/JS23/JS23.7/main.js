let n = parseInt(prompt("Nhập số lượng phần tử:"));
if (isNaN(n) || n < 1) {
    alert("Số lượng phần tử không hợp lệ!");
}
let arr = [];
let num_max;
let num_second_max;
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}:`));
    arr.push(num);
}
for (let i = 0; i < n; i++) {
    if (arr[i] > num_max || num_max === undefined) {
        num_second_max = num_max;
        num_max = arr[i];
    } else if (arr[i] > num_second_max || num_second_max === undefined) {
        num_second_max = arr[i];
    }
}
console.log(`Số lớn thứ hai trong mảng là: ${num_second_max}`);


