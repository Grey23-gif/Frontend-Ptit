let arr = [];
function enter_arr (arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr (arr) {
    let totaleven = 0;
    let totalodd = 0;

    totaleven = arr.filter(arr => arr % 2 === 0).reduce((acc, curr) => acc + curr, 0);
    totalodd = arr.filter(arr => arr % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
    
    console.log("Tổng các số chẵn trong mảng là: " + totaleven);
    console.log("Tổng các số lẻ trong mảng là: " + totalodd);
}
enter_arr(arr);
console.log("Mảng đã nhập là: " + arr);
check_arr(arr);