function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        alert("Không thể chia cho 0!");
        return null;
    }
    return a / b;
}
function numberInput(promptText) {
    let number = parseFloat(prompt(promptText));
    while (isNaN(number)) {
        number = parseFloat(prompt("Vui lòng nhập một số hợp lệ: "));
    }
    return number;
}

let choice;
let a,b;
do {
    choice = Number(prompt(`
        ================MENU=================
        1. Cộng hai số
        2. Trừ hai số
        3. Nhân hai số
        4. Chia hai số
        5. Thoát
        =====================================
        Chọn thao tác: `));

    switch (choice) {
        case 1:
            a = numberInput("Nhập số thứ nhất: ");
            b = numberInput("Nhập số thứ hai: ");
            alert(`Kết quả: ${a} + ${b} = ${sum(a, b)}`);
            break;
        case 2:
            a = numberInput("Nhập số thứ nhất: ");
            b = numberInput("Nhập số thứ hai: ");
            alert(`Kết quả: ${a} - ${b} = ${subtract(a, b)}`);
            break;
        case 3:
            a = numberInput("Nhập số thứ nhất: ");
            b = numberInput("Nhập số thứ hai: ");
            alert(`Kết quả: ${a} * ${b} = ${multiply(a, b)}`);
            break;
        case 4:
            a = numberInput("Nhập số thứ nhất: ");
            b = numberInput("Nhập số thứ hai: ");
            alert(`Kết quả: ${a} / ${b} = ${divide(a, b)}`);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
} while (choice !== 5);
