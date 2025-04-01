let numbers = [1,3,5,2,5,7,3,3,7,8,9,10,5,3,25,7,9,6];
let num = parseInt(prompt("Nhập số cần ktra:"));
let check = 0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i] == num){
        check++;
    }
}
console.log(`Số ${num} xuất hiện ${check} lần trong mảng`);