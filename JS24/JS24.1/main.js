let choice;
let arr = [];
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập mảng
2️⃣  Hiển thị mảng
3️⃣  Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4️⃣  Tính tổng các phần tử trong mảng
5️⃣  Tìm số lần xuất hiện của một phần tử trong mảng
6️⃣  Sắp xếp mảng tăng dần
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
            let num = parseFloat(prompt(`Nhập số thứ ${i + 1}:`));
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
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        alert(`Giá trị lớn nhất: ${max}\nGiá trị nhỏ nhất: ${min}`);
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
        alert(`Tổng các phần tử trong mảng: ${sum}`);
        break;
    }
    case 5:
    {
        let count = 0;
        let x = parseFloat(prompt("Nhập số cần tìm:"));
        arr.forEach(num => {
            if (num === x) count++;
        });
        alert(`Số lần xuất hiện của ${x} trong mảng: ${count}`);
        break;
    }
    case 6:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        arr.sort((a, b) => a - b);
        alert(`Mảng sau khi sắp xếp: ${arr.join(", ")}`);
        break;
    }
    case 7:
    {
        alert("Thoát chương trình!");
        break;
    }
}
}while (choice !== 7);