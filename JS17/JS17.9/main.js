
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

let delta = b * b - 4 * a * c;

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

alert(`Delta = ${delta}
    x1 = ${x1}
    x2 = ${x2}`);
  

