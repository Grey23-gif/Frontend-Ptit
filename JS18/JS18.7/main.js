let a = prompt("Nhập số a");
let b = prompt("Nhập số b");
a = parseFloat(a);
b = parseFloat(b);
let operation = prompt("Nhập phép tính (+,-,*,/)");

if(operation == "+")
{
    let sum = a + b;
    alert("kết quả của phép tính: "+a+" + "+b+" = "+sum);
}
else if(operation == "-"){
    let sum = a - b;
    alert("kết quả của phép tính: "+a+" - "+b+" = "+sum);

}
else if(operation == "*"){
    let sum = a * b;
    alert("kết quả của phép tính: "+a+" * "+b+" = "+sum);

}
else if(operation == "/"){
    let sum = a / b;
    alert("kết quả của phép tính: "+a+" / "+b+" = "+sum);

}
else{
    alert("Nhập sai phép tính.")
}