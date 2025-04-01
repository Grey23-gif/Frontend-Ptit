let num = prompt("Nhập dãy số bất kì");
if(!isNaN(num))
{
    let reverse = [...num].reverse().join("");
    console.log(reverse);
}
else{
    console.log("Dãy không hợp lệ");
}