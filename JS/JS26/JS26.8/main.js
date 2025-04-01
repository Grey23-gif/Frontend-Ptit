let arr = [];
let arr_1 = [];
function enter_arr (arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr (arr) {
    for (let i = 0; i < arr.length; i++) {
        let check = 0;
        for(let j = 2; j*j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                check = 1;
                break;
            }
        }
        if(check === 0) {
            arr_1.push(arr[i]);
        }
    }
    return arr_1.filter(arr => arr % 2 !== 0);
    
}
enter_arr(arr);
console.log("Mảng đã nhập là: " + arr);
console.log("Các số nguyên tố lẻ trong mảng là: " + check_arr(arr));