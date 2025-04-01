
const n = parseInt(prompt('Nhập số lượng phần tử của mảng: '));
const arr = [];


for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
}

// kiểm tra mảng có phải là dãy Fibonacci không
let kiemTra = true;
if (arr.length < 3) {
    kiemTra = false;
} else {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            kiemTra = false;
            break;
        }
    }
}

console.log(kiemTra ? 'Mảng là dãy Fibonacci' : 'Mảng không phải là dãy Fibonacci');