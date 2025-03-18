let num1 = prompt("Nhập số thứ 1: ");
let num2 = prompt("Nhập số thứ 2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let min = Math.min(num1,num2);
let max = Math.max(num1,num2);

let randomnum = Math.floor(Math.random()*(max-min)+min);

alert("Số ngẫu nhiên trong khoảng "+num1+" đến "+num2+" là: "+randomnum);
