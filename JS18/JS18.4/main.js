let num = prompt("Nhập 1 số (0-9)");
num = parseFloat(num);

if(num<10&&num>=0)
{
    switch(num)
    {
        case 1:
            alert("Số Một");
            break;
        case 2:
            alert("Số Hai");
            break;
        case 3:
            alert("Số Ba");
            break;
        case 4:
            alert("Số bốn");
            break;
        case 5:
            alert("Số Năm");
            break;
        case 6:
            alert("Số Sáu");
            break;
        case 7:
            alert("Số Bảy");
            break;
        case 8:
            alert("Số Tám");
            break;
        case 9:
            alert("Số Chín")
    }
}
else{
    alert("Nhập lại số từ 0-9!")
}