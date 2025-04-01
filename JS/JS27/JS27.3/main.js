const PI = 3.14;
function acreage_circle(radius) {
    return PI * radius * radius;
}
function perimeter_circle(radius) {
    return 2 * PI * radius;
}
function acreage_rectangle(length, width) {
    return length * width;
}
function perimeter_rectangle(length, width) {
    return 2 * (length + width);
}
function numberInput(promptText) {
    let number = parseFloat(prompt(promptText));
    while (isNaN(number)) {
        number = parseFloat(prompt("Vui lòng nhập một số hợp lệ: "));
    }
    return number;
}
let choice;
let radius, length, width;
do{
    choice = Number(prompt(`
        ================MENU=================
        1. Tính diện tích hình tròn.
        2. Tính chu vi hình tròn.
        3. Tính diện tích hình chữ nhật.
        4. Tính chu vi hình chữ nhật.
        5. Thoát
        =====================================
        Chọn thao tác: `));
    switch(choice)
    {
        case 1:
            radius = numberInput("Nhập bán kính hình tròn: ");
            alert(`Diện tích hình tròn có bán kính ${radius} là: ${acreage_circle(radius)}`);
            break;
        case 2:
            radius = numberInput("Nhập bán kính hình tròn: ");
            alert(`Chu vi hình tròn có bán kính ${radius} là: ${perimeter_circle(radius)}`);
            break;
        case 3:
            length = numberInput("Nhập chiều dài hình chữ nhật: ");
            width = numberInput("Nhập chiều rộng hình chữ nhật: ");
            alert(`Diện tích hình chữ nhật có chiều dài ${length} và chiều rộng ${width} là: ${acreage_rectangle(length, width)}`);
            break;
        case 4:
            length = numberInput("Nhập chiều dài hình chữ nhật: ");
            width = numberInput("Nhập chiều rộng hình chữ nhật: ");
            alert(`Chu vi hình chữ nhật có chiều dài ${length} và chiều rộng ${width} là: ${perimeter_rectangle(length, width)}`);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
}while(choice !== 5);