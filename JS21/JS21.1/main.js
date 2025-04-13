let a_1 = parseFloat(prompt("Nhập số 1:"));
let a_2 = parseFloat(prompt("Nhập số 2:"));
let a_3 = parseFloat(prompt("Nhập số 3:"));
let a_4 = parseFloat(prompt("Nhập số 4:"));
let a_5 = parseFloat(prompt("Nhập số 5:"));

let sum = 0;

    if(a_1 % 2 != 0)
    {
        sum += a_1;
    }
    if(a_2 % 2 != 0)
    {
        sum += a_2;
    }
    if(a_3 % 2 != 0)
    {
        sum += a_3;
    }
    if(a_4 % 2 != 0)
    {
        sum += a_4;
    }
    if(a_5 % 2 != 0)
    {
        sum += a_5;
    }
alert(`Tổng các số lẻ là: ${sum}`);
