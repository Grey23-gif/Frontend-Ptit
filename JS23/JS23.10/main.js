let choice;
let arr = [];

do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập số phần tử cần nhập và giá trị các phần tử
2️⃣  In ra giá trị các phần tử đang quản lý
3️⃣  In ra giá trị các phần tử chẵn và tính tổng
4️⃣  In ra giá trị lớn nhất và nhỏ nhất trong mảng
5️⃣  In ra các phần tử là số nguyên tố trong mảng và tính tổng
6️⃣  Nhập vào một số và thống kê số lần xuất hiện trong mảng
7️⃣  Thêm một phần tử vào vị trí chỉ định
8️⃣  ❌ Thoát
=========================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1: {
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
            alert(`Các phần tử trong mảng: ${arr.length ? arr.join(", ") : "Mảng trống"}`);
            break;

        case 3: {
            let sum = 0;
            let evenNumbers = arr.filter(num => num % 2 === 0);
            evenNumbers.forEach(num => sum += num);
            alert(`Các số chẵn: ${evenNumbers.length ? evenNumbers.join(", ") : "Không có số chẵn"}\nTổng: ${sum}`);
            break;
        }

        case 4: {
            if (arr.length === 0) {
                alert("Mảng trống!");
                break;
            }
            let max = Math.max(...arr);
            let min = Math.min(...arr);
            alert(`Giá trị lớn nhất: ${max}\nGiá trị nhỏ nhất: ${min}`);
            break;
        }

        case 5: {
            let sumPrime = 0;
            let primeNumbers = arr.filter(num => {
                if (num < 2) return false;
                for (let j = 2; j <= Math.sqrt(num); j++) {
                    if (num % j === 0) return false;
                }
                return true;
            });
            primeNumbers.forEach(num => sumPrime += num);
            alert(`Số nguyên tố: ${primeNumbers.length ? primeNumbers.join(", ") : "Không có số nguyên tố"}\nTổng: ${sumPrime}`);
            break;
        }

        case 6: {
            let num = parseFloat(prompt("Nhập số cần thống kê:"));
            let count = arr.filter(value => value === num).length;
            alert(`Số ${num} xuất hiện ${count} lần trong mảng.`);
            break;
        }

        case 7: {
            let pos = parseInt(prompt("Nhập vị trí cần thêm:"));
            let value = parseFloat(prompt("Nhập giá trị cần thêm:"));
            if (isNaN(pos) || pos < 0 || pos > arr.length) {
                alert("Vị trí không hợp lệ!");
                break;
            }
            arr.splice(pos, 0, value);
            alert(`Mảng sau khi thêm phần tử: ${arr.join(", ")}`);
            break;
        }

        case 8:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 8.");
    }
} while (choice !== 8);
    