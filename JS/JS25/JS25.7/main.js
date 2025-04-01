function upsace_str(str) {
    let arr = str.toLowerCase().split(" ");
    let new_str = "";
    for (let i = 0; i < arr.length; i++) {
        new_str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }
    return new_str;
}
let str = prompt("Nhập chuỗi: ");
console.log(upsace_str(str));