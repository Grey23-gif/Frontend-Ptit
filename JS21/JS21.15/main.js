let soTien = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000):"));

if (soTien % 1000 !== 0) {
    alert("Số tiền không hợp lệ! Vui lòng nhập số chia hết cho 1000.");
} else {
    let ketQua = ""; 

    let soTo500k = Math.floor(soTien / 500000);
    soTien -= soTo500k * 500000;
    if (soTo500k > 0) ketQua += `Mệnh giá 500.000: ${soTo500k} tờ\n`;

    let soTo200k = Math.floor(soTien / 200000);
    soTien -= soTo200k * 200000;
    if (soTo200k > 0) ketQua += `Mệnh giá 200.000: ${soTo200k} tờ\n`;

    let soTo100k = Math.floor(soTien / 100000);
    soTien -= soTo100k * 100000;
    if (soTo100k > 0) ketQua += `Mệnh giá 100.000: ${soTo100k} tờ\n`;

    let soTo50k = Math.floor(soTien / 50000);
    soTien -= soTo50k * 50000;
    if (soTo50k > 0) ketQua += `Mệnh giá 50.000: ${soTo50k} tờ\n`;

    let soTo20k = Math.floor(soTien / 20000);
    soTien -= soTo20k * 20000;
    if (soTo20k > 0) ketQua += `Mệnh giá 20.000: ${soTo20k} tờ\n`;

    let soTo10k = Math.floor(soTien / 10000);
    soTien -= soTo10k * 10000;
    if (soTo10k > 0) ketQua += `Mệnh giá 10.000: ${soTo10k} tờ\n`;

    let soTo5k = Math.floor(soTien / 5000);
    soTien -= soTo5k * 5000;
    if (soTo5k > 0) ketQua += `Mệnh giá 5.000: ${soTo5k} tờ\n`;

    let soTo2k = Math.floor(soTien / 2000);
    soTien -= soTo2k * 2000;
    if (soTo2k > 0) ketQua += `Mệnh giá 2.000: ${soTo2k} tờ\n`;

    let soTo1k = Math.floor(soTien / 1000);
    soTien -= soTo1k * 1000;
    if (soTo1k > 0) ketQua += `Mệnh giá 1.000: ${soTo1k} tờ\n`;

    alert("Số tiền được rút gồm:\n" + ketQua);
}
