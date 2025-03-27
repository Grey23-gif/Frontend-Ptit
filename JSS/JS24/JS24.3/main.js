let choice;
let arr = [];
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập mảng số nguyên
2️⃣  Hiển thị mảng
3️⃣  Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4️⃣  Tính tổng và trung bình cộng của các số dương trong mảng
5️⃣  Đảo ngược mảng
6️⃣  Kiểm tra mảng có đối xứng không
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
        let max = arr[0];
        let index = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }
        alert(`Phần tử lớn nhất trong mảng: ${max}\nChỉ số của nó: ${index}`);
        break;
    }
    case 4:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let positiveNumbers = arr.filter(num => num > 0);
        if (positiveNumbers.length === 0) {
            alert("Không có số dương trong mảng!");
            break;
        }
        let sum = 0;
        positiveNumbers.forEach(num => sum += num);
        let avg = sum / positiveNumbers.length;
        alert(`Tổng các số dương trong mảng: ${sum}\nTrung bình cộng của các số dương trong mảng: ${avg}`);
        break;
    }
    case 5:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let reversedArr = arr.slice().reverse();
        alert(`Mảng sau khi đảo ngược: ${reversedArr.join(", ")}`);
        break;
    }
    case 6:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let isSymmetric = true;
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        alert(`Mảng ${isSymmetric ? "đối xứng" : "không đối xứng"}`);
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

}while (choice !== 7);