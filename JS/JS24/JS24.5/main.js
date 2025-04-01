let arr = [];
let choice;
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập mảng 2 chiều
2️⃣  Hiển thị mảng 2 chiều
3️⃣  Tính tổng các phần tử trong mảng
4️⃣  Tính tổng đường chéo chính
5️⃣  Tính tổng đường chéo phụ
6️⃣  Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][i];
        }
        alert(`Tổng đường chéo chính: ${sum}`);
        break;
    }
    case 5:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][arr.length - i - 1];
        }
        alert(`Tổng đường chéo phụ: ${sum}`);
        break;
    }
    case 6:
    {
        if (arr.length === 0) {
            alert("Mảng trống!");
            break;
        }
        let choice = parseInt(prompt(`Chọn 1 để tính trung bình cộng của một hàng\nChọn 2 để tính trung bình cộng của một cột`));
        let sum = 0;
        let count = 0;
        let index = parseInt(prompt(`Nhập chỉ số hàng hoặc cột cần tính:`));
        if (choice === 1) {
            if (index < 1 || index > arr.length) {
                alert("Chỉ số không hợp lệ!");
                break;
            }
            for (let i = 0; i < arr[index - 1].length; i++) {
                sum += arr[index - 1][i];
                count++;
            }
        } else if (choice === 2) {
            if (index < 1 || index > arr[0].length) {
                alert("Chỉ số không hợp lệ!");
                break;
            }
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i][index - 1];
                count++;
            }
        } else {
            alert("Lựa chọn không hợp lệ!");
            break;
        }
        let avg = sum / count;
        alert(`Trung bình cộng các phần tử của ${choice === 1 ? `hàng ${index}` : `cột ${index}`}: ${avg}`);
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