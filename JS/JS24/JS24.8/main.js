let str = [];
let choice;
do {
    choice = parseInt(prompt(`
================ MENU ================
1️⃣  Nhập chuỗi
2️⃣  Hiển thị chuỗi
3️⃣  Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4️⃣  Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5️⃣  Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6️⃣  Chuyển đổi chuỗi ký tự thành dạng snake_case
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
        let words = str.trim().split(/\s+/);
        let wordCount = {};
        for (let word of words) {
            if (word in wordCount) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
        let duplicates = Object.entries(wordCount).filter(([word, count]) => count > 1);
        alert(`Tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện:\n${duplicates.map(([word, count]) => `${word}: ${count} lần`).join("\n")}`);
        break;  
    }
    case 4:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let words = str.trim().split(/\s+/);
        let lengths = words.map(word => word.length);
        let maxLength = Math.max(...lengths);
        let minLength = Math.min(...lengths);
        let longestWords = words.filter(word => word.length === maxLength);
        let shortestWords = words.filter(word => word.length === minLength);
        alert(`Các từ có độ dài lớn nhất: ${longestWords.join(", ")}\nCác từ có độ dài nhỏ nhất: ${shortestWords.join(", ")}`);
        break;
    }
    case 5:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let charCount = {};
        for (let char of str) {
            if (char in charCount) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
        let maxCount = Math.max(...Object.values(charCount));
        let mostFrequentChars = Object.entries(charCount).filter(([char, count]) => count === maxCount);
        alert(`Số lần xuất hiện nhiều nhất của các ký tự trong chuỗi:\n${mostFrequentChars.map(([char, count]) => `${char}: ${count} lần`).join("\n")}`);
        break;
    }
    case 6:
    {
        if (str.length === 0) {
            alert("Chuỗi trống!");
            break;
        }
        let snakeCase = str.split("").map(char => char === char.toUpperCase() ? `_${char.toLowerCase()}` : char).join("");
        alert(`Chuỗi sau khi chuyển đổi: ${snakeCase}`);
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