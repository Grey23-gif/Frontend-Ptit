let arr = [];
let choice;
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập mảng 2 chiều
2️⃣  Hiển thị mảng 2 chiều
3️⃣  Tính tổng các phần tử trong mảng
4️⃣  Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5️⃣  Tính trung bình cộng các phần tử của một hàng cụ thể
6️⃣  Đảo ngược các hàng trong mảng
7️⃣  ❌ Thoát
=========================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));
switch(choice)
{
    case 1:
    {
        let row = parseInt(prompt("Nhập số hàng:"));
        let col = parseInt(prompt("Nhập số cột:"));
        arr = [];
        for (let i = 0; i < row; i++) {
            arr[i] = [];
            for (let j = 0; j < col; j++) {
                let num = parseInt(prompt(`Nhập phần tử hàng ${i + 1} cột ${j + 1}:`));
                arr[i].push(num);
            }
        }
        alert(`Mảng 2 chiều đã nhập:\n${arr.map(row => `[${row.join(", ")}]`).join("\n")}`);
        break;
    }
    case 2:
    {
        alert(`Mảng 2 chiều:\n${arr.length ?arr.map(row => `[${row.join(", ")}]`).join("\n") : "Mảng trống"}`);
        break;
    }
    case 3:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let sum = 0;
        for (let row of arr) {
            for (let num of row) {
                sum += num;
            }
        }
        alert(`Tổng các phần tử trong mảng: ${sum}`);
        break;
    }
    case 4:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let max = arr[0][0];
        let index = [0, 0];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                    index = [i, j];
                }
            }
        }
        alert(`Phần tử lớn nhất trong mảng: ${max}\nChỉ số của nó: hàng ${index[0] + 1}, cột ${index[1] + 1}`);
        break;
    }
    case 5:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let row = parseInt(prompt(`Nhập hàng cần tính trung bình cộng (1 - ${arr.length}):`));
        if (isNaN(row) || row < 1 || row > arr.length) {
            alert("Hàng không hợp lệ!");
            break;
        }
        let sum = 0;
        for (let num of arr[row - 1]) {
            sum += num;
        }
        let avg = sum / arr[row - 1].length;
        alert(`Trung bình cộng các phần tử của hàng ${row}: ${avg}`);
        break;
    }
    case 6:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        for (let row of arr) {
            row.reverse();
        }
        alert(`Mảng sau khi đảo ngược các hàng:\n${arr.map(row => `[${row.join(", ")}]`).join("\n")}`);
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