let num = parseFloat(prompt("Nhập 1 số:"));
let _array = "";
for(let i=1;i<=num;i++)
{
    if(num % i == 0)
    {
        _array += " "+i;
    }
}
alert(`Các ước số của ${num} là: ${_array}`);
