function locEmailHopLe(danhSachEmail) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có phần tử nào";
    return danhSachEmail.filter(email => email.includes("@") && !email.includes(" "));
}

let emails = [
    "example@gmail.com",
    "user@domain.com",
    "email sai@domain.com",
    "no-at-symbol.com",
    "valid_email123@yahoo.com"
];

let emailHopLe = locEmailHopLe(emails);
console.log("Email hợp lệ:", emailHopLe);
