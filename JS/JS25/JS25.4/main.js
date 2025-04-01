function num_prime(num) {
    if(num < 2 )
    {
        return console.log("Không phải số nguyên tố");
    }
    let check = 0;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return console.log("Không phải số nguyên tố");
            check = 1;
        }
    }
    if(check === 0) {
        return console.log("Là số nguyên tố");
    }
}
let num = prompt("Nhập số cần kiểm tra: ");
console.log(num_prime(num));