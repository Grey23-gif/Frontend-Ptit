let num = prompt("Nhập dãy số bất kì");
if(!isNaN(num))
{
    let maxDigit = Math.max(...num);
    console.log(`Số lớn nhất: ${maxDigit}`);
}
else{
    console.log("Dãy không hợp lệ");
}