let arr = [3, 1, 4, 1, 2, 2, 3, 3, 4, 4, 2, 5, 8, 10];
let num = [];
for(let i=0;i<arr.length;i++){
    if(num.indexOf(arr[i]) == -1){
        num.push(arr[i]);
    }
}
arr = num;
console.log("Sau khi loại bỏ trung lặp: ",arr.sort((a,b)=>a-b));