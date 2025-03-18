let r = prompt("Nhập bán kính: ");

r = parseFloat(r);

const pi=3.14;

alert(`V hình cầu: ${(r * r * r * 4 / 3 * pi).toFixed(2)}\n
S bề mặt là: ${(4 * pi * r * r).toFixed(2)}\n
Chu vi lớn nhất là: ${(2 * pi * r).toFixed(2)}`);
