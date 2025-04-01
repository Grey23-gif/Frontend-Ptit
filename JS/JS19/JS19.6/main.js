let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

if (a === 0) {
    if (b !== 0) {
        let x = -c / b;
        alert(`Phương trình là bậc 1 và có nghiệm: ${x}`);
    } else {
        if (c === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép: ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm: x1 = ${x1} và x2 = ${x2}`);
    }
}
