let numbers = [2, 5, 7, 4 ,1 ,8, 6];
let num = parseInt(prompt("Nhập số :"));
let check =0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == num){
        console.log("bingo");
        check =1;
    }
}
if (check == 0){
    console.log("Chúc bạn may mắn lần sau");
}
