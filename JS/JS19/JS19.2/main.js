let char = prompt("Nhập một ký tự: ");

if (char.length === 1 && /[a-zA-Z]/.test(char)) {
    alert(`${char} là một chữ cái.`);
} else {
    alert(`${char} không phải là một chữ cái.`);
}
