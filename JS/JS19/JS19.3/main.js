let num = parseFloat(prompt("Chọn loại tiền muốn đổi(1-VND to USD, 2-USD TO VND"));
if(num == 1)
{
    let money = parseFloat(prompt("Nhập vào số tiền cần đổi"));
    alert(`${money} VND đổi sang tiền USD là: ${money/23000}`);
}
else if(num == 2)
{
    let money = parseFloat(prompt("Nhập vào số tiền cần đổi"));
    alert(`${money} USD đổi sang tiền VND là: ${money*23000}`);
}
else{
    alert("Nhập số 1 hoặc 2")
}