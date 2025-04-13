let arr = [3, 1, 4, 1, 2, 2, 3, 3, 4, 4, 2];
let max_count = 0;
let max_num = [];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]; 
    let count = 0; 
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === num) {   
            count++;
        }
    }

    if (count > max_count) {
        max_count = count;
        max_num = [num];
    } else if (count === max_count && !max_num.includes(num)) {
        max_num.push(num); 
    }
}

console.log("Phần tử xuất hiện nhiều nhất là:", Math.min(...max_num), 
            "với số lần xuất hiện là:", max_count);
