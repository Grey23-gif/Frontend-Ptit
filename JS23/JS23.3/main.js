let n = parseInt(prompt("Nhập số lượng phần tử:"));
if(isNaN(n) || n < 1) {
    alert("Số lượng phần tử không hợp lệ!");
}
else if (n == 0) {
    alert("Mảng không có phần tử!");
}
let arr = [];
let check =0;

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}:`));
    arr.push(num);
}

for (let i = 0; i < n; i++) {
    if(arr[i] < 0) {
        check++;
    }
}
console.log(`Số lượng số âm trong mảng là: ${check}`);
