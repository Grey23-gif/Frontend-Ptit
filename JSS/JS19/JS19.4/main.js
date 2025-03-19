let num = parseFloat(prompt("Nhập 1 số:"));

if(num % 5 == 0)
{
    if(num % 3 == 0)
    {
        alert(`${num} chia hết cho 3 và 5`);
    }
    else{
        alert(`${num} không chia hết cho 3 và 5`);
    }
}