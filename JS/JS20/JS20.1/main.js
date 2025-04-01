let num = parseInt(prompt("Nhập 1 số"));

if (!isNaN(num) && num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i; 
    }
    alert(`Tổng các số từ 1 đến ${num} là: ${sum}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
