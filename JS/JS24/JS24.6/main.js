let str = [];
let choice;
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập chuỗi
2️⃣  Hiển thị chuỗi
3️⃣  Tính độ dài của chuỗi
4️⃣  Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5️⃣  Kiểm tra chuỗi có phải là chuỗi đối xứng không
6️⃣  Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7️⃣  ❌ Thoát
=========================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));
switch(choice)
{   
    case 1:
    {
        str = prompt("Nhập chuỗi:");
        alert(`Chuỗi đã nhập: ${str}`);
        break;
    }
    case 2:
    {
        alert(`Chuỗi:\n${str.length ? str : "Chuỗi trống"}`);   
        break;
    }
    case 3:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        alert(`Độ dài của chuỗi: ${str.length}`);
        break;
    }
    case 4:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let char = prompt("Nhập ký tự cần đếm:");
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        alert(`Số lần xuất hiện của ký tự ${char} trong chuỗi: ${count}`);
        break;
    }
    case 5:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let isSymmetric = true;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                isSymmetric = false;
                break;
            }
        }
        alert(`Chuỗi ${isSymmetric ? "là" : "không phải"} chuỗi đối xứng`);
        break;
    }
    case 6:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let newStr = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        alert(`Chuỗi sau khi chuyển đổi: ${newStr}`);
        break;
    }
    case 7:
    {
        alert("Tạm biệt!");
        break;
    }
    default:
    {
        alert("Lựa chọn không hợp lệ!");
        break; 
    }
}
    
}while(choice !== 7);