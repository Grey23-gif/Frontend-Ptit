let num1 = prompt("Nhập số thứ 1: ");
let num2 = prompt("Nhập số thứ 2: ");
let num3 = prompt("Nhập số thứ 3: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let num4 = Math.max(num1,num2,num3);
alert("Số lớn nhất trong 3 số là: "+num4);
