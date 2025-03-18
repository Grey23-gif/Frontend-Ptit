let a=parseFloat(prompt("Nhap gia tri a: "));

let b=parseFloat(prompt("Nhap gia tri b: "));

let c=parseFloat(prompt("Nhap gia tri c: "));

let delta=b*b-4*a*c;

if(delta>0){
    let x1=(-b+Math.sqrt(delta))/(2*a);
    let x2=(-b-Math.sqrt(delta))/(2*a);
    document.writeln(`Phuong trinh co 2 nghiem phan biet:<br> x1 = ${x1}<br> x2 = ${x2}`);
}else if(delta===0){
    let x=(-b)/(2*a);
    document.writeln(`Phuong trinh co nghiem kep: x = ${x}`);
}else{
    document.writeln("Phuong trinh vo nghiem");

}