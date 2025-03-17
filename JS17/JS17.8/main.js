let date1Str = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2Str = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let date1 = new Date(date1Str);
let date2 = new Date(date2Str);

let timeDiff = Math.abs(date2.getTime() - date1.getTime());
let dayDiff = timeDiff / (1000 * 60 * 60 * 24);

alert("Độ lệch là: " + dayDiff + " ngày");
