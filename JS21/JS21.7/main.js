let P = parseFloat(prompt("Nhập số tiền gửi ban đầu (VNĐ):"));
let r = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let n = parseInt(prompt("Nhập số tháng gửi:"));


if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let A = P * Math.pow(1 + r, n);
    let lai = A - P;
    alert(`Số tiền lãi sau ${n} tháng: ${lai.toFixed(2)} VNĐ\nTổng số tiền nhận được: ${A.toFixed(2)} VNĐ`);
}
