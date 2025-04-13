let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = Number(prompt("Nhập kích thước mảng con: "));
let a = Math.ceil(arr.length/n);
let b = 0;

 for(let i = 0; i < a; i++){
    console.log(arr.slice(b,b+n));
    b += n;
 }