let a = parseInt(prompt("Nhập a"));
let b = parseInt(prompt("Nhập b(lũy thừa)"));
let sum = 1;

for(let i=0;i<b;i++){
    sum = sum * a;
}
alert(`${a} mũ ${b} = ${sum}`);