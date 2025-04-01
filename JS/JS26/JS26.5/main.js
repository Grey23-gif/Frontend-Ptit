let arr = [];
function enter_arr(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    }
}
function check_arr(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có phần tử nào";
    let num_max = Math.max(...arr);
    let indexes = arr.map((num, index) => num === num_max ? index : -1).filter(index => index !== -1);
    console.log("Phần tử lớn nhất là: " + num_max);
    console.log("Chỉ số của phần tử lớn nhất là: " + indexes);

    return { num_max, indexes };
} 
enter_arr(arr);
check_arr(arr);