let n = parseInt(prompt("Nhập số lượng phần tử:"));
if(isNaN(n) || n < 1) {
    alert("Số lượng phần tử không hợp lệ!");
}   
let arr = [];
let nums = [];

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}:`));
    arr.push(num);
}

for (let i = 0; i < n; i++) {
    if(!isNaN(arr[i])) {
        nums.push(arr[i]);
    }
}
console.log(`Số trong mảng là: ${nums}`);
