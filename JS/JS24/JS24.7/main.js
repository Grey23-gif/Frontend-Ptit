let str = [];
let choice;
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập chuỗi
2️⃣  Hiển thị chuỗi
3️⃣  Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4️⃣  Đảo ngược chuỗi ký tự
5️⃣  Đếm số lượng từ trong chuỗi ký tự
6️⃣  Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
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
        str=str.trim();
        alert(`Chuỗi sau khi loại bỏ các khoảng trắng ở đầu và cuối: ${str}`);
        break;
    }
    case 4:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        alert(`Chuỗi sau khi đảo ngược: ${str.split("").reverse().join("")}`);
        break;
    }
    case 5:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let words = str.trim().split(/\s+/);
        alert(`Số lượng từ trong chuỗi: ${words.length}`);
        break;
    }
    case 6:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let char = prompt("Nhập ký tự cần tìm:");
        let replaceChar = prompt("Nhập ký tự thay thế:");
        let newStr = str.split("").map(c => c === char ? replaceChar : c).join("");
        alert(`Chuỗi sau khi thay thế: ${newStr}`);
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