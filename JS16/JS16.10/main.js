let num1 = prompt("Nhập số thứ 1: ");
let num2 = prompt("Nhập số thứ 2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let num3 = Math.round(Math.random()*num1*100)/100;
let num4 = Math.round(Math.random()*num2*100)/100;

document.writeln(num3+"<br>");
document.writeln(num4);
