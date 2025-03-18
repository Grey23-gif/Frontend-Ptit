let r = prompt("Nhập bán kính: ");
let h = prompt("Nhập chiều cao: ");

r = parseFloat(r);
h = parseFloat(h);

const pi=3.14;

alert(`S xung quanh là: ${(r * h * 2 * pi).toFixed(2)}\n
S toàn phần là: ${(r * h * 2 * pi + 2 * pi * r * r).toFixed(2)}\n
V trụ là: ${(pi * r * r * h).toFixed(2)}\n
Chu vi đáy là: ${(2 * pi * r).toFixed(2)}`);
