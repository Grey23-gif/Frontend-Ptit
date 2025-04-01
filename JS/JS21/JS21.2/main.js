let a_1 = parseFloat(prompt("Nhập số 1:"));
let a_2 = parseFloat(prompt("Nhập số 2:"));
let a_3 = parseFloat(prompt("Nhập số 3:"));
let a_4 = parseFloat(prompt("Nhập số 4:"));
let a_5 = parseFloat(prompt("Nhập số 5:"));

let chan = 0;
let le =0;

    if(a_1 % 2 == 0)
    {
        chan++;
    }
    else{
        le++;
    }
    if(a_2 % 2 == 0)
    {
        chan++;
    }
    else{
        le++;
    }
    if(a_3 % 2 == 0)
    {
        chan++;
    }
    else{
        le++;
    }
    if(a_4 % 2 == 0)
    {
        chan++;
    }
    else{
        le++;
    }
    if(a_5 % 2 == 0)
    {
        chan++;
    }
    else{
        le++;
    }
alert(`Có ${chan} số chẳn`);
alert(`Có ${le} số lẻ`);

