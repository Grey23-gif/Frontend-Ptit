let num = parseInt(prompt("Nhập một số:"));

if (!isNaN(num)) {
    let original = num;
    let sign = num < 0 ? -1 : 1;
    num = Math.abs(num);

    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    reversed = reversed * sign;
    if(original == reversed)
    {
        alert("Là số đối xứng")
    }
    else{
        alert("Không phải số đối xứng")
    }
} else {
    alert("Số không hợp lệ!");
}
