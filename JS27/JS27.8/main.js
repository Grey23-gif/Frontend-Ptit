let n = prompt("Nhập 1 số nguyên: ");
function max_num(N){
    let arr = N.split("");
    arr.sort((a,b) => b - a);
    let max = arr.join("");
    return max;
}
console.log("Số lớn nhất có thể tạo ra từ các chữ số của " + n + " là: " + max_num(n));