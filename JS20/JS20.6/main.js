let num = parseInt(prompt("Nhập 1 số"));

if (!isNaN(num) && num > 0) {
    if(num == 2)
    {
        alert(`Số ${num} là số nt`);
    }
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            {
                alert(`Số ${num} không phải số nt`);
                break;
            }
        else{
                alert(`Số ${num} là số nt`);
        } 
    }
} else {
    alert("Số nhập vào không hợp lệ");
}
