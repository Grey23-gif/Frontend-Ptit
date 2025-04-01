let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giác đều.");
    } 
    else if (a === b || a === c || b === c) {
        alert("Tam giác cân.");
    } 
    else if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
        alert("Tam giác vuông.");
    } 
    else {
        alert("Tam giác thường.");
    }
} 
else {
    alert("Ba cạnh này không tạo thành tam giác.");
}
