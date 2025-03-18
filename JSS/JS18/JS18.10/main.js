let num = parseFloat(prompt("Nhập 1 số (0-999): "));

let hundreds = Math.floor(num/100);
let dozens = Math.floor(num % 100 /10);
let unit = Math.floor(num % 100 % 10);

switch(hundreds)
{
        case 0:
            hundreds = " ";
            break;
        case 1:
            hundreds = "Một";
            break;
        case 2:
            hundreds = "Hai";
            break;
        case 3:
            hundreds = "Ba";
            break;
        case 4:
            hundreds = "bốn";
            break;
        case 5:
            hundreds = "Năm";
            break;
        case 6:
            hundreds = "Sáu";
            break;
        case 7:
            hundreds = "Bảy";
            break;
        case 8:
            hundreds = "Tám";
            break;
        case 9:
            hundreds = "Chín";
}
switch(dozens)
{  
        case 0:
            dozens = "lẻ";
            break;
        case 1:
            dozens = "Một";
            break;
        case 2:
            dozens = "Hai mươi";
            break;
        case 3:
            dozens = "Ba mươi";
            break;
        case 4:
            dozens = "bốn mươi";
            break;
        case 5:
            dozens = "Năm mươi";
            break;
        case 6:
            dozens = "Sáu mươi";
            break;
        case 7:
            dozens = "Bảy mươi";
            break;
        case 8:
            dozens = "Tám mươi";
            break;
        case 9:
            dozens = "Chín mươi";
}
switch(unit)
{
        case 0:
            unit = " ";
            break;
        case 1:
            unit = "Một";
            break;
        case 2:
            unit = "Hai";
            break;
        case 3:
            unit = "Ba";
            break;
        case 4:
            unit = "bốn";
            break;
        case 5:
            unit = "Năm";
            break;
        case 6:
            unit = "Sáu";
            break;
        case 7:
            unit = "Bảy";
            break;
        case 8:
            unit = "Tám";
            break;
        case 9:
            unit = "Chín";
}
alert(hundreds+" trăm "+dozens+" "+unit);