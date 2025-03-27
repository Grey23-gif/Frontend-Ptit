let choice;
let arr = [];
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập mảng số nguyên
2️⃣  Hiển thị mảng
3️⃣  Tìm các phần tử chẵn và lẻ
4️⃣  Tính trung bình cộng của mảng
5️⃣  Xóa phần tử tại vị trí chỉ định
6️⃣  Tìm phần tử lớn thứ hai trong mảng
7️⃣  ❌ Thoát
=========================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));
switch(choice)
{
    case 1:
    {
        let n = parseInt(prompt("Nhập số lượng phần tử:"));
        if (isNaN(n) || n < 1) {
            alert("Số lượng phần tử không hợp lệ!");
            break;
        }
        arr = [];
        for (let i = 0; i < n; i++) {
            let num = parseInt(prompt(`Nhập số thứ ${i + 1}:`));
            arr.push(num);
        }
        alert(`Mảng đã nhập: ${arr.join(", ")}`);
        break;
    }
    case 2:
    {
        alert(`Các phần tử trong mảng: ${arr.length ? arr.join(", ") : "Mảng trống"}`);
        break;
    }
    case 3:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let evenNumbers = arr.filter(num => num % 2 === 0);
        let oddNumbers = arr.filter(num => num % 2 !== 0);
        alert(`Các số chẵn: ${evenNumbers.length ? evenNumbers.join(", ") : "Không có số chẵn"}\nCác số lẻ: ${oddNumbers.length ? oddNumbers.join(", ") : "Không có số lẻ"}`);
        break;
    }
    case 4:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let sum = 0;
        arr.forEach(num => sum += num);
        let avg = sum / arr.length;
        alert(`Trung bình cộng của mảng: ${avg}`);
        break;
    }
    case 5:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let index = parseInt(prompt("Nhập vị trí cần xóa:"));
        if (isNaN(index) || index < 0 || index >= arr.length) {
            alert("Vị trí không hợp lệ!");
            break;
        }
        arr.splice(index, 1);
        alert(`Mảng sau khi xóa: ${arr.join(", ")}`);
        break;
    }
    case 6:
    {
        if (arr.length < 2) {
            alert("Mảng không đủ phần tử!");
            break;
        }
        let max = Math.max(...arr);
        let secondMax = arr.filter(num => num < max);
        secondMax = Math.max(...secondMax);
        alert(`Phần tử lớn thứ hai trong mảng: ${secondMax}`);
        break;
    }
    case 7:
    {
        alert("Cảm ơn bạn đã sử dụng dịch vụ!");
        break;
    }
}
} while (choice !== 7);