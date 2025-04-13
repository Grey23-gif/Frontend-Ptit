let num = parseInt(prompt("Nhập 1 số(lớn hơn 1)"));

if (!isNaN(num) && num > 1) {
    let _array;
    for (let i = 2; i <= num; i++) {
        if(i % 5 == 0){
            _array += i + "  ";
        } 
    }
    alert(`Các số từ 1 đến ${num} chia hết cho 5 là: ${_array}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
