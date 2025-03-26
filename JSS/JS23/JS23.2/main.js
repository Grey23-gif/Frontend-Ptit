let numbers = [2, 5, 7, 4 ,1 ,8, 6];
let check =0;
let num_max = Math.max(...numbers);
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == num_max){
        console.log("Số lớn nhất trong mảng là: " + num_max);
        console.log(`Vị trí của số lớn nhất trong mảng là: ${i + 1}`);
        check =1;
    }
}
if (check == 0){
    console.log("Chúc bạn may mắn lần sau");
}
