
let num = parseInt(prompt("Nhập một số:"));

let result = Number.isInteger(Math.sqrt(num)) 
    ? `${num} là số chính phương` 
    : `${num} không phải số chính phương`;

alert(result);
