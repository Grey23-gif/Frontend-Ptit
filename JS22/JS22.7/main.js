let numbers = [1,3,5,2,5,7,3,3,7,8,9,10,5,3,25,7,9,6];
let ascending = [...numbers].sort((a, b) => a - b);
console.log("Sắp xếp tăng dần:", ascending);