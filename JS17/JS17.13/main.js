let Money = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
let months = parseInt(prompt("Nhập số tháng gửi:"));

let monthlyInterestRate = 0.043 / 12;

let interest = Money * monthlyInterestRate * months;
let Sum = Money + interest;

alert(`Số tiền lãi nhận được: ${interest.toLocaleString("vi-VN")} VNĐ\nTổng số tiền sau ${months} tháng: ${Sum.toLocaleString("vi-VN")} VNĐ`);