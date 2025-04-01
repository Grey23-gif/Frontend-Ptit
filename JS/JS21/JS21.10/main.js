let n = parseInt(prompt("Nhập n số nguyên tố cần in"));
let num = 2;
let dem = 0;
let _array = "";

while(dem < n){
    let check = 1;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i == 0)
        {
            check = 0;
            break;
        }
    }
    if(check == 1){
        _array += num + " ";
        dem++;
    }
    num++;
}
alert(`${n} số nguyên tố là: ${_array}`);

