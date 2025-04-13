function input_arr() {
    let n = Number(prompt("Nhập số lượng phần tử của mảng: "));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}: `));
    }
    return arr;
}
function average(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
function max_even(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers.length > 0 ? Math.max(...evenNumbers) : null;
}
function min_odd(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    return oddNumbers.length > 0 ? Math.min(...oddNumbers) : null;
}
let choice;
let arr = [];
do{
    choice = Number(prompt(`
        ================MENU=================
        1. Nhập danh sách số nguyên.    
        2. Tính trung bình các số.
        3. Tìm số chẵn lớn nhất.
        4.Tìm số lẻ nhỏ nhất.
        5. Thoát
        =====================================
        Chọn thao tác: `));
    switch(choice)
    {
        case 1:
            arr = input_arr();
            break;
        case 2:
            if(arr.length === 0){
                alert("Danh sách số nguyên trống.");
            }else{
                alert(`Trung bình các số là: ${average(arr)}`);
            }
            break;
        case 3:
            if(arr.length === 0){
                alert("Danh sách số nguyên trống.");
            }else{
                let maxEven = max_even(arr);
                if(maxEven !== null){
                    alert(`Số chẵn lớn nhất là: ${maxEven}`);
                }else{
                    alert("Không có số chẵn trong danh sách.");
                }
            }
            break;
        case 4:
            if(arr.length === 0){
                alert("Danh sách số nguyên trống.");
            }else{
                let minOdd = min_odd(arr);
                if(minOdd !== null){
                    alert(`Số lẻ nhỏ nhất là: ${minOdd}`);
                }else{
                    alert("Không có số lẻ trong danh sách.");
                }
            }
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
}while(choice !== 5);