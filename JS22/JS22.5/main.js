let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let sumOdd = 0, sumEven = 0;

for (let num of numbers) {
    if (num % 2 === 0) {
        sumEven += num;
    } else {
        sumOdd += num;
    }
}

console.log("Mảng số nguyên:", numbers);
console.log("Tổng các số chẵn:", sumEven);
console.log("Tổng các số lẻ:", sumOdd);
