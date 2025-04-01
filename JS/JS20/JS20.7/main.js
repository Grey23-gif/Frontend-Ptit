let num = parseInt(prompt("Nhập n số cần in ra số fibonacci"));

if (!isNaN(num) && num > 0) {
    let fn1 =0;
    let fn2 =1;
    let fn;
    let _array = " ";
    for (let i = 1; i <= num; i++) {
        fn = fn1 + fn2;
        fn2 = fn1;
        fn1 = fn;
        _array += fn + "  "; 
    }
    alert(`${num} số fibonacci là: ${_array}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
