let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
function find_index(arr){
    for(let i=1; i < arr.length;i++){
        if(arr[i] - arr[i-1] !== 1){
            return arr[i-1] + 1;
            break;
        }
    }
}
console.log("Số còn thiếu trong mảng liên tiếp là: " + find_index(arr));