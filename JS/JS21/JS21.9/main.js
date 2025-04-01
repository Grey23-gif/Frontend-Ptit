let num = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(num)) {
    alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        alert(`${num} là số nguyên tố.`);
    } else {
        alert(`${num} không phải số nguyên tố.`);
    }
}
